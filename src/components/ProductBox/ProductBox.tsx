import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IProductItem } from "@/models/product";
import { Card, Divider } from "@mui/material";
interface IProductBox {
  product: IProductItem;
}
const ProductBox = (props: IProductBox) => {
  const { id, image, price, title } = props.product;

  return (
    <>
      <Box sx={{ width: "100%" }} paddingY={4}>
        <Card className="productBoxContainer">
          <Link href={`products/${id}`} title={title}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "225px", md: "250px" },
              }}
            >
              <Image fill={true} objectFit="contain" alt={title} src={image} />
            </Box>
            <Divider />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              textAlign="center"
              p={3}
            >
              <Typography
                variant="body1"
                mb={1}
                fontWeight="bold"
                color="initial"
                minHeight={"80px"}
              >
                {title.substring(0, 50)}
              </Typography>
              <Typography variant="body1" textAlign="center" color="initial">
                {price} ₺
              </Typography>
            </Box>
          </Link>
        </Card>
      </Box>
    </>
  );
};

export default ProductBox;
