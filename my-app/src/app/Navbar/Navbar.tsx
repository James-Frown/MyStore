import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/Vercel_Logo.svg";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();

  return (
    <>
      <div className="bg-slate-100">
        <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <Link
              href={"/"}
              className="btn btn-ghost text-xl normal-case hover:bg-slate-300 text-black"
            >
              <Image src={Logo} height={35} width={35} alt="Logo" />
              MyStore
            </Link>
          </div>
          <div className="flex-none gap-2">
            <form action={searchProducts}>
              <div className="form-control">
                <input
                  name="searchQuery"
                  placeholder="Search"
                  className="input input-border w-full min-w-[100px]"
                />
              </div>
            </form>
            <ShoppingCartButton cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
}
