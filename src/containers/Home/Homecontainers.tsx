import Banner from "@/components/Home/Banner/Banner";
import HomeSlider from "@/components/Home/HomeSlider/HomeSlider";
import Container from "@mui/material/Container";
import Head from "next/head";

const HomeContainers = () => {
  return (
    <>
      <Head>
        <title>Case Shop</title>
        <meta name="description" content="Case Shop" key="desc" />
      </Head>
      <Container maxWidth="xl">
        <HomeSlider />
        <Banner />
      </Container>
    </>
  );
};

export default HomeContainers;
