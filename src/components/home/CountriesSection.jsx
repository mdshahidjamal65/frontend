import { useState } from "react";
import { countries } from "../../data/countries";
import worldMap from "../../assets/images/world-map-light.png";

const CountriesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCountries = countries.filter((country) => {
    const matchTab =
      activeTab === "all" || country.type === activeTab;
    const matchSearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchTab && matchSearch;
  });

  const visibleCountries = showAll
    ? filteredCountries
    : filteredCountries.slice(0, 8);

  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-[#1D4ED8] font-semibold">
            Global Presence
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Countries We Serve Worldwide
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our document attestation and apostille services are trusted
            across multiple countries with guaranteed acceptance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { id: "all", label: "All Countries" },
                { id: "attestation", label: "Attestation" },
                { id: "apostille", label: "Apostille" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowAll(false);
                  }}
                  className={`px-5 py-2 rounded-lg text-sm font-medium border
                    ${
                      activeTab === tab.id
                        ? "bg-[#1D4ED8] text-white border-[#1D4ED8]"
                        : "bg-white text-gray-700 border-gray-200 hover:border-[#93C5FD]"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* COUNTRY CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {visibleCountries.map((country, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">
                      {country.name}
                    </h4>

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium
                        ${
                          country.type === "apostille"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                    >
                      {country.type === "apostille"
                        ? "Apostille"
                        : "Attestation"}
                    </span>
                  </div>

                  <button className="text-[#1D4ED8] text-sm font-medium mt-3 hover:underline">
                    View Details →
                  </button>
                </div>
              ))}
            </div>

            {/* VIEW MORE */}
            {!showAll && filteredCountries.length > 8 && (
              <div className="mt-8">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3 bg-[#1D4ED8] text-white rounded-lg font-medium hover:bg-[#1E40AF] transition"
                >
                  View More
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* SEARCH ABOVE MAP */}
            <input
              type="text"
              placeholder="Search any country..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowAll(false);
              }}
              className="w-full mb-6 px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-[#60A5FA]"
            />

            {/* MAP */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <img
                src={worldMap}
                alt="Global Presence"
                className="w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
