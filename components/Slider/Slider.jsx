import { Box } from '@chakra-ui/react'
import SliderData from './SliderData'
import Image from 'next/image'

export default function Slider(props){
    return (
        <Box>
            {SliderData.images.map((img, index) => {
                return (
                    <Image src={img.url} alt="pic" layout='fill'/>
                )
            })}
        </Box>
    )
}