import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: any) {
  const mainImage =
    product.images?.find((img: any) => img.isPrimary)?.url ||
    product.images?.[0]?.url ||
    "/placeholder.png";

  return (
    <Link
      href={`/category/${product.categorySlug}/${product.subCategorySlug}/${product.slug}`}
    >
      <div
        className="
          border border-[#E8C7C7] rounded-xl p-4 bg-white
          hover:shadow-lg transition shadow-sm cursor-pointer
        "
      >
        {/* Image */}
        <Image
          src={mainImage}
          alt={product.title}
          width={300}
          height={200}
          className="rounded-lg object-cover w-full h-48 border border-[#E8C7C7]"
        />

        {/* Title */}
        <h3 className="text-lg font-semibold mt-3 text-[#8A1538]">
          {product.title}
        </h3>

        {/* Price */}
        <p className="text-sm text-[#3A2F2F]/80 mt-1">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
}
