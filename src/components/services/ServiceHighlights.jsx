const ServiceHighlights = ({ items }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl p-5 text-center hover:shadow-md transition"
          >
            <div className="text-[#1D4ED8] text-2xl mb-2">
              {item.icon}
            </div>
            <h4 className="font-semibold text-[#0F172A] mb-1">
              {item.title}
            </h4>
            <p className="text-sm text-[#64748B]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlights;
