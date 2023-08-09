import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);
  return {
    title: product.name + " | MyStore",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div>
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg"
              priority
            />
            <div className="mt-6">
              <h1 className="text-5xl bold">{product.name}</h1>
              <PriceTag price={product.price} className="mt-6" />
              <p className="mt-6 mb-6">{product.description}</p>
              <AddToCartButton
                productId={product.id}
                incrementProductQuantity={incrementProductQuantity}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
