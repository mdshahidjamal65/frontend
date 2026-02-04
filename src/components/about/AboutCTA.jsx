import { NavLink } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] py-16 text-center text-white">
      <h2 className="text-3xl font-bold">
        Ready to Get Your Documents Attested?
      </h2>
      <p className="mt-4 text-blue-100">
        Speak with our experts today for fast and reliable assistance.
      </p>
      <NavLink
        to="/contact"
        className="inline-block mt-8 bg-white text-[#1D4ED8] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Contact Us
      </NavLink>
    </section>
  );
};

export default AboutCTA;
