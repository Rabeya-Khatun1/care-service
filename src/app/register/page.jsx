
import Link from 'next/link';
import RegisterForm from '../Components/form/RegisterForm';



const Register = () => {

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200">
            <div className="card w-96 bg-white shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
               <RegisterForm></RegisterForm>
                <p className="mt-4 text-center text-sm">
                    Already have an account? <Link href="/login" className="text-blue-600 font-bold">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;