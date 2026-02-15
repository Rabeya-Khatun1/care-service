import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { dbConnect, collection } from "@/app/lib/dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // 1️⃣ Connect to database
        const userCollection = await dbConnect(collection.USER);

        // 2️⃣ Find user by email
        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) return null;

        // 3️⃣ Check password
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) return null;

        // 4️⃣ Return user object
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role || "user" // optional: default role
        };
      }
    }),
    //   GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],

  session: {
    strategy: "jwt"
  },

  pages: {
    signIn: "/login", // Custom login page
    error: "/login?error=true" // Optional error redirect
  },

  callbacks: {
    // ✅ Sign in callback – control who can login
    async signIn({ user, account, profile, email, credentials }) {
      // Example: Only allow users with email from your domain
      // const isAllowedToSignIn = user.email.endsWith("@example.com");
      const isAllowedToSignIn = true; // change this logic if needed

      if (isAllowedToSignIn) {
        return true;
      } else {
        return false; // deny login
        // Or redirect: return "/unauthorized";
      }
    },

    // ✅ JWT callback – store extra info in token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    // ✅ Session callback – what client receives
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },

  secret: process.env.NEXTAUTH_SECRET, // required for JWT
  debug: process.env.NODE_ENV === "development"
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
