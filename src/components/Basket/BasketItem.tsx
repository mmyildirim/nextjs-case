import { IProductItem } from "@/models/product";
import { IBasketItem } from "@/models/basket";
import { useCart } from "@/context/CartContext";
import { formatNumber } from "@/utils/CartUpdate";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { Card, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Head from "next/head";
import { Description } from "@mui/icons-material";

interface IBasketItemProps {
  basketItem: IBasketItem;
}

const BasketItem = (props: IBasketItemProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { basketItem } = props;

  const { dispatch } = useCart();

  const handleAddToCartItem = (product: IProductItem) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const handleDeleteToCartItem = (id: number) => {
    dispatch({ type: "CLEAR_FROM_CART", payload: id });
    toast("Ürün Sepetten Silindi");
  };
  return (
    <>
      <Head>
        <title>Cart</title>
        <Description>Next Case Cart Page</Description>
      </Head>
      <Card sx={{ padding: 2 }}>
        <Grid container sx={{ position: "relative" }} spacing={1}>
          <Grid item xs={5} md={2} lg={2}>
            <Box>
              <Image
                height={110}
                width={110}
                alt="test"
                src={basketItem.image}
              />
            </Box>
          </Grid>
          {isMobile ? (
            <Grid item xs={7}>
              <Typography fontWeight={"bold"} fontSize={15} paddingRight={3}>
                {basketItem.title}
              </Typography>
              <Box display={"flex"} alignItems={"center"} marginY={1}>
                <Typography fontSize={15} marginTop={0.5} paddingRight={2}>
                  Birim Fiyat:
                </Typography>
                <Typography fontWeight={"bold"}>
                  {formatNumber(basketItem.price)} ₺
                </Typography>
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                fontWeight={"bold"}
                marginY={1}
              >
                <Button
                  onClick={() => handleRemoveFromCart(basketItem.id)}
                  sx={{
                    marginRight: 1,
                    backgroundColor: "#0000008A",
                    minWidth: 4,
                    paddingX: 1.5,
                    paddingY: 0.25,
                  }}
                  variant="contained"
                  color="primary"
                >
                  -
                </Button>
                <Typography>{basketItem.quantity}</Typography>
                <Button
                  onClick={() => handleAddToCartItem(basketItem)}
                  sx={{
                    marginLeft: 1,

                    backgroundColor: "#0000008A",
                    minWidth: 4,
                    paddingX: 1.2,
                    paddingY: 0.25,
                  }}
                  variant="contained"
                  color="primary"
                >
                  +
                </Button>
              </Box>

              <Box display={"flex"} alignItems={"center"}>
                <Typography paddingRight={2} fontSize={15}>
                  Total Fiyat:
                </Typography>
                <Typography fontSize={15} fontWeight={"bold"}>
                  {formatNumber(basketItem.quantity * basketItem.price)} ₺
                </Typography>
              </Box>
              <Box sx={{ position: "absolute", top: 0, right: "-1%" }}>
                <IconButton
                  onClick={() => handleDeleteToCartItem(basketItem.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          ) : (
            <>
              <Grid item xs={4}>
                <Typography
                  fontWeight={"bold"}
                  fontSize={15}
                  sx={{ paddingLeft: { xs: 0, md: 2 } }}
                >
                  {basketItem.title}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography fontSize={15} fontWeight={"bold"}>
                  Birim Fiyat
                </Typography>
                <Typography fontSize={15}>
                  {formatNumber(basketItem.price)} ₺
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={15}
                >
                  <Button
                    onClick={() => handleRemoveFromCart(basketItem.id)}
                    sx={{
                      marginRight: 1,
                      backgroundColor: "#0000008A",
                      minWidth: 4,
                      paddingX: 1.5,
                      paddingY: 0.25,
                      ":hover": {
                        backgroundColor: "#fff",
                        color: "#0000008A",
                      },
                    }}
                    variant="contained"
                    color="primary"
                  >
                    -
                  </Button>
                  <Typography fontSize={15}>{basketItem.quantity}</Typography>
                  <Button
                    onClick={() => handleAddToCartItem(basketItem)}
                    sx={{
                      marginLeft: 1,
                      backgroundColor: "#0000008A",
                      minWidth: 4,
                      paddingX: 1.2,
                      paddingY: 0.25,
                      ":hover": {
                        backgroundColor: "#fff",
                        color: "#0000008A",
                      },
                    }}
                    variant="contained"
                  >
                    +
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Typography fontWeight={"bold"} fontSize={15}>
                  Total Fiyat
                </Typography>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"start"}
                >
                  <Typography fontSize={15}>
                    {formatNumber(basketItem.quantity * basketItem.price)} ₺
                  </Typography>
                </Box>
                <Box sx={{ position: "absolute", right: "-2%", top: 0 }}>
                  <IconButton
                    onClick={() => handleDeleteToCartItem(basketItem.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
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
      </Card>
    </>
  );
};

export default BasketItem;
