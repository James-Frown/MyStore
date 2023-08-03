import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";

export const metadata = {
  title: "Your Cart | MyStore",
};

export default async function CartPage() {
  const cart = await getCart();
  return (
    <>
      <div>
        <h1 className="text-3xl mb-4 font-bold">Shopping Cart</h1>
        {cart?.items.map((cartItem) => (
          <>
            <CartEntry
              cartItem={cartItem}
              key={cartItem.id}
              setProductQuantity={setProductQuantity}
            />
          </>
        ))}
        {!cart?.items.length && <p>Your Cart Is Empty!</p>}
        <div className="flex flex-col items-end sm:items-center mb-6">
          <p className="mb-6 mt-6 font-bold">
            Total: {formatPrice(cart?.subtotal || 0)}
          </p>
          <button className="btn btn-circle w-auto px-4 border-none bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 sm:w-[200px]">
            CheckOut
          </button>
        </div>
      </div>
    </>
  );
}
