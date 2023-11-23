"use client";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <>
      <Box sx={{ width: "100%" }} paddingY={4}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={6} xs={12}>
            <Box>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "250px", md: "325px" },
                }}
              >
                <Image
                  fill={true}
                  alt="test"
                  objectFit="contain"
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                p={3}
              >
                <Typography
                  variant="body1"
                  mb={1}
                  fontWeight="bold"
                  color="initial"
                >
                  Lorem ipsum
                </Typography>
                <Typography variant="body1" textAlign="center" color="initial">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero sequi adipisci ducimus? Nemo fugit iusto cum
                  voluptatem? Consequatur, laudantium sit?
                </Typography>
                <Link href="/products">
                  <Button
                    sx={{ marginTop: 2 }}
                    variant="contained"
                    color="primary"
                  >
                    Buy Now
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "250px", md: "325px" },
                }}
              >
                <Image
                  fill={true}
                  alt="test"
                  objectFit="contain"
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                />
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                p={3}
              >
                <Typography
                  variant="body1"
                  mb={1}
                  fontWeight="bold"
                  color="initial"
                >
                  Lorem ipsum
                </Typography>
                <Typography variant="body1" textAlign="center" color="initial">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero sequi adipisci ducimus? Nemo fugit iusto cum
                  voluptatem? Consequatur, laudantium sit?
                </Typography>
                <Link href="/products">
                  <Button
                    sx={{ marginTop: 2 }}
                    variant="contained"
                    color="primary"
                  >
                    Buy Now
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;
