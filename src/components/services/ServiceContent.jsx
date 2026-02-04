const ServiceContent = ({ heading, content }) => {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
            {heading}
          </h2>

          {content.map((para, i) => (
            <p key={i} className="mb-4 text-[#475569] leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <p className="text-sm text-[#64748B]">
            We ensure every step is handled accurately, securely,
            and in compliance with government guidelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
