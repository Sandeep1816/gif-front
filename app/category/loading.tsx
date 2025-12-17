export default function Loading() {
  return (
    <main className="min-h-screen bg-[#FBFAFF] py-12 animate-pulse">
      <div className="container mx-auto px-4">

        {/* Page Title Shimmer */}
        <div className="h-10 w-64 bg-[#EFEAFF] rounded-xl mb-8" />

        {/* Search Bar Shimmer */}
        <div className="h-12 w-full max-w-xl bg-[#EFEAFF] rounded-2xl mb-10" />

        {/* Banner Shimmer */}
        <div className="h-28 w-full bg-[#EFEAFF] rounded-3xl mb-12" />

        {/* Subcategories Shimmer */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-14">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-16 bg-[#EFEAFF] rounded-2xl"
            />
          ))}
        </div>

        {/* Products Grid Shimmer */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-[#E3DBFF] p-4"
            >
              {/* Image */}
              <div className="h-44 bg-[#EFEAFF] rounded-2xl mb-4" />

              {/* Title */}
              <div className="h-5 w-3/4 bg-[#EFEAFF] rounded-lg mb-2" />

              {/* Price */}
              <div className="h-5 w-1/3 bg-[#EFEAFF] rounded-lg mb-4" />

              {/* Button */}
              <div className="h-10 w-full bg-[#EFEAFF] rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
