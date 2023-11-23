"use client";
import { useEffect, useState } from "react";
import { calculateTotalPrice } from "@/utils/CartUpdate";
import EmptyBasket from "@/components/Basket/EmptyBasket";
import BasketItem from "@/components/Basket/BasketItem";
import { useCart } from "@/context/CartContext";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { IBasketItem } from "@/models/basket";

const Basket = () => {
  const { state } = useCart();
  const [basketItems, setBasketItems] = useState<IBasketItem[]>();
  const [isBasketEmpty, setIsBasketEmpty] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<string>();

  useEffect(() => {
    if (state.items.length > 0) {
      setBasketItems(state.items);
      setIsBasketEmpty(false);
      const calculeteTotalPriceValue = calculateTotalPrice(state.items);
      setTotalPrice(calculeteTotalPriceValue);
    } else {
      setIsBasketEmpty(true);
    }
  }, [state.items]);

  if (isBasketEmpty) {
    return <EmptyBasket />;
  }

  return (
    <Container sx={{ paddingY: 4 }} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={9} lg={9}>
          {basketItems?.map((item: IBasketItem) => (
            <Box key={item.id} paddingY={2}>
              <BasketItem basketItem={item} />
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card sx={{ padding: 3, marginTop: 2 }}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginBottom={3}
            >
              <Typography variant="body1" fontSize={"15px"} color="initial">
                Ara Toplam
              </Typography>
              <Typography fontSize={"15px"} variant="body1" color="initial">
                {totalPrice}₺
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginBottom={3}
            >
              <Typography fontSize={"15px"} variant="body1" color="initial">
                Kargo Tutarı
              </Typography>
              <Typography
                fontWeight={"bold"}
                variant="body1"
                color="success.main"
                fontSize={"15px"}
              >
                Ücretsiz
              </Typography>
            </Box>
            <Divider />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginY={3}
            >
              <Typography
                fontSize={"15px"}
                fontWeight={"bold"}
                variant="body1"
                color="initial"
              >
                Genel Toplam
              </Typography>
              <Typography fontSize={"15px"} variant="body1" color="initial">
                {totalPrice}₺
              </Typography>
            </Box>
            <Box>
              <Button fullWidth variant="contained">
                Sepeti Onayla
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Basket;
