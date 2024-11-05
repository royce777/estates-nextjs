import { Box, Badge, Icon, Flex, Text, Center, Divider, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect } from 'react'
import { FaBed, FaBath, FaHome, FaUmbrellaBeach, FaBorderAll, FaMapMarkerAlt} from 'react-icons/fa'
import Link from "next/link";


export default function EstateCard({ property, t}) {

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0, // Adjust decimals if needed
      maximumFractionDigits: 0
    }).format(price);
}


  useEffect(() => {
  }, []);

  const imageUrl = property.images[0].url;


  return (
    <Box maxWidth={{base:"100%", sm:"400px"}} borderWidth='1px' borderRadius='lg' overflow='hidden'>
      {/* <Image src={property.imageUrl} alt={property.imageAlt} layout='fill' /> */}
      <Box maxWidth={{base:"100%", sm:"400px"}} height='300px' position='relative'>
        <Image
          loader={() => imageUrl}
          src={imageUrl}
          alt='alt'
          layout='fill'            // Make the image fill the container
          objectFit='cover'        // Ensure the image covers the entire box
          sizes="(max-width: 480px) 300px, 400px"
          style={{ borderRadius: 'inherit' }}  // Match the border radius
        />
      </Box>


      <Box 
        maxWidth={{base:"100%", sm:"400px"}}
        p='3'
      >

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
            fontWeight='medium'
            fontSize='sm'
            textTransform='uppercase'
            ml='2'
            width="100%"
            flexWrap='wrap'
            justifyContent='space-between'
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            <SimpleGrid columns={2} spacingY="2" spacingX="4" width={{base:"100%", sm:"400px"}}>
              <Box display="flex" alignItems="center" justifyContent="flex-start" width="100%">
                <Box paddingRight="2">
                  <FaBed size="20" />
                </Box>
                <Box isTruncated>
                  {property.bedrooms} {t('bedrooms')}
                </Box>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="flex-start" width="100%">
                <Box paddingRight="2">
                  <FaBath size="15" />
                </Box>
                <Box isTruncated>
                  {property.bathrooms} {t('bathrooms')}
                </Box>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="flex-start" width="100%">
                <Box paddingRight="2">
                  <FaMapMarkerAlt size="15" />
                </Box>
                <Box isTruncated>
                  {property.location}
                </Box>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="flex-start" width="100%">
                <Box paddingRight="2">
                  <FaBorderAll size="18" />
                </Box>
                <Box isTruncated>
                  {property.area} {t('area_sqm')}
                </Box>
              </Box>
            </SimpleGrid>
          </Flex>
        </Box>

        <Divider padding='2' variant='solid' />

        <Center paddingTop='2'>
          <Box>
            {property.listing_type === 'rent' ? formatPrice(property.m_rate) : formatPrice(property.price)}
          </Box>
        </Center>
      </Box>
    </Box>
  )
}
