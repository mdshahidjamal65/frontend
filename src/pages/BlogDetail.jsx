import { useParams, NavLink } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-3">Blog not found</h2>
        <NavLink
          to="/blogs"
          className="text-blue-600 font-medium hover:underline"
        >
          ← Back to Blogs
        </NavLink>
      </div>
    );
  }

  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-blue-100 mb-2">{blog.date}</p>
          <h1 className="text-4xl font-bold leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-16 prose prose-lg">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </section>
  );
};

export default BlogDetail;
