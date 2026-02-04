import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";




const MOFAAttestation = () => {
  return (
    <>
      <ServiceBreadcrumb service="MOFA Attestation" />

      <ServiceBanner
        title="MOFA Attestation Services in India"
        description="Fast and reliable MOFA attestation services for UAE and other Gulf countries with complete document tracking."
        ctaText="Apply for MOFA Attestation"
      />

      <ServiceContent
        heading="What is MOFA Attestation?"
        content={[
          "MOFA attestation is the final verification step required for documents being used abroad.",
          "It confirms the authenticity of documents after MEA and Embassy attestation."
        ]}
      />

      <ServiceHighlights
        items={[
          { icon: "📄", title: "Documents Required", text: "Educational, personal, commercial" },
          { icon: "⏱️", title: "Processing Time", text: "3–7 working days" },
          { icon: "🌍", title: "Supported Countries", text: "UAE, Qatar, Oman, Kuwait" },
          { icon: "⚙️", title: "Application Process", text: "Pickup → Verification → Submission" },
          { icon: "📞", title: "Customer Support", text: "Dedicated tracking & updates" },
        ]}
      />
        <section id="contact-form">
         <ContactLeadForm defaultService="MOFA Attestation" />
        </section>


        
    

      <ServiceFAQs
        faqs={[
          { q: "What is MOFA attestation?", a: "It is foreign ministry verification in the destination country." },
          { q: "How long does it take?", a: "Usually 3–7 working days." },
          { q: "Is tracking available?", a: "Yes, real-time tracking is provided." },
        ]}
      />

      <ServiceCTA />
    </>
  );
};

export default MOFAAttestation;
