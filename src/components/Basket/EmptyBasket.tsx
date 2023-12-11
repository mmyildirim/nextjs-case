import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

const EmptyBasket = () => {
  return (
    <Box textAlign={"center"} marginTop={35}>
      <Typography>
        Suanda Sepetiniz boş
        <Link className="emptyBasketLink" href={"/products"}>
          Alışverişe Başla!
        </Link>
      </Typography>
    </Box>
  );
};

export default EmptyBasket;
