import { Image, Box, Center, Button, Flex, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MySliderData from "./MySliderData";
import { useRouter } from 'next/router';

const MySlider = ({t}) => {
  const router = useRouter();
  return (
      // TODO: Correct image centering
      <Flex justifyContent='center' alignItems='center'>
        <Carousel infiniteLoop autoPlay showThumbs={false} swipeable={false} dynamicHeight={true}>
        {MySliderData.images.map((slide, index) => (
                <Box key={index} >
                        <Image src={slide.url} height="1000px" width="1920px" fit='cover'/>
                </Box> 
        ))}
        </Carousel>
        <Box width='100%' position='absolute'>
            <Center>
               <Box
                position="relative"
                shadow="0px 0px 10px 10px rgba(0, 0, 0, .82)"
                background="rgba(0, 0, 0, 0.8)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginBottom={10}
              >
                <Image
                  src="/images/hh-logo-2.png"
                  alt="Logo"
                  width="400px"
                  height="auto"
                />
              </Box>
            </Center>
            <Center> 
                <Button height='80px' margin='3px' colorScheme='blackAlpha' bgColor='black' onClick={() => router.push('/search')}>
                   {t('home:buy_btn')} 
                </Button>
                <Button height='80px' margin='3px' colorScheme='blackAlpha' bgColor='black' onClick={() => router.push('/search')}>
                   {t('home:rent_btn')} 
                </Button>
            </Center>
            <Center>
                <Button height='80px' margin='3px' colorScheme='blackAlpha' bgColor='black' onClick={() => router.push('/contact')}>
                   {t('home:sell_btn')} 
                </Button>
            </Center>
        </Box>
    </Flex>
  );
};

export default MySlider;
