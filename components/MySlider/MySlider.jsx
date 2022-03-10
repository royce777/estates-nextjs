import { Image, Box, Center, Button, Flex, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MySliderData from "./MySliderData";

const MySlider = () => {
  return (
      // TODO: Correct image centering
      <Flex justifyContent='center' alignItems='center'>
        <Carousel infiniteLoop autoPlay showThumbs={false} swipeable={false} dynamicHeight={true}>
        {MySliderData.images.map((slide, index) => (
                <Box key={index} >
                        <Image src={slide.url} height="1000px" width="1920px" fit='none'/>
                </Box> 
        ))}
        </Carousel>
        <Box width='100%' position='absolute'>
            <Center> 
                <Button height='80px' margin='3px' colorScheme='blackAlpha'>
                    I WANT TO BUY
                </Button>
                <Button height='80px' margin='3px' colorScheme='blackAlpha'>
                    I WANT TO RENT
                </Button>
            </Center>
            <Center>
                <Button height='80px' margin='3px' colorScheme='blackAlpha'>
                    I WANT TO SELL 
                </Button>
            </Center>
        </Box>
    </Flex>
  );
};

export default MySlider;
