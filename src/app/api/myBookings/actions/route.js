"use server"
import { dbConnect, collection } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function cancelBooking(id) {
  const bookingCollection = await dbConnect(collection.BOOKING);

  await bookingCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { status: "Cancelled" } }
  );

  // page refresh without full reload
  revalidatePath("/myBookings");
}
