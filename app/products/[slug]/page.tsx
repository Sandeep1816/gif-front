"use client";

import { useGetProductBySlugQuery } from "@/generated/graphql";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProductPage() {
  const { slug } = useParams();

  const { data, loading, error } = useGetProductBySlugQuery({
    variables: { slug: slug as string },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;
  if (!data?.productBySlug) return <p>Product not found</p>;

  const product = data.productBySlug;

  const mainImage =
    product.images.find((img) => img.isPrimary)?.url ||
    product.images[0]?.url ||
    "/placeholder.png";

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-10">

        {/* Product Image */}
        <Image
          src={mainImage}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-lg object-cover border"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-xl font-semibold mt-4">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="mt-4 text-gray-700">
            {product.description}
          </p>

          <p className="mt-2 text-gray-500">
            Category ID: {product.categoryId || "None"}
          </p>
        </div>

      </div>
    </main>
  );
}
