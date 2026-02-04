const OurImpact = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[#1D4ED8] font-semibold mb-3">
            Our Impact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Thousands Across India
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With decades of experience and thousands of successful cases,
            we have established ourselves as leaders in document attestation
            services across India.
          </p>
        </div>

        {/* IMPACT CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]">
              📄
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              150,000+
            </h3>

            <p className="mt-2 font-semibold text-gray-800">
              Documents Attested
            </p>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Helping clients from across India with education, work,
              and migration documentation.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]">
              ⏱
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              12+
            </h3>

            <p className="mt-2 font-semibold text-gray-800">
              Years of Experience
            </p>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Proven expertise in apostille, MEA, and embassy
              legalization services.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]">
              ✅
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              100%
            </h3>

            <p className="mt-2 font-semibold text-gray-800">
              Approval Rate
            </p>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Transparent processing with a strong commitment
              to accuracy and timelines.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurImpact;
