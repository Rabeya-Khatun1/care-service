"use client"
import React from 'react';
import  { useState } from 'react';

const BookingForm = ({ service }) => {

   

    const [bookingData, setBookingData] = useState({
        duration: 1,
        division: '',
        district: '',
        address: ''
    });

    const unitPrice = parseInt(service?.pricing.replace(/\D/g, ""));
    const totalCost = unitPrice * bookingData.duration;

    const handleConfirm = (e) => {
        e.preventDefault();
        const finalData = {
            ...bookingData,
            serviceId: service?.serviceId,
            totalCost,
            status: 'Pending'
        };
        console.log("Saving to Database...", finalData);
        alert("Booking request submitted! Current Status: Pending");
    };



    return (
            <form onSubmit={handleConfirm} className="space-y-4">
                {/* Step 1: Duration */}
                <div className="form-control">
                    <label className="label">Select Duration (Hours/Days)</label>
                    <input 
                        type="number" 
                        min="1" 
                        className="input input-bordered" 
                        value={bookingData.duration}
                        onChange={(e) => setBookingData({...bookingData, duration: e.target.value})}
                    />
                </div>

                {/* Step 2: Location */}
                <div className="grid grid-cols-2 gap-4">
                    <select 
                        className="select select-bordered"
                        onChange={(e) => setBookingData({...bookingData, division: e.target.value})}
                        required
                    >
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                    </select>

                    <input 
                        type="text" 
                        placeholder="District/City" 
                        className="input input-bordered"
                        onChange={(e) => setBookingData({...bookingData, district: e.target.value})}
                        required
                    />
                </div>

                <textarea 
                    placeholder="Full Address (Area/Street/House)" 
                    className="textarea textarea-bordered w-full"
                    onChange={(e) => setBookingData({...bookingData, address: e.target.value})}
                    required
                ></textarea>

                {/* Step 3: Total Cost Display */}
                <div className="p-4 bg-slate-100 rounded-lg flex justify-between items-center">
                    <span className="font-semibold">Total Cost:</span>
                    <span className="text-xl font-bold text-blue-600">BDT {totalCost}</span>
                </div>

                {/* Step 4: Confirm */}
                <button type="submit" className="btn btn-primary w-full">Confirm Booking</button>
            </form>
    );
};

export default BookingForm;