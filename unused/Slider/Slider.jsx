import { Box } from '@chakra-ui/react'
import SliderData from './SliderData'
import Image from 'next/image'

export default function Slider(props){
    return (
        <Box w='100%' h='100%'>
            {SliderData.images.map((img, index) => (
                    // <Image key={index} src={img.url} alt="" title="" width="100%" height="100%" layout="responsive" objectFit="contain"/>
                    <Box key={index} position='relative'>
                        <Image src={img.url} alt="" title="" layout="fill" objectFit="contain"/>
                    </Box>
                )
            )}
        </Box>
    )
}