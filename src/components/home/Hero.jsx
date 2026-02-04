import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791055366-0d553872125f')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            India’s Trusted Document <br />
            Attestation Services <br />
            for <span className="text-[#60A5FA]">MEA, Embassy & Apostille</span>
          </h1>

          <p className="mt-6 text-gray-200 text-base md:text-lg">
            Get your educational, personal, and commercial documents attested
            quickly and reliably for international use. Serving clients across
            India with 100% genuine attestation support for UAE, Saudi Arabia,
            Qatar, Oman, Kuwait & more.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <NavLink
              to="/contact"
              className="inline-block bg-[#1D4ED8] hover:bg-[#1E40AF] text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Talk to an Expert
            </NavLink>
          </div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-[#60A5FA] text-xl">•</span>
              Fast Processing
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#60A5FA] text-xl">•</span>
              Doorstep Pickup & Delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#60A5FA] text-xl">•</span>
              24/7 Customer Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
