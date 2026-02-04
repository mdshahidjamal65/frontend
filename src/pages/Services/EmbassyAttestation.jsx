import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";


const EmbassyAttestation = () => {
  return (
    <>
      <ServiceBreadcrumb service="Embassy Attestation" />

      <ServiceBanner
        title="Embassy Attestation Services"
        description="Complete embassy attestation support for UAE, Saudi Arabia, Qatar, Kuwait, and more."
        ctaText="Apply for Embassy Attestation"
      />

      <ServiceContent
        heading="What is Embassy Attestation?"
        content={[
          "Embassy attestation is required for documents used in non-Hague Convention countries.",
          "It follows MEA attestation and is mandatory for work, visa, and education purposes."
        ]}
      />

      <ServiceHighlights
        items={[
          { icon: "📄", title: "Documents Required", text: "Educational, personal, commercial" },
          { icon: "⏱️", title: "Processing Time", text: "5–10 working days" },
          { icon: "🌍", title: "Supported Countries", text: "UAE, Saudi Arabia, Kuwait, Qatar" },
          { icon: "⚙️", title: "Application Process", text: "MEA → Embassy → Dispatch" },
          { icon: "📞", title: "Customer Support", text: "End-to-end assistance" },
        ]}
      />

      <section id="contact-form">
        <ContactLeadForm defaultService="Embassy Attestation" />
      </section>

      <ServiceFAQs
        faqs={[
          { q: "Is embassy attestation mandatory?", a: "Yes, for non-Hague countries." },
          { q: "How long does it take?", a: "Usually 5–10 working days." },
          { q: "Is tracking available?", a: "Yes, complete tracking is available." },
        ]}
      />

      <ServiceCTA />
    </>
  );
};

export default EmbassyAttestation;
