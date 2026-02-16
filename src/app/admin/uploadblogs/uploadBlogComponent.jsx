"use client";
import { useEffect, useRef, useState, Suspense, useCallback } from "react";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import RichTextEditor from "../components/RichTextEdito";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";


const UploadBlogComponent = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const fileRef = useRef(null);



    const blogId = searchParams.get("id") || null;
    console.log(blogId)
    const isEdit = Boolean(blogId);

    const [initializing, setInitializing] = useState(isEdit);
    const [submitting, setSubmitting] = useState(false);

    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState(["Admin"]);

    const [newCat, setNewCat] = useState("");
    const [newAuthor, setNewAuthor] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        shortDesc: "",
        content: "",
        category: "",
        tags: "",
        publishedDate: "",
        metaTitle: "",
        metaDescription: "",
        keywords: "",
        status: "draft",
        featured: false,
    });

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);


    const normalizeSlug = (s) =>
        String(s || "")
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: val,
            ...(name === "title" ? { slug: normalizeSlug(val) } : {}),
        }));
    };

    const addCategory = () => {
        const v = newCat.trim();
        if (!v) return;
        if (categories.some((c) => c.toLowerCase() === v.toLowerCase())) {
            toast.error("Category already exists");
            return;
        }
        setCategories((prev) => [...prev, v]);
        setNewCat("");
        setFormData((p) => ({ ...p, category: v }));
    };

    const deleteCategory = (name) => {
        setCategories((prev) => prev.filter((c) => c !== name));
        setFormData((p) => ({
            ...p,
            category: p.category === name ? "" : p.category,
        }));
    };

    const addAuthor = () => {
        const v = newAuthor.trim();
        if (!v) return;
        if (authors.some((a) => a.toLowerCase() === v.toLowerCase())) {
            toast.error("Author already exists");
            return;
        }
        setAuthors((prev) => [...prev, v]);
        setNewAuthor("");
        setFormData((p) => ({ ...p, author: v }));
    };

    const deleteAuthor = (name) => {
        setAuthors((prev) => prev.filter((a) => a !== name));
        setFormData((p) => ({
            ...p,
            author:
                p.author === name
                    ? authors[0] === name
                        ? ""
                        : authors[0] || ""
                    : p.author,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const maxMB = 5;
        const isImage = file.type.startsWith("image/");
        const withinSize = file.size <= maxMB * 1024 * 1024;

        if (!isImage) {
            toast.error("Please select a valid image file.");
            if (fileRef.current) fileRef.current.value = "";
            return;
        }
        if (!withinSize) {
            toast.error(`Image must be ≤ ${maxMB} MB.`);
            if (fileRef.current) fileRef.current.value = "";
            return;
        }

        if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    useEffect(() => {
        return () => {
            if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    // --------- EDIT: load existing blog by id ----------

    const EMPTY_FORM = {
        title: "",
        slug: "",
        shortDesc: "",
        content: "",
        category: "",
        tags: "",


        metaTitle: "",
        metaDescription: "",
        keywords: "",

        status: "draft",
    };


    function resetAll() {
        setFormData(EMPTY_FORM);
        setImage(null);
        if (preview && typeof preview === "string" && preview.startsWith("blob:")) {
            URL.revokeObjectURL(preview);
        }
        setPreview(null);
        if (fileRef.current) fileRef.current.value = "";
    }

    function toAbsUrl(path) {
        if (!path) return "";

        const cleanPath = String(path).replace(/\\/g, "/");

        if (cleanPath.startsWith("http")) return cleanPath;

        return `${process.env.NEXT_PUBLIC_MEDIA_URL}/${cleanPath.replace(/^\/+/, "")}`;
    }


    useEffect(() => {
        const load = async () => {
            if (!isEdit) return;
            const id = blogId;
            try {
                setInitializing(true);
                const res = await axiosInstance.get(`/blog/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                });


                if (!res.data?.status) {
                    toast.error("Blog not found");
                    return;
                }

                const blog = res.data.blog;
                const formattedData = {
                    title: blog.title || "",
                    slug: blog.slug || "",
                    shortDesc: blog.shortDesc || blog.short_description || "",
                    content: blog.content || blog.body || "",
                    category:
                        [" blog?.category ? blog?.category : "],
                    tags: blog.tags || "",
                    author:
                        (blog.author && (blog.author.name || blog.author)) ||
                        blog.author_name ||
                        blog.author ||
                        "Admin",

                    publishedDate: (
                        blog.publishdate ||
                        blog.publishDate ||
                        blog.publishedDate ||
                        blog.published_at ||
                        ""
                    ).slice(0, 10),


                    metaTitle:
                        blog.metaTitle ||
                        blog.meta_title ||
                        blog?.seo?.title ||
                        blog?.seo?.metaTitle ||
                        "",
                    metaDescription:
                        blog.metaDescription ||
                        blog.meta_description ||
                        blog?.seo?.description ||
                        blog?.seo?.metaDescription ||
                        "",
                    keywords:
                        blog.keywords ||
                        blog?.seo?.keywords ||
                        "",
                    status:
                        blog.status === 1 ||
                            blog.status === "1" ||
                            blog.status === "published" ||
                            blog.status === "Published"
                            ? "published"
                            : "draft",
                    featured: Boolean(blog.featured || blog.is_featured),
                }

                setCategories(blog?.category?.split(",") || []);
                console.log("formattedData", formattedData);
                setFormData(formattedData);

                const existingImage =
                    blog.featured_image_url ||
                    blog.featuredimage ||
                    blog.image ||
                    "";

                if (existingImage) {
                    const fixedPath = String(existingImage).replace(/\\/g, "/");
                    setPreview(toAbsUrl(fixedPath));
                }

            } catch (e) {
                console.error(e);
                toast.error("Failed to load blog");
            } finally {
                setInitializing(false);
            }
        };

        load();
    }, [isEdit, blogId]);

    // -------- validations --------
    const requiredFieldsCreate = [
        { key: "title", label: "Title" },
        { key: "slug", label: "Slug" },
        { key: "shortDesc", label: "Short Description" },
        { key: "content", label: "Content" },
        { key: "category", label: "Category" },
        { key: "tags", label: "Tags" },

        { key: "metaTitle", label: "Meta Title" },
        { key: "metaDescription", label: "Meta Description" },
        { key: "keywords", label: "Keywords" },
    ];

    const requiredFieldsEdit = [...requiredFieldsCreate];

    async function submitToApi(payload, type = "published") {
        const fd = new FormData();

        // Normal fields
        fd.append("title", payload.title);
        fd.append("slug", payload.slug);
        fd.append("shortDesc", payload.shortDesc);
        fd.append("content", payload.content);
        fd.append("category", payload.category);
        fd.append("tags", payload.tags);
        fd.append("featured", payload.featured);
        fd.append("status", type);
        fd.append("publishedDate", payload.publishedDate);

        // ✅ Build SEO object
        const seo = {
            title: payload.metaTitle,
            desc: payload.metaDescription,
            keywords: payload.keywords,
        };

        fd.append("seo", JSON.stringify(seo));

        if (image) {
            fd.append("image", image);
        }

        // UPDATE
        if (isEdit) {
            fd.append("id", blogId);

            const res = await axiosInstance.put("/blog/update", fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });


            return res.data;
        }

        // CREATE
        const res = await axiosInstance.post("/blog/create", fd, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        return res.data;
    }

    function validateForm() {
        // Required fields
        for (let field of requiredFieldsCreate) {
            const value = formData[field.key];

            if (!value || String(value).trim() === "") {
                toast.error(`${field.label} is required`);
                return false;
            }
        }

        // ✅ Short Description: Min 50 chars
        if (formData.shortDesc.trim().length < 50) {
            toast.error("Short Description must be at least 50 characters");
            return false;
        }

        // ✅ Content: Remove HTML + Min 200 chars
        const plainContent = formData.content
            .replace(/<[^>]*>/g, "") // remove tags
            .trim();

        if (plainContent.length < 200) {
            toast.error("Content must be at least 200 characters");
            return false;
        }

        // ✅ Image check (only for create)
        if (!isEdit && !image) {
            toast.error("Featured image is required");
            return false;
        }

        return true;
    }




    const handleSubmit = async (type = "published") => {

        if (submitting) return;

        // ✅ Validate first
        if (!validateForm()) return;

        try {
            setSubmitting(true);

            const res = await submitToApi(formData, type);

            if (!res?.status) {
                toast.error(res?.message || "Failed");
                return;
            }

            toast.success(isEdit ? `Blog updated successfully on ${type}` : `Blog created successfully on ${type}`);

            router.push("/admin/viewAdmin");

        } catch (err) {
            console.error(err);
            toast.error("Server error");
        } finally {
            setSubmitting(false);
        }
    };



    const handleSaveDraftClick = async () => {
        if (submitting) return;

        if (!formData.title.trim()) {
            toast.error("Title is required for draft");
            return;
        }

        try {
            setSubmitting(true);

            const res = await submitToApi({
                ...formData,
                status: "draft",
            });

            if (!res?.status) {
                toast.error("Failed");
                return;
            }

            toast.success("Draft saved");

        } catch (err) {
            console.error(err);
            toast.error("Error");
        } finally {
            setSubmitting(false);
        }
    };


    // ------------------- UI -------------------
    if (initializing) {
        return (
            <div className="min-h-screen grid place-items-center text-sm text-gray-500">
                Loading blog…
            </div>
        );
    }

    return (
        <div className="relative min-h-screen ">
            <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-sky-100" />
                <div className="absolute -top-10 right-0 h-72 w-72 rounded-full blur-3xl bg-indigo-100" />
            </div>

            <div className="pt-10 sm:pt-12 md:pt-15">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                                {isEdit ? "Edit Blog" : "Create a New Blog"}
                            </h1>
                            <p className="mt-2 text-sm sm:text-base text-gray-500">
                                {isEdit
                                    ? "Update your post and save changes."
                                    : "Craft your post, add SEO, and publish when you’re ready."}
                            </p>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-2 rounded-full border bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-600 shadow-sm">
                            ✨ Proactive Digital Blog
                        </span>
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className="mt-6 mb-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="rounded-2xl border border-gray-300 bg-white/80 backdrop-blur shadow-xl ring-1 ring-black/5">
                        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-gray-300 bg-gradient-to-r from-white to-sky-50/50 rounded-t-2xl">
                            <div className="inline-flex items-center gap-2">
                                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                <span className="text-sm font-medium text-gray-700">
                                    Editor
                                </span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100">
                                    ⌘S <span className="hidden md:inline">to save</span>
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100">
                                    ⌘/ <span className="hidden md:inline">shortcuts</span>
                                </span>
                            </div>
                        </div>

                        {/* Form */}
                        <div
                            // onSubmit={handleSubmit}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-8"
                        >
                            {/* LEFT SIDE */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Title <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Enter a compelling blog title"
                                        className="inputcls "

                                    />
                                    <p className="text-xs text-gray-500">
                                        Keep it clear and keyword-rich.
                                    </p>
                                </div>


                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Slug <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleChange}
                                        placeholder="auto-generated or custom"
                                        className="inputcls"
                                    />
                                    <p className="text-xs text-gray-500">
                                        Example:{" "}
                                        <span className="font-mono">best-dental-plans</span>
                                    </p>
                                </div>


                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            Short Description <span className="text-rose-500">*</span>
                                        </label>
                                        <span className="text-xs text-gray-400">
                                            150–200 characters
                                        </span>
                                    </div>
                                    <textarea
                                        name="shortDesc"
                                        value={formData.shortDesc}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="A quick teaser of the blog…"
                                        className="inputcls"
                                    />
                                </div>


                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Content <span className="text-rose-500">*</span>
                                    </label>
                                    <RichTextEditor
                                        value={formData.content}
                                        onChange={(html) =>
                                            setFormData((prev) => ({ ...prev, content: html }))
                                        }
                                    />
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>
                                            Tip: Use headings, bullets, and short paragraphs.
                                        </span>
                                        <span className="hidden sm:inline">
                                            Autosave coming soon 💾
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="space-y-8 lg:pl-2">
                                <div className="space-y-3 rounded-xl border border-[#e5e7eb] bg-white shadow-sm p-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Featured Image{" "}
                                            {isEdit ? "" : <span className="text-rose-500">*</span>}
                                        </label>
                                        <span className="text-[10px] px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                                            1200×630 suggested
                                        </span>
                                    </div>

                                    <input
                                        ref={fileRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4
                      file:rounded-lg file:border-0 file:text-sm file:font-semibold
                      file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-100
                      cursor-pointer"
                                    />

                                    {preview ? (
                                        <Image
                                            src={preview}
                                            alt="Preview"
                                            width={800}
                                            height={450}
                                            className="mt-3 aspect-[16/9] w-full rounded-lg border border-[#e5e7eb] object-cover shadow-sm"
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="mt-3 aspect-[16/9] w-full rounded-lg border border-dashed grid place-items-center text-gray-400">
                                            <div className="text-center text-xs">
                                                No image selected
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Category <span className="text-rose-500">*</span>
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="inputcls"
                                    >
                                        <option value="">Select category</option>
                                        {categories.map((c) => (
                                            <option key={c} value={c}>
                                                {c}
                                            </option>
                                        ))}
                                    </select>

                                    <div className="flex gap-2 pt-2">
                                        <input
                                            type="text"
                                            value={newCat}
                                            onChange={(e) => setNewCat(e.target.value)}
                                            placeholder="Add new category"
                                            className="flex-1 inputcls"
                                        />
                                        <button
                                            type="button"
                                            onClick={addCategory}
                                            className="px-3 py-2 cursor-pointer thmbtn rounded-2xl"
                                        >
                                            Add
                                        </button>
                                    </div>

                                    {categories.length > 0 && (
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {categories.map((c) => (
                                                <span
                                                    key={c}
                                                    className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs shadow-sm"
                                                >
                                                    {c}
                                                    <button
                                                        type="button"
                                                        onClick={() => deleteCategory(c)}
                                                        className="text-rose-600 hover:text-rose-700"
                                                        title="Delete category"
                                                    >
                                                        ✕
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Tags
                                    </label>
                                    <input
                                        type="text"
                                        name="tags"
                                        value={formData.tags}
                                        onChange={handleChange}
                                        placeholder="e.g. dental, pharmacy"
                                        className="inputcls"
                                    />
                                    <p className="text-xs text-gray-500">
                                        Separate with commas:{" "}
                                        <span className="font-mono">dental, health,pharmacy</span>
                                    </p>
                                </div>

                                {/* <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Author <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="inputcls"
                  >
                    <option value="">Select author</option>
                    {authors.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>

                  <div className="flex gap-2 pt-2">
                    <input
                      type="text"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="Add new author"
                      className="flex-1 inputcls"
                    />
                    <button
                      type="button"
                      onClick={addAuthor}
                      className="px-3 py-2 cursor-pointer thmbtn rounded-2xl"
                    >
                      Add
                    </button>
                  </div>
                </div> */}

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Publish Date <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="publishedDate"
                                        value={formData.publishedDate}
                                        onChange={handleChange}
                                        className="inputcls"
                                    />
                                </div>

                                <div className="space-y-3 rounded-xl border border-[#e5e7eb] bg-white shadow-sm p-4">
                                    <h2 className="text-sm font-semibold text-gray-700">
                                        SEO Settings
                                    </h2>

                                    <label className="block text-xs font-medium text-gray-700">
                                        Meta Title <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="metaTitle"
                                        value={formData.metaTitle}
                                        onChange={handleChange}
                                        placeholder="Meta Title"
                                        className="inputcls"
                                    />

                                    <label className="block text-xs font-medium text-gray-700">
                                        Meta Description <span className="text-rose-500">*</span>
                                    </label>
                                    <textarea
                                        name="metaDescription"
                                        value={formData.metaDescription}
                                        onChange={handleChange}

                                        rows={2}
                                        placeholder="Meta Description"
                                        className="inputcls"
                                    />

                                    <label className="block text-xs font-medium text-gray-700">
                                        Keywords <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="keywords"
                                        value={formData.keywords}
                                        onChange={handleChange}

                                        placeholder="Keywords (comma separated)"
                                        className="inputcls"
                                    />
                                </div>

                                {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-[#e5e7eb] bg-white shadow-sm p-4">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[#04A868] cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-200"
                    />
                    <span className="text-sm text-gray-700">Featured Blog</span>
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="inputcls"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Publish</option>
                  </select>
                </div> */}
                            </div>


                            <div className="lg:col-span-3 border-t border-[#e5e7eb] pt-6 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                                <button
                                    type="button"
                                    onClick={() => { handleSubmit("draft") }}
                                    disabled={submitting}
                                    className="px-6 py-2 thmbtn rounded-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isEdit ? "Save Draft (Update)" : "Save Draft"}
                                </button>
                                <button
                                    type="submit"
                                    onClick={() => { handleSubmit("published") }}
                                    disabled={submitting}
                                    className="px-6 py-2 thmbtn rounded-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {submitting
                                        ? isEdit
                                            ? "Updating…"
                                            : "Publishing…"
                                        : isEdit
                                            ? "Update"
                                            : "Publish"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadBlogComponent