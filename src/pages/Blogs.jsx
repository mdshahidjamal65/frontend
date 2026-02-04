import { useState } from "react";
import { NavLink } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogsPage = () => {
  const INITIAL_COUNT = 9;
  const SHOW_VIEW_MORE_AFTER = 12;

  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, INITIAL_COUNT);

  return (
    <section className="bg-[#F9FAFB] pb-24">

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">Our Blog</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Insights, guides, and updates on document attestation, apostille
            services, and global verification processes.
          </p>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visibleBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Accent Line */}
              <div className="h-1 w-full bg-[#1D4ED8] rounded-t-xl"></div>

              <div className="p-6 flex flex-col h-full">
                <p className="text-sm text-[#64748B] mb-2">
                  {blog.date}
                </p>

                <h3 className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-[#1D4ED8] transition">
                  {blog.title}
                </h3>

                <p className="text-sm text-[#64748B] flex-grow leading-relaxed">
                  {blog.excerpt}
                </p>

                <NavLink
                  to={`/blog/${blog.slug}`}
                  className="mt-5 inline-flex items-center text-[#1D4ED8] font-medium hover:gap-2 transition-all"
                >
                  Read Article
                  <span className="ml-1">→</span>
                </NavLink>
              </div>
            </article>
          ))}

        </div>

        {/* VIEW MORE BUTTON */}
        {blogs.length > SHOW_VIEW_MORE_AFTER && !showAll && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 rounded-lg text-white font-semibold bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] hover:opacity-90 transition shadow-lg"
            >
              View More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsPage;
