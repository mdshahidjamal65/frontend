const AboutStats = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {[
          { value: "12+", label: "Years Experience" },
          { value: "150K+", label: "Documents Processed" },
          { value: "120+", label: "Countries Served" },
          { value: "100%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-[#1D4ED8]">
              {stat.value}
            </h3>
            <p className="mt-2 text-[#64748B]">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AboutStats;
