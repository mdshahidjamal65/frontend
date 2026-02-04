import ContactLeadForm from "../components/common/ContactLeadForm";

const Contact = () => {
  return (
    <>
      {/* CONTACT HERO */}
      <section className="bg-gradient-to-r from-[#DBEAFE] to-[#EFF6FF] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#0F172A]">
            Contact Us
          </h1>
          <p className="mt-4 text-[#64748B] max-w-2xl mx-auto">
            Get in touch with us for fast, verified, and transparent
            document attestation needs.
          </p>
        </div>
      </section>

      {/* LEAD FORM */}
      <ContactLeadForm />
    </>
  );
};

export default Contact;
