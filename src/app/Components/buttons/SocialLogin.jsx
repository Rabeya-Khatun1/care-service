"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const result = await signIn("google", {
      redirect: false,
    });

    if (result?.ok) {
      alert("Successfully logged in with Google!");
      router.push("/service"); 
    } else {
      alert("Login failed");
    }
  };

  return (
   
          <button
  onClick={() => signIn("google", { callbackUrl: "/service" })}
  className="btn btn-outline w-full"
>
  Continue with Google
</button>
 
  );
};

export default SocialLogin;
