import { useCart } from "@/context/CartContext";
import { IProductItem } from "@/models/product";
import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

interface IProductDetailProps {
  data: IProductItem;
}

const ProductDetail = ({ data }: IProductDetailProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = (product: IProductItem) => {
    dispatch({ type: "ADD_ITEM", payload: product });
    toast(`${data.title} başarıyla sepete eklendi.`);
  };

  return (
    <>
      <Head>
        <title>{(data && data.title) || "Ürün listeleme"}</title>
        <meta
          name="description"
          content={(data && data.description) || "Product Detail Description"}
          key="desc"
        />
      </Head>
      <Container sx={{ paddingY: 4 }} maxWidth="lg">
        {data && (
          <Grid spacing={5} container>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "280px", md: "500px" },
                }}
              >
                <Image
                  fill={true}
                  alt={data?.title || "Product Image"}
                  src={data?.image}
                />
              </Box>
            </Grid>
            <Grid item sx={{ marginTop: { sm: 1, md: 8 } }} xs={12} md={6}>
              <Box
                paddingX={3}
                sx={{ textAlign: { xs: "center", md: "start" } }}
              >
                <Typography
                  fontWeight={"bold"}
                  marginBottom={1}
                  variant="body1"
                  color="initial"
                >
                  {data.title}
                </Typography>
                <Typography marginBottom={2} variant="body1" color="initial">
                  {data.description}
                </Typography>
                <Typography fontWeight={"bold"} variant="body1" color="initial">
                  {data.price} ₺
                </Typography>
                <Button
                  onClick={() => handleAddToCart(data)}
                  sx={{ marginTop: 2 }}
                  variant="contained"
                  color="primary"
                >
                  Add To Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
    </>
  );
};

export default ProductDetail;
