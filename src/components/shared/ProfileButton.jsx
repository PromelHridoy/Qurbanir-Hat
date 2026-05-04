"use client";

import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import UpdateProfileModal from "../From/UpdateProfileModal";

const ProfileButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-success btn-lg w-full text-white shadow-2xl hover:scale-[1.02] active:scale-95 transition-all gap-3"
      >
        <FaUserEdit size={20} />
        Update Information
      </button>

      {isModalOpen && (
        <UpdateProfileModal
          closeModal={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default ProfileButton;