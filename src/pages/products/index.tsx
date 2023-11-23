import ProductList from "@/containers/Product/ProductList/ProductList";
import { IProductItem } from "@/models/product";

const Products = ({ products }: { products: IProductItem[] }) => {
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Products;

export const getServerSideProps = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    if (!response.ok) {
      throw new Error("Product not found");
    }
    const data = await response.json();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      notFound: true,
    };
  }
};
