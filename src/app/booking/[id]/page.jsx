import { services } from '@/data/service';
import BookingForm from '@/app/Components/form/BookingForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";


const BookingPage =async ({ params }) => {

     const session = await getServerSession(authOptions);
     console.log('sesseion', session)
    if (!session) {
        redirect("/login"); 
    }

    const { id } = await (params);
    const service = services.find(s => s.serviceId === id);


    return (
 <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="w-full max-w-xl p-8 shadow-2xl rounded-2xl bg-white space-y-6">
    <h2 className="text-2xl font-bold mb-6 text-center">{service?.title}</h2>

    {/* Form content */}
    <BookingForm service={service} />
  </div>
</div>
    );
};

export default BookingPage;