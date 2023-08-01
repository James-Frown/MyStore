import { Product } from "@prisma/client";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <Link
        className="card w-full transition ease-in-out delay-150 bg-white text-slate-600 hover:scale-105 hover:bg-cyan-500 duration-300 ..."
        href={"/products/" + product.id}
      >
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
        </div>
      </Link>
    </>
  );
}
