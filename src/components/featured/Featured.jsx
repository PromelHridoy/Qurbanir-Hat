import AnimalCard from "./AnimalCard";


const Featured = async () => {
     const res = await fetch('https://qurbanir-hat-qobz.vercel.app/data.json')
    const animals = await res.json()
    const topAnimals = animals.slice(0, 4)
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-6">
      
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Top Animals
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {topAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

    </div>
    );
};

export default Featured;