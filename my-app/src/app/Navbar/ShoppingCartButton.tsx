"use client";

import { ShopingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Link from "next/link";

interface ShoppingCartButtonProps {
  cart: ShopingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  function closeDropDown() {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  }

  return (
    <>
      <div className="dropdown dropdown-end ">
        <label
          tabIndex={0}
          className="btn-ghost btn-circle btn hover:bg-slate-300 text-black"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-warning badge-sm indicator-item">
              {cart?.size || 0}
            </span>
          </div>
        </label>
        <div
          className="card dropdown-content card-compact mt-3 w-52 bg-slate-300 shadow z-30"
          tabIndex={0}
        >
          <div className="card-body">
            <span className="text-lg font-bold text-black">
              {cart?.size || 0} Items
            </span>
            <span className="text-md text-indigo-600">
              Subtotal: {formatPrice(cart?.subtotal || 0)}
            </span>
            <div className="card-actions">
              <Link
                href={"/cart"}
                className="btn btn-warning btn-block"
                onClick={closeDropDown}
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
