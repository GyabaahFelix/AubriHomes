import React from "react";

const Services = () => {
  const services = [
    {
      title: "Property Listings",
      desc: "Find verified homes and apartments across Ghana with transparent pricing and images.",
      icon: "🏠",
    },
    {
      title: "Property Management",
      desc: "Let us handle your property maintenance and tenant management seamlessly.",
      icon: "🛠️",
    },
    {
      title: "Consultation & Support",
      desc: "Talk to our housing experts for the best advice on property investment and rentals.",
      icon: "💬",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-10">
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                {s.title}
              </h2>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
