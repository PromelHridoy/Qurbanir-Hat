import AnimalList from "@/components/featured/AnimalList";


const AllAnimalsPage = async () => {
  const res = await fetch("https://qurbanir-hat-tau.vercel.app/data.json");
  const animals = await res.json();

  return (
    <div className="px-4 md:px-8 lg:px-12 py-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">All Animals</h2>
          <p className="text-gray-500 text-sm mt-1">Find your perfect animal for Qurbani</p>
        </div>
      </div>

      <AnimalList initialAnimals={animals} />
    </div>
  );
};

export default AllAnimalsPage;