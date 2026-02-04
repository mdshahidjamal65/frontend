import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const CertificateAttestation = () => {
  return (
    <>
      {/* 6.1 Breadcrumb */}
      <ServiceBreadcrumb service="Certificate Attestation" />

      {/* 6.2 Service Banner */}
      <ServiceBanner
        title="Certificate Attestation Services in India"
        description="Professional certificate attestation services for education, employment, visa, and overseas relocation with complete document security."
        ctaText="Apply for Certificate Attestation"
      />

      {/* 6.3 Service Content */}
      <ServiceContent
        heading="What is Certificate Attestation?"
        content={[
          "Certificate attestation is the process of verifying the authenticity of educational, personal, or commercial documents for international use.",
          "It is required for employment visas, higher education, family visas, and business setup abroad.",
          "The attestation process may involve HRD/Home Department, MEA, Embassy, or MOFA depending on the destination country."
        ]}
      />

      {/* 6.4 Service Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "📄",
            title: "Documents Covered",
            text: "Educational, personal & commercial certificates",
          },
          {
            icon: "⏱️",
            title: "Processing Time",
            text: "3–15 working days (varies by document & country)",
          },
          {
            icon: "🌍",
            title: "Supported Countries",
            text: "UAE, Saudi Arabia, Qatar, Kuwait, Oman & more",
          },
          {
            icon: "⚙️",
            title: "Attestation Process",
            text: "Verification → Government approval → Embassy/MOFA",
          },
          {
            icon: "📞",
            title: "Customer Support",
            text: "Dedicated case manager with real-time tracking",
          },
        ]}
      />

      {/* 6.5 Contact Form (Auto-selected service) */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Certificate Attestation" />
      </section>

      {/* 6.6 FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "What certificates can be attested?",
            a: "Educational, personal, and commercial certificates can be attested based on your requirement.",
          },
          {
            q: "Is certificate attestation mandatory?",
            a: "Yes, most foreign governments require attested certificates for visas, jobs, or education.",
          },
          {
            q: "How long does certificate attestation take?",
            a: "Processing time ranges from 3 to 15 working days depending on document type and country.",
          },
          {
            q: "Can I track my application?",
            a: "Yes, we provide complete tracking and status updates.",
          },
        ]}
      />

      {/* 6.7 CTA */}
      <ServiceCTA />
    </>
  );
};

export default CertificateAttestation;
