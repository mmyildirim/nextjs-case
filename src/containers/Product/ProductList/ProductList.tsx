import { useState, useEffect } from "react";
import { IProductItem } from "@/models/product";
import { sortProducts } from "@/utils/ProductListSort";
import ProductBox from "@/components/ProductBox/ProductBox";
import Container from "@mui/material/Container";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Box,
} from "@mui/material";

interface IProductList {
  products: IProductItem[];
}

export default function Products({ products }: IProductList) {
  const [sortType, setSortType] = useState<string>("");

  useEffect(() => {
    setSortType("order");
  }, []);

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortType(event.target.value);
  };

  const sortedProducts = sortProducts(products, sortType);

  return (
    <Container sx={{ padding: 2 }} maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ marginY: 2 }}
      >
        <FormControl variant="outlined" sx={{ width: 150 }}>
          <InputLabel id="sort-label">Fiyata Gore Sırala</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={sortType}
            label="Fiyata Gore Sırala"
            onChange={handleSortChange}
          >
            <MenuItem value="order">Sırala</MenuItem>
            <MenuItem value="desc">Fiyat Azalan</MenuItem>
            <MenuItem value="asc">Fiyat Artan</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid spacing={3} container>
        {sortedProducts?.length > 0 &&
          sortedProducts.map((product: IProductItem) => (
            <Grid key={product.id} item xs={12} md={6} lg={3}>
              <ProductBox product={product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
