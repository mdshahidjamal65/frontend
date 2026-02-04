const AboutProcess = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center">
          Our Simple & Secure Process
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            "Document Collection",
            "Verification & Authentication",
            "Government / Embassy Processing",
            "Secure Delivery",
          ].map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#1D4ED8] text-white font-bold">
                {index + 1}
              </div>
              <p className="mt-4 font-medium text-[#0F172A]">
                {step}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutProcess;
