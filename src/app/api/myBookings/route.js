import { collection, dbConnect } from "@/app/lib/dbConnect";


export const getBookings = async (userEmail) => {
  const bookingCollection = await dbConnect(collection.BOOKING);

  const bookings = await bookingCollection
    .find({ userEmail }) 
    .sort({ createdAt: -1 }) 
    .toArray();

  return bookings;
};
