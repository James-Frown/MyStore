export function formatPrice(price: number) {
  return (price / 100).toLocaleString("en-UK", {
    style: "currency",
    currency: "ZAR",
  });
}
