"use client";

import { axiosInstance } from "@/lib/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"; 
import BlogSkeleton from "../../components/skeletons/BlogSkeleton";


// ------------------ SANITIZER FUNCTION ------------------
const sanitizeAndAbsolutize = (html = "") => {
  if (!html || typeof html !== "string") return "";

  // Remove script tags
  html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");

  // Remove inline JS
  html = html.replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "");

  // Fix null/undefined links
  html = html.replace(/(src|href)=["'](null|undefined)["']/gi, '$1="#"');

  // Convert relative image paths to absolute
  html = html.replace(
    /src=["'](?!https?:|data:|\/)([^"']+)["']/gi,
    (m, path) =>
      `src="${process.env.NEXT_PUBLIC_API_URL}/${path}"`
  );

  // Remove inline font-size
  html = html.replace(
    /style=["'][^"']*font-size:[^;"']*;?[^"']*["']/gi,
    (m) => m.replace(/font-size:[^;]+;?/gi, "")
  );

  // Style h2 tags
  html = html.replace(
    /<h2([^>]*)>/gi,
    (match, attrs) => {
      const tailwind =
        "text-xl md:text-3xl font-semibold my-4 leading-snug";

      if (/class=/i.test(attrs)) {
        return match.replace(
          /class=(["'])(.*?)\1/i,
          (m, q, cls) => `class=${q}${cls} ${tailwind}${q}`
        );
      }

      return `<h2${attrs} class="${tailwind}">`;
    }
  );

  return html;
};


// ------------------ DATE FORMATTER ------------------
function formatDate(dateStr) {
  if (!dateStr) return "—";

  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}


// ------------------ MAIN COMPONENT ------------------
export default function BlogDetailsPage() {

  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);


  // Fetch Blog
  const fetchBlog = async () => {
    try {

      setLoading(true);

      const res = await axiosInstance.get(`/blog/${slug}`);

      if (res.data?.status) {
        setBlog(res.data.blog);
      } else {
        setBlog(null);
      }

    } catch (err) {
      console.error(err);
      setBlog(null);

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (slug) fetchBlog();
  }, [slug]);


  // Loading
// Loading
if (loading) {
  return <BlogSkeleton />;
}


  // Not Found
  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
      </div>
    );
  }


  return (
    <>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto py-10 px-6">

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 rounded-xl"
          style={{
            background:
              "linear-gradient(90deg,rgba(171,209,237,0.6) 13%, rgba(222,245,250,0.5) 58%, rgba(249,250,246,0.6) 100%)",
          }}
        >

          {/* Left */}
          <div className="flex flex-col justify-center gap-4">

            <span className="w-fit bg-[#3e66f3] text-white px-3 py-1 rounded-full text-sm">
              {blog.category}
            </span>

            <h1 className="text-4xl font-semibold poppins">
              {blog.title}
            </h1>

            <div className="flex items-center gap-3 text-sm text-gray-600">

              <span>By Admin</span>

              <span className="w-1 h-1 rounded-full bg-[#3e66f3]" />

              <span>{formatDate(blog.publishedDate)}</span>

            </div>

          </div>


          {/* Right */}
          <div className="flex justify-end">

            <img
              src={
                blog.image?.startsWith("http")
                  ? blog.image
                  : blog.image
                  ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${blog.image.replace(/\\/g, "/")}`
                  : "/no-image.png"
              }
              alt={blog.title}
              className="rounded-xl w-full h-72 object-cover"
            />

          </div>

        </div>

      </div>


      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-10 space-y-6">


        {/* Full Content */}
        {blog.content && (
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{
              __html: sanitizeAndAbsolutize(blog.content),
            }}
          />
        )}

      </div>

    </>
  );
}
