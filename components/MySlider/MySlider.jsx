import { Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MySliderData from "./MySliderData";

const MySlider = () => {
  return (
    <Carousel infiniteLoop>
      {MySliderData.images.map((slide) => {
        return (<Box width='100%' height='100%'>
                    <Image src={slide.url} height="1000px" width="1920px" overflow='hidden'/>;
                </Box> )
      })}
    </Carousel>
  );
};

export default MySlider;
