"use client";

import toast from "react-hot-toast";

const BookingForm = ({ animalName, modalId }) => {
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    
   
    toast.success(`Booking request sent for ${animalName}!`);

    
    if (modalId) {
      document.getElementById(modalId).close();
    }

    form.reset();
  };

  return (
    <form onSubmit={handleBooking} className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="input input-bordered w-full focus:outline-success"
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        className="input input-bordered w-full focus:outline-success"
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="input input-bordered w-full focus:outline-success"
        required
      />
      <textarea
        placeholder="Address"
        className="textarea textarea-bordered w-full h-24 focus:outline-success"
        required
      ></textarea>
      
      <button type="submit" className="btn btn-success btn-block text-white">
        Submit Booking Request
      </button>
    </form>
  );
};

export default BookingForm;