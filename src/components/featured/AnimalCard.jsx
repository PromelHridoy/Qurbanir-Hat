import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaWeight,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const AnimalCard = ({ animal }) => {
  const { id, name, type, breed, price, weight, age, location, image } = animal;

  return (
    <div className="group card bg-base-100 border border-base-200 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl overflow-hidden">
  
  {/* Image Section with Overlay Effect */}
  <figure className="relative h-60 w-full overflow-hidden">
    <Image
      src={image}
      alt={name}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Badge Overlay */}
    <div className="absolute top-3 right-3">
      <div className="badge badge-primary font-semibold shadow-sm">{type}</div>
    </div>
  </figure>

  {/* Content Section */}
  <div className="card-body p-5 gap-1">
    
    {/* Header: Title & Breed */}
    <div className="mb-2">
      <h2 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors">
        {name}
      </h2>
      <p className="text-xs uppercase tracking-widest font-medium text-gray-400">{breed}</p>
    </div>

    <div className="divider my-1 opacity-50"></div>

    {/* Info Grid - 2 columns for a cleaner look */}
    <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-2 text-sm font-medium text-base-content/70">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
          <FaMoneyBillWave />
        </div>
        <span>৳{price}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          <FaWeight />
        </div>
        <span>{weight} kg</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
          <FaCalendarAlt />
        </div>
        <span>{age} yrs</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-2 bg-red-50 text-red-600 rounded-lg">
          <FaMapMarkerAlt />
        </div>
        <span className="truncate">{location}</span>
      </div>
    </div>

    {/* Action Button */}
    <div className="card-actions mt-6">
      <Link 
        href={`/animals/${id}`} 
        className="btn btn-primary btn-block group-hover:shadow-lg transition-all normal-case"
      >
        View Details
      </Link>
    </div>

  </div>
</div>
  );
};

export default AnimalCard;