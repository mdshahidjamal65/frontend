import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

// Services
import Services from "../pages/Services/Services";
import ApostilleServices from "../pages/Services/ApostilleServices";
import CertificateAttestation from "../pages/Services/CertificateAttestation";
import MOFAAttestation from "../pages/Services/MOFAAttestation";
import EmbassyAttestation from "../pages/Services/EmbassyAttestation";
import HRDDepartment from "../pages/Services/HRDDepartment";
import DubaiVisaServices from "../pages/Services/DubaiVisaServices";

// Documents
//import Documents from "../pages/Document/Document";
//import PersonalDocuments from "../pages/Document/PersonalDocuments";
//import CommercialDocuments from "../pages/Document/CommercialDocuments";
//import EducationalDocuments from "../pages/Document/EducationalDocuments";

import Countries from "../pages/Countries";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/BlogDetail";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      {/* MAIN LAYOUT */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/apostille-services" element={<ApostilleServices />} />
        <Route path="/services/certificate-attestation" element={<CertificateAttestation />} />
        <Route path="/services/mofa-attestation" element={<MOFAAttestation />} />
        <Route path="/services/embassy-attestation" element={<EmbassyAttestation />} />
        <Route path="/services/hrd-department" element={<HRDDepartment />} />
        <Route path="/services/dubai-visa-services" element={<DubaiVisaServices />} />

        
      

        <Route path="/countries" element={<Countries />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;