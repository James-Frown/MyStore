"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function setProductQuantity(productId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());

  const articalInCart = cart.items.find((item) => item.productId === productId);

  if (quantity === 0) {
    if (articalInCart) {
      await prisma.cartItem.delete({
        where: { id: articalInCart.id },
      });
    }
  } else {
    if (articalInCart) {
      await prisma.cartItem.update({
        where: {
          id: articalInCart.id,
        },
        data: {
          quantity,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }
  }

  revalidatePath("/cart");
}
