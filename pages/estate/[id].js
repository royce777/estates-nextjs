import { Box, Container, HStack, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { BsDoorClosed, BsCheck2Circle } from "react-icons/bs";
import {
  FaBath,
  FaBed,
  FaBorderAll,
  FaPeriscope,
  FaUmbrellaBeach,
  FaUsers,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const EstateDetails = ({
  estateDetails: {
    name,
    ref_id,
    area,
    rooms,
    bedrooms,
    bathrooms,
    garden_area,
    beds,
    location,
    energy_class,
    sea_dist,
    listing_type,
    build_year,
    floors,
    price,
    m_rate,
    category,
    description,
    features,
    images,
  },
}) => {

  useEffect(() => {
    const featNames = getFeatureNames(features);
    setFeatureNames(featNames);
  }, []);

  const [featureNames, setFeatureNames] = useState([]);

  const getFeatureNames = (features) => {
    return Object.keys(features).filter(key => features[key] === true);
  };
  return (
    <>
      <Center>
        <Box
          paddingLeft={{ base: "30px" }}
          paddingRight={{ base: "30px" }}
          paddingTop="70px"
          paddingBottom={{ base: "30px" }}
          maxWidth={{ base: "1000px" }}
        >
          <HStack justify="space-between">
            <Text fontSize="3xl" p="3">
              {name}
            </Text>
            <Text fontSize="2xl" p="3">
              {ref_id}
            </Text>
          </HStack>
          <Box display="flex" p="3">
            <Box paddingRight="2" paddingLeft="1">
              <FaPeriscope size="18" />
            </Box>
            {location}
          </Box>
          {images.length > 0 && (
            <Carousel infiniteLoop autoPlay swipeable={true} showThumbs={true}>
              {images.map((img, index) => (
                <Container key={index} maxWidth="1000px" maxHeight="600px">
                  {/* <Image src={img.url} height="600px" width="1180px" fit="none" /> */}
                  <img
                    src={img.url}
                  // style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </Container>
              ))}
            </Carousel>
          )}

          <Text p="5" fontSize="lg" fontWeight="bold">
            {" "}
            Summary
          </Text>
          <SimpleGrid
            paddingTop="10px"
            bg="gray.50"
            rounded="lg"
            color="gray.500"
            shadow="dark-lg"
            spacing="6"
            columns={{ base: 1, sm: 2, md: 3 }}
            fontSize="lg"
            textAlign="center"
            p="5"
          >
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2">
                <FaBed size="20" />
              </Box>
              Bedrooms: {bedrooms}
            </Box>
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2" paddingLeft="1">
                <FaBath size="18" />
              </Box>
              Bathrooms: {bathrooms}
            </Box>
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2" paddingLeft="1">
                <FaUsers size="18" />
              </Box>
              Beds: {beds}
            </Box>
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2" paddingLeft="1">
                <BsDoorClosed size="18" />
              </Box>
              Rooms: {rooms}
            </Box>
            {/* SECOND ROW OF ICON PROPS */}
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2">
                <FaUmbrellaBeach size="18" />
              </Box>
              Beach: {sea_dist} m
            </Box>
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2">
                <FaBorderAll size="18" />
              </Box>
              Area: {area} sq.m
            </Box>
          </SimpleGrid>
          <Text p="5" fontSize="lg" fontWeight="bold">
            {" "}
            Description
          </Text>
          <Box
            paddingTop="10px"
            bg="gray.50"
            rounded="lg"
            color="black"
            shadow="dark-lg"
            textAlign="center"
          >
            {description.map((desc, index) => {
              if (desc.lang === "en")
                return (
                  <Text p="3">
                    Irure excepteur veniam labore dolore quis exercitation dolor
                    dolor. Lorem do voluptate ad tempor ex exercitation eu qui
                    duis id. Eiusmod incididunt sunt nostrud deserunt nisi
                    exercitation. Cillum aliquip esse quis irure. Duis id magna ea
                    ut quis eiusmod eiusmod ea labore minim. Ipsum eiusmod est id
                    labore in exercitation.
                  </Text>
                );
            })}
          </Box>
          <Text p="5" fontSize="lg" fontWeight="bold">
            {" "}
            Services
          </Text>
          <SimpleGrid
            paddingTop="10px"
            bg="gray.50"
            rounded="lg"
            color="gray.500"
            shadow="dark-lg"
            spacing="6"
            columns={{ base: 1, sm: 2, md: 3 }}
            fontSize="lg"
            textAlign="center"
            p="5"
          >
            {featureNames.map((feat, index) => {
              return (
                <Box display="flex" justifyContent="center" paddingRight="3">
                  <Box paddingRight="2">
                    <BsCheck2Circle size="20" />
                  </Box>
                  {feat}
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Center>
    </>
  );
};

export default EstateDetails;
export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/estates/${id}`);

  return {
    props: {
      estateDetails: data,
    },
  };
}
