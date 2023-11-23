import { IProductItem } from "@/models/product";

export const sortProducts = (
  products: IProductItem[],
  type: string
): IProductItem[] => {
  return [...products].sort((a, b) => {
    if (type === "asc") {
      return a.price - b.price;
    } else if (type === "desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });
};
