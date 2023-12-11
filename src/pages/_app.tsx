import Header from "@/components/Header/Header";
import { CartProvider } from "@/context/CartContext";
import Box from "@mui/material/Box";
import "./global.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <Box paddingTop={8} component={"main"}>
        <Component {...pageProps} />
      </Box>
    </CartProvider>
  );
}
