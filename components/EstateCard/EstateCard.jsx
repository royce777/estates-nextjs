import { Box, Badge, Icon, Flex, Text, Center, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect } from 'react'
import { FaBed, FaBath, FaHome, FaUmbrellaBeach, FaBorderAll } from 'react-icons/fa'
import Link from "next/link";


export default function EstateCard({ property }) {

  useEffect(() => {
    console.log(property);
  }, []);

  const imageUrl = property.images[0].url;


  /*const property = {
    name: 'Property Name',
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '1,900.00',
    reviewCount: 34,
    rating: 4,
    rooms: 4,
    sea_dist: 1500,
    area: 300
  } */

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      {/* <Image src={property.imageUrl} alt={property.imageAlt} layout='fill' /> */}

      <Image loader={() => imageUrl} src={imageUrl} alt='alt' width={400} height={300} />

      <Box p='3'>

        <Link href={`/estate/${property.id}`}>
          <Text fontSize='xl' fontWeight='semibold'>{property.name} </Text>
        </Link>

        <Box
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {property.title}
        </Box>

        <Divider padding='1' />

        <Box display='flex' alignItems='center' paddingTop='2'>
          {/* <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge> */}
          <Flex
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='sm'
            textTransform='uppercase'
            ml='2'
            flexWrap='wrap'
            justifyContent='center'
          >
            <Box display='flex' paddingRight='3'>
              <Box paddingRight='2'>
                <FaBed size='20' />
              </Box>
              {property.beds} beds
            </Box>
            <Box display='flex' paddingRight='3' >
              <Box paddingRight='2' paddingLeft='1'>
                <FaBath size='15' />
              </Box>
              {property.bathrooms} baths
            </Box>
            <Box display='flex' paddingRight='3'>
              <Box paddingRight='2' paddingLeft='1'>
                <FaHome size='18' />
              </Box>
              {property.rooms} rooms
            </Box>
            {/* SECOND ROW OF ICON PROPS */}
            <Box display='flex' paddingRight='3'>
              <Box paddingRight='2' >
                <FaUmbrellaBeach size='18' />
              </Box>
              {property.sea_dist} m
            </Box>
            <Box display='flex' paddingRight='3'>
              <Box paddingRight='2' >
                <FaBorderAll size='18' />
              </Box>
              {property.area} sq.m
            </Box>

          </Flex>
        </Box>

        <Divider padding='2' variant='solid' />

        <Center paddingTop='2'>
          <Box>
            € {property.price}
            {
              /*
              <Box as='span' color='gray.600' fontSize='sm'>
                / month
              </Box>
              */
            }
          </Box>
        </Center>

        {/* <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box> */}
      </Box>
    </Box>
  )
}