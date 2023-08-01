import { prisma } from "@/lib/db/prisma";

export const metadata = {
  title: "Add Product | MyStore",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required feilds");
  }

  await prisma.product.create({
    data: {name, description, imageUrl, price},
  });
}

export default function AddProductPage() {
  return (
    <>
      <div>
        <h1 className="text-lg mb-3 font-bold">Add Product</h1>
        <form action={addProduct}>
          <input
            required
            name="name"
            placeholder="Name"
            className="input input-bordered mb-3 w-full"
          />
          <textarea
            required
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered mb-3 w-full"
          />
          <input
            required
            name="imageUrl"
            placeholder="Image Url"
            type="url"
            className="input input-bordered mb-3 w-full"
          />
          <input
            required
            name="price"
            placeholder="Price"
            type="number"
            className="input input-bordered mb-3 w-full"
          />
          <button type="submit" className="btn btn-primary btn-block">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
