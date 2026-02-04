const AboutWhyUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
          Why Thousands Trust Pro Attestation
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Handling",
              text: "Experienced professionals managing every document with precision."
            },
            {
              title: "Transparent Process",
              text: "Clear timelines, honest pricing, and zero hidden charges."
            },
            {
              title: "Global Acceptance",
              text: "Documents accepted by embassies, universities, and employers worldwide."
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#1D4ED8]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#64748B] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutWhyUs;
