import React from "react";

const BlogCardSkeleton = () => {
  return (
    <div className="border rounded-2xl p-4 bg-white animate-pulse">
      
      {/* Image + badge */}
      <div className="relative">
        <div className="h-52 w-full rounded-xl bg-gray-200" />
        <div className="absolute top-3 right-3 h-6 w-16 rounded-full bg-gray-300" />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-3">

        {/* Author + Date */}
        <div className="flex justify-between items-center">
          <div className="h-3 w-20 bg-gray-200 rounded" />
          <div className="h-3 w-16 bg-gray-200 rounded" />
        </div>

        {/* Title (2 lines) */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>

        {/* Description (3 lines) */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-5/6 bg-gray-200 rounded" />
          <div className="h-3 w-4/6 bg-gray-200 rounded" />
        </div>

        {/* Read more button */}
        <div className="h-8 w-28 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
