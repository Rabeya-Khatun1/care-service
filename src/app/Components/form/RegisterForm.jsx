"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { postUser } from '@/app/api/register/route';

const RegisterForm = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const nidNumber = e.target.nidNumber.value;
        const password = e.target.password.value;
const result = await postUser({name, email, number, nidNumber, password});
        setLoading(false);
        if(result.success){
            router.push('/login');
            alert("successfully registered");
        } else{
            alert(result.message);
        }
    };


    return (
     <form onSubmit={handleRegister} className="space-y-4">
                    <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                    <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" required />
                    <input name="number" type="number" placeholder="Contact Number" className="input input-bordered w-full" required />
                    <input name="nidNumber" type="number" placeholder="NID Number" className="input input-bordered w-full" required />
                    <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
                    
                    <button type="submit" className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
    );
};

export default RegisterForm;