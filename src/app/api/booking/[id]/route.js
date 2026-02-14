"use server";

import { collection, dbConnect } from "@/app/lib/dbConnect";

export const postBooking = async (payload) => {


    const bookingCollection = await dbConnect(collection.BOOKING);

    const newBooking = {
      ...payload,
      status: "Pending",
      createdAt: new Date(),
    };

    const result = await bookingCollection.insertOne(newBooking);

    if (result.acknowledged) {
      return {
        success: true,
        message: `Booking created with ID ${result.insertedId.toString()}`
      };
    } else {
      return {
        success: false,
        message: "Something went wrong, try again later"
      };
    }

};
