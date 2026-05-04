"use client";

import { useState } from "react";
import AnimalCard from "@/components/featured/AnimalCard";
import { FaSortAmountDown, FaSortAmountUpAlt, FaFilter } from "react-icons/fa";

const AnimalList = ({ initialAnimals }) => {
  const [animals, setAnimals] = useState(initialAnimals);
  const [activeSort, setActiveSort] = useState(null);

  const handleSort = (order) => {
    const sorted = [...animals].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setAnimals(sorted);
    setActiveSort(order);
  };

  return (
    <div className="space-y-8">
        
      <div className="flex flex-wrap items-center justify-between gap-4 bg-base-200 p-4 rounded-2xl">
        <div className="flex items-center gap-2 font-semibold">
          <FaFilter className="text-success" />
          <span>Sort By Price:</span>
        </div>

        <div className="join">
          <button
            onClick={() => handleSort("asc")}
            className={`btn join-item btn-sm md:btn-md ${
              activeSort === "asc" ? "btn-success text-white" : "btn-outline border-gray-300"
            }`}
          >
            <FaSortAmountUpAlt /> Low to High
          </button>
          <button
            onClick={() => handleSort("desc")}
            className={`btn join-item btn-sm md:btn-md ${
              activeSort === "desc" ? "btn-success text-white" : "btn-outline border-gray-300"
            }`}
          >
            <FaSortAmountDown /> High to Low
          </button>
        </div>
      </div>

      {/* Grid Display */}
      {animals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <div key={animal.id} className="transition-all duration-300 hover:-translate-y-2">
              <AnimalCard animal={animal} />
            </div>
          ))}
        </div>
      ) : (
        /* Empty State using DaisyUI Hero or Alert */
        <div className="hero min-h-[300px] bg-base-200 rounded-3xl">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold opacity-50">No animals found!</h3>
              <p className="py-4 opacity-60">Try adjusting your filters or check back later.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalList;