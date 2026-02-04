import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";


const HRDDepartment = () => {
  return (
    <>
      <ServiceBreadcrumb service="HRD / Home Department Attestation" />

      <ServiceBanner
        title="HRD & Home Department Attestation"
        description="State-level document authentication before MEA and embassy legalization."
        ctaText="Apply for HRD Attestation"
      />

      <ServiceContent
        heading="What is HRD / Home Department Attestation?"
        content={[
          "HRD or Home Department attestation verifies documents at the state level.",
          "It is mandatory before MEA attestation for educational and personal documents."
        ]}
      />

      <ServiceHighlights
        items={[
          { icon: "📄", title: "Documents Required", text: "Educational & personal documents" },
          { icon: "⏱️", title: "Processing Time", text: "7–15 working days" },
          { icon: "🌍", title: "Applicable States", text: "All Indian states" },
          { icon: "⚙️", title: "Application Process", text: "State verification → Approval" },
          { icon: "📞", title: "Customer Support", text: "Dedicated state-wise experts" },
        ]}
      />

      <section id="contact-form">
        <ContactLeadForm defaultService="HRD / Home Department" />
      </section>

      <ServiceFAQs
        faqs={[
          { q: "Is HRD mandatory?", a: "Yes, for educational documents." },
          { q: "How long does it take?", a: "7–15 working days depending on state." },
          { q: "Is tracking available?", a: "Yes, tracking is provided." },
        ]}
      />

      <ServiceCTA />
    </>
  );
};

export default HRDDepartment;
