"use client";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import BookingModal from "../From/BookingModal";

const ActionButtons = ({ animalName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-success btn-lg w-full text-white shadow-2xl hover:scale-[1.02] active:scale-95 transition-all gap-3"
      >
        <FaCheckCircle /> Book This Animal Now
      </button>

      {isModalOpen && (
        <BookingModal
          animalName={animalName} 
          closeModal={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default ActionButtons;