import { dbConnect, collection } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";

// Status styles consistent with MyBookings page
const statusStyles = {
  Pending: "text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full inline-block",
  Confirmed: "text-blue-700 bg-blue-100 px-2 py-1 rounded-full inline-block",
  Completed: "text-green-700 bg-green-100 px-2 py-1 rounded-full inline-block",
  Cancelled: "text-red-700 bg-red-100 px-2 py-1 rounded-full inline-block",
};

export default async function BookingDetails({ params }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) return notFound();

  const bookingCollection = await dbConnect(collection.BOOKING);
  const booking = await bookingCollection.findOne({ _id: new ObjectId(id) });

  if (!booking) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500 text-lg">Booking record not found.</p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10">
      <header className="border-b pb-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Booking Details
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">ID: {id}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-white shadow-sm border rounded-lg p-4 sm:p-6">
        <DetailItem label="Service" value={booking.serviceName} />
        <DetailItem 
          label="Status" 
          value={booking.status} 
          isStatus 
        />
        <DetailItem label="Total Amount" value={`৳${booking.totalAmount}`} />
        <DetailItem 
          label="Duration" 
          value={`${booking.duration?.hours || 0}h ${booking.duration?.minutes || 0}m`} 
        />
        <DetailItem 
          label="Location" 
          value={`${booking.location?.area || "N/A"}, ${booking.location?.city || "N/A"}`} 
        />
        <DetailItem label="Customer Email" value={booking.userEmail || "N/A"} />
      </div>
    </main>
  );
}

// Reusable DetailItem component
function DetailItem({ label, value, isStatus = false }) {
  return (
    <div className="flex flex-col">
      <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</p>
      <p
        className={`mt-1 text-sm sm:text-lg ${
          isStatus
            ? statusStyles[value] || "text-gray-700"
            : "text-gray-900 font-medium"
        }`}
      >
        {value || "N/A"}
      </p>
    </div>
  );
}
