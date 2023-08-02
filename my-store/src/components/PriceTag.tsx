import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return (
    <>
      <span className={`text-white badge badge-lg p-2 ${className}`}>
        {formatPrice(price)}
      </span>
    </>
  );
}
