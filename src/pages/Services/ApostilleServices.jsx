import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const ApostilleServices = () => {
  return (
    <>
      <ServiceBreadcrumb service="Apostille Services" />

      <ServiceBanner
        title="Apostille Services in India"
        description="Fast apostille services for Hague Convention countries without embassy involvement."
        ctaText="Apply for Apostille"
      />

      <ServiceContent
        heading="What is Apostille?"
        content={[
          "Apostille is an international certification accepted by Hague Convention member countries.",
          "It eliminates the need for embassy or MOFA attestation."
        ]}
      />

      <ServiceHighlights
        items={[
          { icon: "📄", title: "Documents Required", text: "Educational, personal, commercial" },
          { icon: "⏱️", title: "Processing Time", text: "2–4 working days" },
          { icon: "🌍", title: "Supported Countries", text: "USA, UK, Germany, France, Australia" },
          { icon: "⚙️", title: "Application Process", text: "Verification → Apostille → Delivery" },
          { icon: "📞", title: "Customer Support", text: "Dedicated assistance" },
        ]}
      />

      <section id="contact-form">
        <ContactLeadForm defaultService="Apostille Services" />
      </section>

      <ServiceFAQs
        faqs={[
          { q: "What is apostille?", a: "It is international document legalization under Hague Convention." },
          { q: "Is embassy attestation required?", a: "No, apostille replaces embassy attestation." },
          { q: "How long does it take?", a: "Usually 2–4 working days." },
          { q: "Is tracking available?", a: "Yes, real-time tracking is provided." },
        ]}
      />

      <ServiceCTA />
    </>
  );
};

export default ApostilleServices;
