import { IProductItem } from "@/models/product";
import ProductDetail from "@/containers/Product/ProductDetail/ProductDetail";
import "react-toastify/dist/ReactToastify.css";

export default function page({ productItems }: { productItems: IProductItem }) {
  return <ProductDetail data={productItems} />;
}
export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const { id } = params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    );

    if (!response.ok) {
      throw new Error("Product not found");
    }

    const data = await response.json();

    return {
      props: {
        productItems: { ...data },
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      notFound: true,
    };
  }
};
