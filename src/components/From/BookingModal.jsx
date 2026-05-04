"use client";

import React from "react";
import BookingForm from "./BookingForm";
import { FaTimes } from "react-icons/fa";

const BookingModal = ({ animalName, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      <div 
        className="relative w-full max-w-lg bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
      >
        <div className="bg-success p-8 text-white text-center relative">
          <h3 className="text-2xl font-bold tracking-tight">Confirm Your Booking</h3>
          <p className="text-sm opacity-90 mt-1 font-medium">
            You are booking: <span className="underline">{animalName}</span>
          </p>
          
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-8">
          <BookingForm 
            animalName={animalName} 
            onSuccess={closeModal} 
          />
        </div>

        <div className="bg-base-200 py-3 text-center">
           <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
             QurbaniHat - Trusted & Secured
           </p>
        </div>
      </div>

      <div 
        className="absolute inset-0 -z-10" 
        onClick={closeModal}
      ></div>
    </div>
  );
};

export default BookingModal;