"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const UpdateProfileModal = () => {
  // 1. Initialize state
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await authClient.updateUser({
        name: name,
        image: image,
      });
      
      // Close modal on success (if using HTML dialog)
      const modal = document.getElementById('update_modal');
      if (modal) modal.close();
      
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog id="update_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center mb-4">
          Update Profile
        </h3>

        <div className="form-control gap-3">
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="flex gap-2 mt-6">
          <button 
            onClick={handleUpdate} 
            className={`btn btn-primary flex-1 ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>

          <form method="dialog" className="flex-1">
            <button className="btn btn-ghost w-full">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateProfileModal;