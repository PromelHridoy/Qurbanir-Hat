import Image from "next/image";
import { FaWeightHanging, FaBirthdayCake, FaMapMarkerAlt, FaTags } from "react-icons/fa";
import ActionButtons from "./ActionButtons";


const AnimalDetailsCard = ({ animal }) => {
  const specs = [
    { icon: <FaWeightHanging />, label: "Weight", value: `${animal.weight} kg` },
    { icon: <FaBirthdayCake />, label: "Age", value: `${animal.age} years` },
    { icon: <FaMapMarkerAlt />, label: "Location", value: animal.location },
    { icon: <FaTags />, label: "Breed", value: animal.breed },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      {/* --- Image Section --- */}
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl h-[450px] lg:h-[550px]">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute top-6 left-6">
          <span className="badge badge-success text-white p-4 font-bold shadow-lg uppercase">
            {animal.category}
          </span>
        </div>
      </div>

      {/* --- Info Section --- */}
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-black text-green-900 leading-tight">{animal.name}</h1>
          <p className="text-3xl font-bold text-success mt-2">৳ {animal.price.toLocaleString()}</p>
        </div>

        <div className="bg-base-200 p-6 rounded-3xl border-l-8 border-success italic text-lg text-gray-600">
          {animal.description}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white border border-base-200 rounded-2xl hover:border-success transition-colors shadow-sm">
              <div className="text-success text-2xl bg-success/10 p-3 rounded-xl">{spec.icon}</div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">{spec.label}</p>
                <p className="font-bold text-gray-800">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Button Section (Client Component) */}
        <ActionButtons animalName={animal.name} />
      </div>
    </div>
  );
};

export default AnimalDetailsCard;