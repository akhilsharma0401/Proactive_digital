import React from "react";

const BlogHeroSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl">

        {/* Left content */}
        <div className="space-y-4">
          
          {/* Category badge */}
          <div className="h-6 w-24 bg-gray-200 rounded-full" />

          {/* Title */}
          <div className="space-y-2">
            <div className="h-8 w-full bg-gray-200 rounded" />
            <div className="h-8 w-5/6 bg-gray-200 rounded" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-4/6 bg-gray-200 rounded" />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-3">
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-1 w-1 bg-gray-300 rounded-full" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>

          {/* Button */}
          <div className="h-9 w-32 bg-gray-200 rounded-full mt-4" />
        </div>

        {/* Right image */}
        <div className="h-64 sm:h-72 lg:h-80 w-full bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
};

export default BlogHeroSkeleton;
