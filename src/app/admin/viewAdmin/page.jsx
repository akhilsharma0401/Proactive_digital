"use client";

import { useEffect, useState, useCallback } from "react";
import { FiEdit, FiTrash2, FiPlusCircle, FiArchive } from "react-icons/fi";
import { AiOutlineRead } from "react-icons/ai";
import toast from "react-hot-toast";

import Pagination from "../components/Pagination";
import Modal from "../components/Modal";

import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios";


// Config
const PER_PAGE = 5;
const SKELETON_COUNT = 5;


// Page Component
const page = () => {

  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [actionType, setActionType] = useState("delete"); // delete | trash


  function formatDateDDMMYYYY(dateStr) {
    if (!dateStr) return "—";

    try {
      const d = new Date(dateStr);

      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();

      return `${day}-${month}-${year}`;
    } catch {
      return "—";
    }
  }



  // Normalize API Blog Object
  function normalizeBlog(b = {}) {
    return {
      id: b.id || b._id || b.blog_id || "",
      title: b.title || b.name || "—",

      category:
        (b.category && (b.category.name || b.category)) ||
        b.category_name ||
        "—",

      author: "Admin",

      date: formatDateDDMMYYYY(
        b.publishedDate ||
        b.published_at ||
        b.created_at ||
        b.updated_at ||
        b.date
      ),
      slug: b.slug || "",



      status: (() => {
        const s = String(b.status || "").toLowerCase();

        if (s === "published") return "Published";
        if (s === "draft") return "Draft";
        if (s === "trash" || s === "deleted") return "Trash";

        return "Draft"; // default
      })(),

    };

  }


  // Fetch Blogs
  const fetchBlogs = useCallback(async (targetPage = 1) => {
    try {
      setLoading(true);

      // Prepare payload
      const payload = {
        page: targetPage,
        per_page: PER_PAGE,
      };

      // API call
      const res = await axiosInstance.get("/blog?page=" + targetPage + "&limit=" + PER_PAGE + "&orderBy=desc&role=admin");
      console.log("Blog fetch response:", res);


      // Check response
      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Failed to fetch blogs");

        setBlogs([]);
        setPage(1);
        setTotalPages(1);

        return;
      }


      // Get rows
      const rows = Array.isArray(res.data.blogs)
        ? res.data.blogs
        : [];


      console.log("normalizeBlog", rows.map(normalizeBlog));
      setBlogs(rows.map(normalizeBlog));


      // Set pagination
      const total = Number(res.data.meta.totalPages) || 1;

      setPage(targetPage);
      setTotalPages(total);

    } catch (err) {
      console.error("Fetch error:", err);

      toast.error("Unable to load blogs");

      setBlogs([]);
      setPage(1);
      setTotalPages(1);

    } finally {
      setLoading(false);
    }
  }, []);



  // Delete Blog
  async function handleDelete(id) {
    if (!id) return;

    try {
      const res = await axiosInstance.delete(`/blog/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });

      if (res?.data?.status) {
        toast.success("Deleted");
        fetchBlogs(page);
      } else {
        toast.error(res?.data?.message || "Delete failed");
      }

    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  }







  // Trash Blog
  async function handleTrash(id) {
    if (!id) return;

    try {
      const res = await axiosInstance.post("/blog/trash", { id });

      if (res?.data?.status) {
        toast.success("Moved to trash");
        fetchBlogs(page);
      } else {
        toast.error(res?.data?.message || "Trash failed");
      }

    } catch (err) {
      console.error(err);
      toast.error("Trash error");
    }
  }



  // Load Blogs
  useEffect(() => {
    fetchBlogs(page);
  }, [page, fetchBlogs]);


  // Format Date
  function formatDate(dateStr) {
    if (!dateStr) return "—";

    try {
      const d = new Date(dateStr);

      return (
        d.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }) +
        " " +
        d.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

    } catch {
      return dateStr;
    }
  }



  return (
    <>

      <div className="p-6 pt-10 md:pt-20 max-w-7xl mx-auto mb-10">


        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <AiOutlineRead className="w-8 h-8 text-indigo-600" />
            View All Blogs
          </h1>


          {/* Add Button */}
          <button
            onClick={() => router.push("/admin/uploadblogs")}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer thmbtn rounded-full"
          >
            <FiPlusCircle className="w-5 h-5" />
            Add New Blog
          </button>

        </div>



        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

          <table className="min-w-full text-sm text-left text-gray-600">


            {/* Head */}
            <thead className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">

              <tr>
                <th className="px-6 py-4">S.No.</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>

            </thead>



            {/* Body */}
            <tbody>

              {/* Loading */}
              {loading ? (

                Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                  <tr key={i} className="animate-pulse border-b">
                    <td className="px-6 py-4" colSpan={7}>
                      <div className="h-4 bg-gray-200 rounded w-full" />
                    </td>
                  </tr>
                ))

              ) : blogs.length === 0 ? (

                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No blogs found
                  </td>
                </tr>

              ) : (

                blogs.map((blog, index) => (

                  <tr
                    key={blog.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="px-6 py-4">
                      {(page - 1) * PER_PAGE + index + 1}
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-900">
                      {blog.title}
                    </td>

                    <td className="px-6 py-4">{blog.category}</td>

                    <td className="px-6 py-4">{blog.author}</td>

                    <td className="px-6 py-4">
                      {blog.date}
                    </td>


                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium
    ${blog.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : blog.status === "Draft"
                              ? "bg-yellow-100 text-yellow-700"
                              : blog.status === "Trash"
                                ? "bg-gray-200 text-gray-700"
                                : "bg-red-100 text-red-700"
                          }
  `}
                      >
                        {blog.status}
                      </span>


                    </td>


                    {/* Actions */}
                    <td className="px-6 py-4 flex justify-center gap-3">


                      {/* Edit */}
                      <button
                        onClick={() =>
                          router.push(`/admin/uploadblogs?id=${blog.slug}`)
                        }
                        className="px-3 py-1 bg-[#7998F4] text-white rounded"
                      >
                        <FiEdit />
                      </button>


                      {/* Trash */}
                      {/* <button
                        onClick={() => {
                          setSelectedId(blog.id);
                          setActionType("trash");
                          setIsModalOpen(true);
                        }}
                        className="px-3 py-1 bg-orange-500 text-white rounded"
                      >
                        <FiArchive />
                      </button> */}


                      {/* Delete */}
                      <button
                        onClick={() => {
                          setSelectedId(blog.id);
                          setActionType("delete");
                          setIsModalOpen(true);
                        }}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        <FiTrash2 />
                      </button>


                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>



        {/* Pagination */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onChange={(p) => setPage(p)}
        />


      </div>



      {/* Confirm Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          actionType === "trash"
            ? "Move to Trash"
            : "Confirm Delete"
        }
        width="max-w-md"
        confirmText={
          actionType === "trash"
            ? "Move to Trash"
            : "Delete"
        }
        cancelText="Cancel"
        onConfirm={() => {
          if (selectedId) {
            if (actionType === "trash") {
              handleTrash(selectedId);
            } else {
              handleDelete(selectedId);
            }
          }

          setIsModalOpen(false);
        }}
      >

        <div className="text-center px-4 py-2">

          <p className="text-gray-700 text-sm mb-2">
            {actionType === "trash"
              ? "Are you sure you want to move this blog to trash?"
              : "Are you sure you want to delete this blog permanently?"}
          </p>

          <p className="text-xs text-gray-500">
            {actionType === "trash"
              ? "You can restore it later if needed."
              : "This action cannot be undone."}
          </p>

        </div>

      </Modal>


    </>
  );
};


export default page;
