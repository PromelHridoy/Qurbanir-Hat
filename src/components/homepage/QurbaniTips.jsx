import { FaHeartbeat, FaCheckCircle, FaHandHoldingHeart, FaLeaf } from "react-icons/fa";

const QurbaniTips = () => {
  const tips = [
    {
      id: 1,
      title: "Physical Health",
      desc: "Ensure the animal is active, healthy, and free from any visible injuries or defects.",
      icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    },
    {
      id: 2,
      title: "Age Requirement",
      desc: "For cows, it must be at least 2 years old; for goats, at least 1 year old.",
      icon: <FaCheckCircle className="text-green-500 text-3xl" />,
    },
    {
      id: 3,
      title: "Teeth Check",
      desc: "Always check the front teeth (two permanent teeth) to confirm the animal's age.",
      icon: <FaHandHoldingHeart className="text-blue-500 text-3xl" />,
    },
    {
      id: 4,
      title: "Natural Feed",
      desc: "Choose animals that have been raised on natural fodder and clean water.",
      icon: <FaLeaf className="text-emerald-500 text-3xl" />,
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Qurbani <span className="text-green-600">Tips</span></h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">Essential guide to help you choose the right animal and ensure a smooth Qurbani experience.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div key={tip.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all p-6 text-left border-b-4 border-green-500">
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;