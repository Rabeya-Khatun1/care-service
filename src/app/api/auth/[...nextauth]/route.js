import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { dbConnect, collection } from "@/app/lib/dbConnect";

export const authOptions = {
  providers: [

    //Credentials Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const userCollection = await dbConnect(collection.USER);

        const user = await userCollection.findOne({
          email: credentials.email
        });

        if (!user) return null;

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role || "user"
        };
      }
    }),

    //  Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

  ],

  session: {
    strategy: "jwt"
  },

  pages: {
    signIn: "/login",
    error: "/login?error=true"
  },

  callbacks: {

    async signIn({ user, account }) {

      if (account.provider === "google") {

        const userCollection = await dbConnect(collection.USER);

        const existingUser = await userCollection.findOne({
          email: user.email,
        });

        if (!existingUser) {
          await userCollection.insertOne({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user",
            provider: "google",
            createdAt: new Date(),
            status: "active",
          });
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
