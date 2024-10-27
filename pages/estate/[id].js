import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, Box, Button, Container, HStack, SimpleGrid, Text, Center, IconButton } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { baseUrl, fetchApi, deleteEstate } from "../../utils/fetchApi";
import { BsDoorClosed, BsCheck2Circle } from "react-icons/bs";
import { FaExpand } from 'react-icons/fa';
import {
  FaBath,
  FaBed,
  FaBorderAll,
  FaPeriscope,
  FaUmbrellaBeach,
  FaUsers,
  FaTrash
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useUser } from '../../context/UserContext.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const EstateDetails = ({
  estateDetails: {
    id,
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

  const { locale } = useRouter();

  const { t } = useTranslation('estatePage');

  const [featureNames, setFeatureNames] = useState([]);

  const getFeatureNames = (features) => {
    return Object.keys(features).filter(key => features[key] === true);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef()
  const toast = useToast();

  const { isAdmin } = useUser();


  {/*FULL SCREEN MODAL*/}
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setIsFullScreenOpen(true);
  };

  const closeFullscreen = () => {
    setIsFullScreenOpen(false);
  };


  const handleDelete = async () => {
    onClose();
    console.log(baseUrl + `/estates/${id}`);
    const response = await deleteEstate(baseUrl + `/estates/${id}`);
    if(response.status === 200){
      toast({
        title: 'Success',
        description: "Estate deleted! You will be redirected to the homepage !",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        window.location.href = `/`;
      }, 2000);
    }
    else {
      console.error("request failed :", response);
      toast({
        title: 'Error',
        description: "Error!",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }

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
          <HStack justify="space-between" align="center">
            <Text fontSize="3xl" p="3">
              {name}
            </Text>
            <HStack spacing="3">
              <Text fontSize="2xl" p="3">
                {ref_id}
              </Text>
              {isAdmin && (
                <>
                  <Button 
                    colorScheme="red" 
                    variant="ghost" 
                    onClick={onOpen}
                  >
                    <FaTrash size="18"/>
                  </Button>
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                          Warning 
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                          </Button>
                          <Button colorScheme='red' onClick={handleDelete} ml={3}>
                            Delete
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </>
              )}
            </HStack>
          </HStack>
          {/*
          <HStack justify="space-between">
            <Text fontSize="3xl" p="3">
              {name}
            </Text>
            <Text fontSize="2xl" p="3">
              {ref_id}
            </Text>
          </HStack>
          */}
          <Box display="flex" p="3">
            <Box paddingRight="2" paddingLeft="1">
              <FaPeriscope size="18" />
            </Box>
            {location}
          </Box>
          {images.length > 0 && (
            <Carousel infiniteLoop autoPlay swipeable={true} showThumbs={true}>
              {images.map((img, index) => (
                <Container key={index} maxWidth="1000px" maxHeight="600px" display='flex' justifyContent='center' alignItems='center'>
                  {/* <Image src={img.url} height="600px" width="1180px" fit="none" /> */}
                  <img
                    src={img.url}
                  // style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                  <IconButton
                    icon={<FaExpand />}
                    position="absolute"
                    top="30px"
                    left="30px"
                    onClick={() => openFullscreen(index)}
                    aria-label="View fullscreen"
                    colorScheme="gray"
                    variant="solid"
                  />
                </Container>
              ))}
            </Carousel>
          )}
          {/* Fullscreen Modal */}
          <Modal isOpen={isFullScreenOpen} onClose={closeFullscreen} size="full">
            <ModalOverlay />
            <ModalContent bg="black">
              <ModalCloseButton 
                color="white" 
                top="20px" 
                right="20px" 
                zIndex="10"             // Ensures button is above the carousel arrows
                size="lg"
              />
              <Carousel
                selectedItem={currentIndex} // Start at the current index
                infiniteLoop
                showThumbs={false}
                swipeable
              >
                {images.map((img, index) => (
                  <Box key={index} display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <img
                      src={img.url}
                      alt={`Fullscreen image ${index + 1}`}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                ))}
              </Carousel>
            </ModalContent>
          </Modal>

          <Text p="5" fontSize="lg" fontWeight="bold">
            {" "}
            {t('summary')}
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
              {t('bedrooms')}: {bedrooms}
            </Box>
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2" paddingLeft="1">
                <FaBath size="18" />
              </Box>
              {t('bathrooms')}: {bathrooms}
            </Box>
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2" paddingLeft="1">
                <BsDoorClosed size="18" />
              </Box>
              {t('rooms')}: {rooms}
            </Box>
            {/* SECOND ROW OF ICON PROPS */}
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2">
                <FaUmbrellaBeach size="18" />
              </Box>
              {t('beach')}: {sea_dist} m
            </Box>
            <Box display="flex" justifyContent="center" paddingRight="3">
              <Box paddingRight="2">
                <FaBorderAll size="18" />
              </Box>
              {t('area')}: {area} sq.m
            </Box>
          </SimpleGrid>
          <Text p="5" fontSize="lg" fontWeight="bold">
            {" "}
            {t('description')}
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
              if (desc.lang === locale)
                return (
                  <Text p="3" key={index}>
                    {desc.desc}
                  </Text>
                );
            })}
          </Box>
          <Text p="5" fontSize="lg" fontWeight="bold">
            {" "}
            {t('services')}
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
                <Box display="flex" justifyContent="center" paddingRight="3" key={index}>
                  <Box paddingRight="2">
                    <BsCheck2Circle size="20" />
                  </Box>
                  {t(feat)}
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Center>
    </>
  );
};

export async function getServerSideProps({ params: { id }, locale }) {
  const data = await fetchApi(`${baseUrl}/estates/${id}`);

  const translations = await serverSideTranslations(locale, ['estatePage']);

  return {
    props: {
      estateDetails: data,
      ...translations
    },
  };
}

export default EstateDetails;
