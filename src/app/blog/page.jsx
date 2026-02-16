"use client"
import React from 'react'
import { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { TracingBeam } from "../components/tracing-beam"
import BlogCardSkeleton from "../components/skeletons/BlogCardSkeleton"
import BlogHeroSkeleton from "../components/skeletons/BlogHeroSkeleton"
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import blogCards from './data/blogCards';
import { axiosInstance } from '@/lib/axios';

function formatDate(dateStr) {
  if (!dateStr) return "—";

  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const BlogPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogComponent />
    </Suspense>
  )
}


const BlogComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentBlog, setRecentBlog] = useState([])
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [query, setQuery] = useState("");

  const CARDS_PER_PAGE = 6;

  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  const filteredBlogs = useMemo(() => {
    return blogs
      .filter((b) => b.status === "PUBLISHED")
      .filter(
        (b) =>
          b.title?.toLowerCase().includes(query.toLowerCase()) ||
          b.shortDesc?.toLowerCase().includes(query.toLowerCase())
      )
      .map((b) => ({
        id: b.id,
        title: b.title,
        slug: b.slug,
        description: b.shortDesc,
        category: b.category,
        author: "Admin",
        date: formatDate(b.publishedDate),
        image: b.image,
      }));
  }, [blogs, query]);

  const mainBlogs = useMemo(() => {
    return recentBlog
      .filter((b) => b.status === "PUBLISHED")
      .map((b) => ({
        id: b.id,
        title: b.title,
        slug: b.slug,
        description: b.shortDesc,
        category: b.category,
        author: "Admin",
        date: formatDate(b.publishedDate),
        image: b.image,
      }));
  }, [recentBlog]);



  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);





  // url basers


  const fetchBlogs = async (page = 1, search = "") => {
    try {
      setLoading(true);

      const res = await axiosInstance.get(
        `/blog?page=${page}&limit=${CARDS_PER_PAGE}&orderBy=desc&search=${search}&type=published`
      );
      console.log(res)

      if (res.data?.status) {
        setBlogs(res.data.blogs || []);
        setRecentBlog(res.data.recentBlogs || []);

        setTotalPages(res.data.meta.totalPages || 1);
      } else {
        setBlogs([]);
        setRecentBlog([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error(err);
      setBlogs([]);
      setRecentBlog([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchBlogs(currentPage, query);
  }, [currentPage, query]);

  useEffect(() => {
    setCurrentPage(1);
    router.push("/blog?page=1", { scroll: false });
  }, [query]);

  return (
    <div>

       {loading && <BlogHeroSkeleton />}

      <section className='max-w-7xl px-10 mx-auto py-10 space-y-10' >
        {mainBlogs.map((card) => (
          <div
            key={card.id}
            className="grid grid-cols-1 lg:grid-cols-2  gap-8">
            <div className="flex flex-col justify-center gap-4 p-3 ">
              <div className="">
                {card.category && (
                  <span className="bg-[#3e66f3] px-2 py-1 text-base text-white rounded-full">
                    {card.category}
                  </span>
                )}
              </div>
              <div className="">
                <h3 className="text-4xl font-medium poppins">
                  {card.title}
                </h3>
              </div>
              <div className="">
                <span className="text-lg text-gray-600">
                  {card.description}
                </span>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3e66f3]"></span>
                  <span className="text-sm text-gray-500">By {card.author}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3e66f3]"></span>
                  <span className="text-sm text-gray-500">{card.date}</span>
                </div>
              </div>
              <div className="">
                {/* <button className="font-medium text-lg hover:underline transition-all duration-300 text-[#3e66f3]">
                Read More {"->"}
              </button> */}
                <Link
                  href={`/blog/${card.slug}`}
                  className="inline-block mt-2 border border-[#3e66f3] px-4 py-1.5 rounded-lg text-sm text-[#3e66f3] hover:bg-[#3e66f3] hover:text-white"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="flex justify-end items-center h-80  rounded-lg  ">
              <img
                src={
                  card.image
                    ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${card.image.replace(/\\/g, "/")}`
                    : "/no-image.png"
                }
                alt={card.title}
                className="h-full w-full object-fit rounded-lg"
              />
            </div>
          </div>
        ))}
      </section> 
      
      {/* blogs  */}
      <section className="max-w-7xl mx-auto space-y-10 px-10 mb-10 transition-all duration-300">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className='poppins text-3xl font-medium text-[#3e66f3]' > Our Recent Articles  </h3>
            <p className='open-sans text-gray-700' > Stay Informed with our Latest Insights </p>
          </div>

          <div className="max-w-sm w-full">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search blogs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition"
              />

            </div>
          </div>
        </div>
        <TracingBeam page={currentPage}>

          {/* Loader */}
          {/* {loading && (
            <p className="text-center py-10 text-gray-500">
              Loading blogs...
            </p>
          )} */}

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredBlogs.map((card, idx) => (

              <div
                key={card.id}
                className="relative flex h-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >

                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="hoverBackground"
                      className="absolute inset-0 rounded-2xl bg-gray-100 scale-105"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>


                <div className="relative z-10 bg-white border rounded-2xl p-4 flex flex-col h-full">


                  {/* Image */}
                  <div className="relative rounded-xl overflow-hidden">

                    <img
                      src={
                        card.image
                          ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${card.image.replace(/\\/g, "/")}`
                          : "/no-image.png"
                      }
                      alt={card.title}
                      className="h-52 w-full object-cover"
                    />

                    {card.category && (
                      <span className="absolute top-2 right-2 bg-[#3e66f3] text-white px-3 py-1 rounded-full text-sm">
                        {card.category}
                      </span>
                    )}

                  </div>


                  {/* Content */}
                  <div className="mt-3 space-y-2">

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>By {card.author}</span>
                      <span>{card.date}</span>
                    </div>

                    <h3 className="text-xl font-semibold line-clamp-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-700 line-clamp-3">
                      {card.description}
                    </p>

                    <Link
                      href={`/blog/${card.slug}`}
                      className="inline-block mt-2 border border-[#3e66f3] px-4 py-1.5 rounded-lg text-sm text-[#3e66f3] hover:bg-[#3e66f3] hover:text-white"
                    >
                      Read More →
                    </Link>

                  </div>

                </div>
              </div>
            ))}

          </div>


          {/* No Data */}
          {/* {!loading && currentBlogs.length === 0 && (
            <p className="text-center py-10 text-gray-500">
              No blogs found...
            </p>
          )} */}


            
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          )}



          {/* Pagination */}

        </TracingBeam>
        {totalPages > 1 && (

          <div className="flex justify-end mt-8">

            <Stack spacing={2}>

              <Pagination
                count={Number(totalPages)}
                page={Number(currentPage)}
                onChange={(_, value) => {
                  router.push(`/blog?page=${value}`, { scroll: false });
                }}
                color="primary"
                shape="rounded"
              />

            </Stack>

          </div>

        )}
      </section>
    </div>
  )
}

export default BlogPage