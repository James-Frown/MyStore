import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return (
    <>
      <span
        className={`text-white h-8 badge badge-lg pt-6 pb-6 bg-green-600 ${className}`}
      >
        {formatPrice(price)}
      </span>
    </>
  );
}
