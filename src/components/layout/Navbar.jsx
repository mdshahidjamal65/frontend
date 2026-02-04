import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  // MOBILE STATES (isolated)
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  // SAFE MOBILE RESET
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServices(false);
    setMobileDocuments(false);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#1D4ED8] font-semibold"
      : "text-gray-800 hover:text-[#1D4ED8]";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Pro Attestation"
              className="h-14 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 relative">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about-us" className={linkClass}>About Us</NavLink>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-800 hover:text-[#1D4ED8]">
                Services <span className="text-sm">▾</span>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full w-60 rounded-md bg-white shadow-lg">
                  <NavLink to="/services/apostille-services" className="block px-4 py-2 hover:bg-blue-50">Apostille Services</NavLink>
                  <NavLink to="/services/certificate-attestation" className="block px-4 py-2 hover:bg-blue-50">Certificate Attestation</NavLink>
                  <NavLink to="/services/mofa-attestation" className="block px-4 py-2 hover:bg-blue-50">MOFA Attestation</NavLink>
                  <NavLink to="/services/embassy-attestation" className="block px-4 py-2 hover:bg-blue-50">Embassy Attestation</NavLink>
                  <NavLink to="/services/hrd-department" className="block px-4 py-2 hover:bg-blue-50">HRD Department</NavLink>
                </div>
              )}
            </div>

            

            <NavLink to="/countries" className={linkClass}>Countries</NavLink>
            <NavLink to="/blogs" className={linkClass}>Blogs</NavLink>
             <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
             <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
            
               <a
                href="tel:+918700770603"
               className="bg-[#1D4ED8] text-white px-5 py-2 rounded-md hover:opacity-90 transition"
              >
               Call Now
              </a>
          </nav>
       
          

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">

            <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/about-us" onClick={closeMobileMenu}>About Us</NavLink> 
            <NavLink to="/countries" onClick={closeMobileMenu}>Countries</NavLink>
            <NavLink to="/blogs" onClick={closeMobileMenu}>Blogs</NavLink>

            {/* MOBILE SERVICES */}
            <button
              onClick={() => setMobileServices(!mobileServices)}
              className="text-left font-medium"
            >
              Services ▾
            </button>
            {mobileServices && (
              <div className="ml-4 flex flex-col gap-2">
                <NavLink to="/services/apostille-services" onClick={closeMobileMenu}>Apostille Services</NavLink>
                <NavLink to="/services/certificate-attestation" onClick={closeMobileMenu}>Certificate Attestations</NavLink>
                <NavLink to="/services/mofa-attestation" onClick={closeMobileMenu}>MOFA Attestation</NavLink>
                <NavLink to="/services/embassy-attestation" onClick={closeMobileMenu}>Embassy Attestation</NavLink>
                <NavLink to="/services/hrd-department" onClick={closeMobileMenu}>HRD Department</NavLink>
              </div>
            )}

            <NavLink to="/faq" onClick={closeMobileMenu}>FAQ</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>Contact Us</NavLink>
            <a
             href="tel:+918700770603"
             onClick={closeMobileMenu}
             className="mt-3 bg-[#1D4ED8] text-white text-center py-2 rounded-md font-medium"
             >
             Call Now
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
