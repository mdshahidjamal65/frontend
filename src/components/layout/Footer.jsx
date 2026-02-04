import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* COLUMN 1 – COMPANY INFO */}
          <div>
            <img src={logo} alt="Pro Attestation" className="h-14 mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              Pro Attestation is a trusted document attestation company in India,
              delivering reliable MEA, Apostille, and Embassy legalization services
              with complete transparency and expert support.
            </p>
          </div>

          {/* COLUMN 2 – SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-[#1D4ED8] inline-block pb-1">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/services/certificate-attestation" className="hover:text-[#60A5FA]">
                  Certificate Attestation
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/embassy-attestation" className="hover:text-[#60A5FA]">
                  Embassy Attestation
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/apostille-services" className="hover:text-[#60A5FA]">
                  Apostille Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/mofa-attestation" className="hover:text-[#60A5FA]">
                  MOFA Attestation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 – IMPORTANT LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-[#1D4ED8] inline-block pb-1">
              Important Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about-us" className="hover:text-[#60A5FA]">About Us</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#60A5FA]">Contact Us</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-[#60A5FA]">FAQ</NavLink></li>
              <li><NavLink to="/privacy-policy" className="hover:text-[#60A5FA]">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms-conditions" className="hover:text-[#60A5FA]">Terms & Conditions</NavLink></li>
            </ul>
          </div>

          {/* COLUMN 4 – COUNTRY */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-[#1D4ED8] inline-block pb-1">
              Country
            </h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/countries" className="hover:text-[#60A5FA]">Countries We Serve</NavLink></li>
            </ul>
          </div>

          {/* COLUMN 5 – CONTACT DETAILS */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-[#1D4ED8] inline-block pb-1">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+918700770603" className="hover:text-[#60A5FA]">
                  📞 +91 8700770603
                </a>
              </li>
              <li>
                <a href="mailto:info@proattestation.com" className="hover:text-[#60A5FA]">
                  ✉ info@proattestation.com
                </a>
              </li>
              <li className="leading-relaxed">
                📍 Office # S205, 2nd Floor,<br />
                Balaji Building, Corner Market,<br />
                Malviya Nagar, New Delhi – 110017
              </li>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Pro Attestation. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Managed by Pro Attestation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
