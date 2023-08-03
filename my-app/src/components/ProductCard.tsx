import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <>
      <Link
        className="card w-full transition ease-in-out delay-150 bg-white text-slate-600 hover:bg-cyan-100 duration-300 ..."
        href={"/products/" + product.id}
      >
        <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={400}
            className="h-60 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          {isNew && (
            <div className="badge badge-info badge-lg text-white">NEW</div>
          )}
          <p className="text-sm md:text-lg">{product.description}</p>
          <PriceTag price={product.price} />
        </div>
      </Link>
    </>
  );
}
