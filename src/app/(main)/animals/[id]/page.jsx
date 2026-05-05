import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import AnimalDetailsCard from "@/components/details/AnimalDetailsCard";

const AnimalDetails = async ({ params }) => {
  const { id } = await params;
  
  const res = await fetch("https://qurbanir-hat-qobz.vercel.app/data.json");
  const animals = await res.json();
  const animal = animals.find((item) => item.id.toString() === id);

  if (!animal) return <div className="text-center py-20">Animal Not Found!</div>;

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <Link href="/all-animals" className="btn btn-ghost gap-2 mb-8 hover:text-success transition-all">
        <FaArrowLeft /> Back to All Animals
      </Link>
      <AnimalDetailsCard animal={animal} />
    </div>
  );
};

export default AnimalDetails;