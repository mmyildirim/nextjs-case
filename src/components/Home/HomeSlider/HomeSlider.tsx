"use client";
import { ISliderItem } from "@/models/home";
import { sliderItems } from "./data";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        "& .slick-prev": { left: { xs: "20px", md: "50px" }, zIndex: "1" },
        "& .slick-next": { right: { xs: "20px", md: "50px" }, zIndex: "1" },
      }}
    >
      <Link href={"/products"}>
        <Slider {...settings}>
          {sliderItems?.map((item: ISliderItem) => (
            <Box
              sx={{
                position: "relative",
                height: { xs: "300px", md: "700px" },
              }}
              key={item.id}
            >
              <Image
                src={item.imageUrl}
                objectFit="cover"
                alt={item.alt}
                fill={true}
              />
            </Box>
          ))}
        </Slider>
      </Link>
    </Box>
  );
}
