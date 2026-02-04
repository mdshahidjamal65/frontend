import aboutImg from "../../assets/images/about-office.webp"; 
// you can replace this image later

const AboutSection = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block text-[#1D4ED8] font-semibold mb-3">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Trusted Certificate <br /> Attestation Experts
            </h2>

            <p className="mt-3 text-gray-600 font-medium">
              PAN India Service with Global Reach
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              At Pro Attestation, we specialize in document attestation,
              apostille, and embassy legalization services for over 120+
              countries including UAE, Saudi Arabia, Qatar, Kuwait, Oman, and
              more.
              <br /><br />
              Whether you’re applying for a job abroad, planning higher
              education overseas, or relocating with family — we ensure your
              documents are processed securely, accurately, and on time.
            </p>

            {/* BULLET POINTS */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-800 font-medium">
                  100% genuine attestation
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-800 font-medium">
                  Real-time status updates
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-800 font-medium">
                  Dedicated support agents
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Pro Attestation Office"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
