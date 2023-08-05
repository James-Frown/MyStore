import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/Vercel_Logo.svg";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="bg-slate-100">
        <div className="navbar m-auto max-w-7xl flex-col gap-6 sm:flex-row">
          <div className="flex-1">
            <Link
              href={"/"}
              className="btn-ghost btn text-xl normal-case text-black hover:bg-slate-300"
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
                  className="input-border input w-full min-w-[100px]"
                />
              </div>
            </form>
            <ShoppingCartButton cart={cart} />
            <UserMenuButton session={session} />
          </div>
        </div>
      </div>
    </>
  );
}
