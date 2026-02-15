import { getServerSession } from "next-auth";
import { getBookings } from "../api/myBookings/route";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { cancelBooking } from "../api/myBookings/actions/route";

// Helper to handle status badge colors
const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Confirmed: "bg-blue-100 text-blue-700 border-blue-200",
  Completed: "bg-green-100 text-green-700 border-green-200",
  Cancelled: "bg-red-100 text-red-700 border-red-200",
};

export default async function MyBookingsPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  let bookings = await getBookings(session.user.email);

  bookings = bookings.map((b) => ({
    ...b,
    _id: b._id.toString(),
    createdAt: b.createdAt.toISOString(),
  }));

  if (!bookings || bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-500">
        <p className="text-xl font-medium">No bookings found</p>
        <p className="text-sm">When you book a service, it will appear here.</p>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-10">
      <header className="mb-6 sm:mb-8 border-b pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          My Bookings
        </h1>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Manage and track your service appointments.
        </p>
      </header>

      <div className="flex flex-col gap-4 sm:gap-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="group relative bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            {/* Left Side: Service & Status */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {booking.serviceName}
                  </h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${statusStyles[booking.status] || "bg-gray-100 text-gray-600"}`}
                  >
                    {booking.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  Booked on{" "}
                  {new Date(booking.createdAt).toLocaleDateString(undefined, {
                    dateStyle: "long",
                  })}
                </p>
              </div>
            </div>

            {/* Middle: Details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm border-t sm:border-t-0 sm:border-x px-0 sm:px-6 py-2 sm:py-0 w-full sm:w-auto">
              <div>
                <p className="text-gray-400 uppercase tracking-wider font-bold text-[10px]">
                  Duration
                </p>
                <p className="font-medium text-gray-700">
                  {booking.duration
                    ? `${booking.duration.hours}h ${booking.duration.minutes}m`
                    : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-400 uppercase tracking-wider font-bold text-[10px]">
                  Location
                </p>
                <p className="font-medium text-gray-700 truncate max-w-[120px] sm:max-w-[150px]">
                  {booking.location
                    ? `${booking.location.area}, ${booking.location.city}`
                    : "N/A"}
                </p>
              </div>
              <div className="hidden sm:block">
                <p className="text-gray-400 uppercase tracking-wider font-bold text-[10px]">
                  Email
                </p>
                <p className="font-medium text-gray-700">
                  {booking.userEmail || booking.email}
                </p>
              </div>
            </div>

            {/* Right Side: Price & Actions */}
            <div className="flex flex-col sm:items-end justify-between gap-2 w-full sm:w-auto mt-2 sm:mt-0">
              <p className="text-xs sm:hidden">Total Amount</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">
                ৳{booking.totalAmount.toLocaleString()}
              </p>
              <div className="flex flex-row sm:flex-col gap-2 mt-1">
                <Link
                  href={`/myBookings/${booking._id}`}
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md text-center"
                >
                  View Details
                </Link>
                {booking.status === "Pending" && (
                  <form action={cancelBooking.bind(null, booking._id)}>
                    <button
                      type="submit"
                      className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-600 rounded-md w-full sm:w-auto"
                    >
                      Cancel
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
