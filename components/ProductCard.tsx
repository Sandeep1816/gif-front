import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="
        border border-[#E8C7C7] rounded-xl p-4 bg-white 
        hover:shadow-lg transition shadow-sm
      ">
        <Image
          src={product.imageUrl || "/placeholder.png"}
          alt={product.title}
          width={300}
          height={200}
          className="rounded-lg object-cover w-full h-48 border border-[#E8C7C7]"
        />

        <h3 className="text-lg font-semibold mt-3 text-[#8A1538]">
          {product.title}
        </h3>

        <p className="text-sm text-[#3A2F2F]/80 mt-1">
          {(product.priceInr / 100).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </p>
      </div>
    </Link>
  );
}
