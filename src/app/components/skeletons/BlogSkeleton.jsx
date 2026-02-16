// components/BlogSkeleton.jsx
export default function BlogSkeleton() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 space-y-6 animate-pulse">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 rounded-xl bg-gray-100">
        <div className="flex flex-col gap-4">
          <div className="w-24 h-6 bg-gray-300 rounded-full" />
          <div className="w-3/4 h-10 bg-gray-300 rounded-md" />
          <div className="flex items-center gap-3">
            <div className="w-16 h-4 bg-gray-300 rounded-full" />
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="w-12 h-4 bg-gray-300 rounded-full" />
          </div>
        </div>
        <div className="w-full h-72 bg-gray-300 rounded-xl" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 rounded-full w-full" />
        <div className="h-4 bg-gray-300 rounded-full w-5/6" />
        <div className="h-4 bg-gray-300 rounded-full w-4/6" />
        <div className="h-4 bg-gray-300 rounded-full w-3/4" />
        <div className="h-4 bg-gray-300 rounded-full w-2/3" />
      </div>
    </div>
  );
}
