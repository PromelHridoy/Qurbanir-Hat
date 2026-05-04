"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UpdateProfileModal = ({ initialName = "", initialImage = "" }) => {
  const [name, setName] = useState(initialName);
  const [image, setImage] = useState(initialImage);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async () => {
    if (!name.trim()) return;

    setLoading(true);
    try {
      await authClient.updateUser({
        name: name,
        image: image,
      });

      router.refresh();
      
      
      const modal = document.getElementById('update_modal');
      if (modal) modal.close();
      
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        className="btn btn-outline btn-sm" 
        onClick={() => document.getElementById('update_modal').showModal()}
      >
        Edit Profile
      </button>

      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-base-100 shadow-xl border border-base-200">
          <h3 className="font-bold text-xl text-primary mb-6">
            Update Profile
          </h3>

          <div className="space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Ex: Hridoy"
                className="input input-bordered focus:input-primary w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Profile Image URL</span>
              </label>
              <input
                type="text"
                placeholder="https://image-link.com"
                className="input input-bordered focus:input-primary w-full"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-action flex gap-3">
            <button 
              onClick={handleUpdate} 
              className="btn btn-primary flex-1 shadow-md"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Save Changes"
              )}
            </button>

            <form method="dialog" className="flex-1">
              <button className="btn btn-ghost w-full border border-base-300">Cancel</button>
            </form>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UpdateProfileModal;