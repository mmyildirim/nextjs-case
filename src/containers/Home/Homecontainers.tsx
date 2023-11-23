import Banner from "@/components/Home/Banner/Banner";
import HomeSlider from "@/components/Home/HomeSlider/HomeSlider";
import Container from "@mui/material/Container";

const HomeContainers = () => {
  return (
    <>
      <Container maxWidth="xl">
        <HomeSlider />
        <Banner />
      </Container>
    </>
  );
};

export default HomeContainers;
