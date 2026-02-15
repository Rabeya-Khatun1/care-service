"use client";
import { postBooking } from "@/app/api/booking/[id]/route";
import { locations } from "@/data/locations";
import { useState } from "react";

const BookingForm = ({ service }) => {
  const rate = service?.price || 800;
  const vat = 0.15;

  // User inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Location & duration
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(1);

  // Location data
  const regions = [...new Set(locations.map(loc => loc.region))];
  const districts = locations
    .filter(loc => loc.region === region)
    .map(loc => loc.district);
  const selectedDistrictData = locations.find(
    loc => loc.region === region && loc.district === district
  );
  const areas = selectedDistrictData?.covered_area || [];

  const totalWithoutVat = days * hours * rate;
  const totalCost = totalWithoutVat + totalWithoutVat * vat;

  const handleBooking = async () => {
    if (!name || !email) {
      alert("Please enter your name and email");
      return;
    }
    if (!region || !district || !area) {
      alert("Please complete location selection");
      return;
    }

    const bookingData = {
      serviceId: service?._id,
      serviceName: service?.title,
      userName: name,
      userEmail: email,
      duration: { days, hours },
      location: {
        region,
        district,
        city: selectedDistrictData?.city,
        area
      },
      totalAmount: totalCost,
      status: "Pending",
      createdAt: new Date()
    };

    const result = await postBooking(bookingData);

    if(result.success){
      alert("Booking Confirmed!");
      // Reset form
      setName("");
      setEmail("");
      setRegion("");
      setDistrict("");
      setArea("");
      setDays(1);
      setHours(1);
    } else{
      alert(result.message);
    }
  };

  return (
    <div className="space-y-4">

      {/* User Info & Duration */}
      <div className="flex gap-4">
        <div className="flex flex-col w-1/2">
          <label className="font-semibold mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />
          <label className="font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />
          <label className="font-semibold mb-1">Days</label>
          <input
            type="number"
            min="1"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            placeholder="Days"
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label className="font-semibold mb-1">Hours per Day</label>
          <input
            type="number"
            min="1"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            placeholder="Hours per day"
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Region */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Select Division</label>
        <select
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setDistrict("");
            setArea("");
          }}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Division</option>
          {regions.map((reg) => (
            <option key={reg} value={reg}>{reg}</option>
          ))}
        </select>
      </div>

      {/* District */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Select District</label>
        <select
          value={district}
          onChange={(e) => {
            setDistrict(e.target.value);
            setArea("");
          }}
          disabled={!region}
          className="border p-2 rounded w-full"
        >
          <option value="">Select District</option>
          {districts.map((dist) => (
            <option key={dist} value={dist}>{dist}</option>
          ))}
        </select>
      </div>

      {/* Area */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Select Area</label>
        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          disabled={!district}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Area</option>
          {areas.map((ar) => (
            <option key={ar} value={ar}>{ar}</option>
          ))}
        </select>
      </div>

      {/* Total */}
      <div className="bg-gray-100 p-4 rounded text-xl font-bold text-primary">
        Total Cost: ৳ {totalCost}
      </div>

      <button
        type="button"
        onClick={handleBooking}
        className="bg-primary text-white px-6 py-3 rounded w-full"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingForm;
