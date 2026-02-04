import { NavLink } from "react-router-dom";

const services = [
  {
    title: "MEA Attestation",
    desc: "Mandatory attestation by the Ministry of External Affairs for international document acceptance.",
    link: "/services/mea-attestation",
    icon: "🏛️",
  },
  {
    title: "Apostille Services",
    desc: "Fast apostille services for Hague Convention member countries without embassy involvement.",
    link: "/services/apostille-services",
    icon: "📜",
  },
  {
    title: "Embassy Attestation",
    desc: "Complete embassy attestation support for UAE, Qatar, Saudi Arabia, Kuwait, and more.",
    link: "/services/embassy-attestation",
    icon: "🌍",
  },
  {
    title: "Dubai Visa Services",
    desc: "End-to-end Dubai and UAE visa assistance for work, travel, and business needs.",
    link: "/services/dubai-visa-services",
    icon: "✈️",
  },
  {
    title: "HRD / Home Department",
    desc: "State-level HRD and Home Department attestation before MEA legalization.",
    link: "/services/hrd-department",
    icon: "📑",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[#1D4ED8] font-semibold mb-3">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Document Attestation Services
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We provide complete attestation solutions for personal,
            educational, and commercial documents with global acceptance.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl bg-[#E0E7FF] text-2xl">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

              <NavLink
                to={service.link}
                className="inline-flex items-center gap-2 mt-5 text-[#1D4ED8] font-semibold hover:text-[#1E40AF]"
              >
                Learn more →
              </NavLink>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
