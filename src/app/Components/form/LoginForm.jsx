"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import React from 'react';

const LoginForm = () => {

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res.error) {
            alert("Login Failed!");
        } else {
            router.push("/"); 
        }
    };


    return (
         <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-xl space-y-4">
                <h1 className="text-2xl font-bold">Login</h1>
                <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
                <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
                <button type="submit" className="btn btn-primary w-full">Login</button>
                <p className="text-sm mt-2">Don't have an account? <a href="/register" className="text-blue-600 font-bold">Register here</a></p>
            </form>
    );
};

export default LoginForm;