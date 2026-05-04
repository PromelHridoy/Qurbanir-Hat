
import Image from 'next/image';
import Link from 'next/link';
import { FaUserEdit, FaEnvelope, FaIdBadge } from 'react-icons/fa';

const ProfilePage = () => {
    const user = {
    displayName: "Promel Hossain Hridoy",
    email: "promel@example.com",
    // photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Promel", // ডামি ইমেজ
  };
    return (
        <div className="container mx-auto flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-primary/10">
        
        {/* উপরের কভার অংশ */}
        <div className="h-32 bg-gradient-to-r from-primary to-secondary rounded-t-2xl"></div>

        <div className="card-body items-center text-center -mt-16">
          {/* ইউজার ইমেজ */}
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-xl bg-white">
              {/* <Image src={user.photoURL} alt="User Profile" width={40} height={40}/> */}
            </div>
          </div>

          {/* ইউজার ইনফরমেশন */}
          <div className="mt-4 space-y-2">
            <h2 className="card-title text-3xl font-extrabold text-primary">
              {user.displayName}
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <FaEnvelope className="text-secondary" />
              <span className="font-medium">{user.email}</span>
            </div>
          </div>

          {/* অতিরিক্ত ডিটেইলস (ব্যাজ স্টাইল) */}
          <div className="flex gap-2 mt-4">
            <div className="badge badge-outline badge-primary p-3 gap-2">
              <FaIdBadge /> Active Member
            </div>
          </div>

          <div className="divider"></div>

          {/* অ্যাকশন বাটন */}
          <div className="card-actions w-full">
            <Link 
              href="/update-profile" 
              className="btn btn-primary btn-block gap-2 text-white transition-all hover:scale-105"
            >
              <FaUserEdit size={20} />
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProfilePage;