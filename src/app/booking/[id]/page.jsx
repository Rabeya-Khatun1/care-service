import { services } from '@/data/service';
import BookingForm from '@/app/Components/form/BookingForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";


const BookingPage =async ({ params }) => {

     const session = await getServerSession(authOptions);
console.log("SESSION:", session); 
    if (!session) {
        redirect("/login"); 
    }

    const { id } = await (params);
    const service = services.find(s => s.serviceId === id);


    return (
        <div className="max-w-xl mx-auto my-10 p-6 bg-white shadow-2xl rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Booking: {service?.title}</h2>
            
     <BookingForm service={service}></BookingForm>
        </div>
    );
};

export default BookingPage;