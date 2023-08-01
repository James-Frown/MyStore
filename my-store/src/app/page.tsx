import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";

export default async function HomePage() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <>
      <ProductCard product={products[0]} />
    </>
  );
}
