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
  TextField,
} from "@mui/material";
import Head from "next/head";

interface IProductList {
  products: IProductItem[];
}

export default function Products({ products }: IProductList) {
  const [sortType, setSortType] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IProductItem[]>([]);

  useEffect(() => {
    setSortType("order");
  }, []);

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortType(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, products]);

  const sortedProducts = sortProducts(
    searchTerm ? searchResults : products,
    sortType
  );

  return (
    <>
      <Head>
        <title>Kategori</title>
        <meta
          name="description"
          content="Next case category description"
          key="desc"
        />
      </Head>
      <Container sx={{ padding: 2 }} maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ marginY: 2 }}
        >
          <TextField
            label="Ürün Ara"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ marginRight: 2, width: "100%" }}
          />

          <FormControl variant="outlined" sx={{ width: 150 }}>
            <InputLabel id="sort-label">Fiyata Göre Sırala</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              value={sortType}
              label="Fiyata Göre Sırala"
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
    </>
  );
}
