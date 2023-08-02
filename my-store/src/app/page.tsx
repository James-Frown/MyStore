import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <>
      <div>
        <div className="hero rounded-xl flex flex-col">
          <div className="hero-content flex-col lg:flex-row gap-4">
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={800}
              height={800}
              className="w-full max-w-sm rounded-lg"
              priority
            />
            <div>
              <h1 className="text-5xl font-bold">{products[0].name}</h1>
              <p className="py-6">{products[0].description}</p>
              <Link
                href={"/products/" + products[0].id}
                className="btn btn-warning"
              >
                Check It Out!
              </Link>
            </div>
          </div>
        </div>
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {products.slice(1).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}
