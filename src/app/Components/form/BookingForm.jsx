"use client";
import { postBooking } from "@/app/api/booking/[id]/route";
import { locations } from "@/data/locations";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const BookingForm = ({ service }) => {
  const { data: session } = useSession();

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

  // Fill email automatically from session
  useEffect(() => {
    if (session?.user?.email) {
      setEmail(session.user.email);
    }
  }, [session]);

  // Location data
  const regions = [...new Set(locations.map((loc) => loc.region))];
  const districts = locations
    .filter((loc) => loc.region === region)
    .map((loc) => loc.district);
  const selectedDistrictData = locations.find(
    (loc) => loc.region === region && loc.district === district
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
        area,
      },
      totalAmount: totalCost,
      status: "Pending",
      createdAt: new Date(),
    };

    const result = await postBooking(bookingData);

    if (result.success) {
      alert("Booking Confirmed!");
   
      setName("");
      setDays(1);
      setHours(1);
      setRegion("");
      setDistrict("");
      setArea("");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* User Info & Duration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none bg-gray-100"
              readOnly 
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Days</label>
            <input
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Hours per Day</label>
            <input
              type="number"
              min="1"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Total Cost</label>
            <div className="bg-gray-100 p-3 rounded-lg text-lg font-bold text-green-600">
              ৳ {totalCost.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Select Division</label>
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
              setDistrict("");
              setArea("");
            }}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
          >
            <option value="">Select Division</option>
            {regions.map((reg) => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Select District</label>
          <select
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              setArea("");
            }}
            disabled={!region}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none disabled:bg-gray-100"
          >
            <option value="">Select District</option>
            {districts.map((dist) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Select Area</label>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            disabled={!district}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none disabled:bg-gray-100"
          >
            <option value="">Select Area</option>
            {areas.map((ar) => (
              <option key={ar} value={ar}>
                {ar}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        type="button"
        onClick={handleBooking}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg w-full transition-all"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingForm;