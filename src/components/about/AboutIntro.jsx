const AboutIntro = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Simplifying Document Attestation Across Borders
          </h2>

          <p className="mt-6 text-[#64748B] leading-relaxed">
            Pro Attestation is a professional document legalization company
            helping individuals and businesses verify their documents for
            international use.
          </p>

          <p className="mt-4 text-[#64748B] leading-relaxed">
            From MEA attestation and Apostille to Embassy and MOFA verification,
            we manage the complete process with accuracy, transparency, and
            speed.
          </p>

          <p className="mt-4 text-[#64748B] leading-relaxed">
            Our services are trusted by students, professionals, families,
            and corporations across India.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ul className="space-y-4">
            {[
              "Government-authorized attestation process",
              "PAN India pickup & delivery",
              "Real-time application tracking",
              "Dedicated support team",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] font-bold">
                  ✓
                </span>
                <span className="text-[#0F172A] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;
