import {
  Box,
  Heading,
  Button,
  Divider,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  List,
  ListItem,
  ListIcon,
  VStack,
  HStack,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
  useDisclosure
} from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import ReviewCard from '../components/ReviewCard/ReviewCard';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import { postApi, baseUrl, fetchApi } from '../utils/fetchApi.js';



export const getServerSideProps = async ({ locale }) => {
  const data = await fetchApi(`${baseUrl}/reviews/get-public`);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
      reviews: data ? data.reviews : []
    },
  };
};


const reviews_static = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    stars: 5,
    message: "Absolutely fantastic service! Highly recommend to everyone.",
    timestamp: "2024-11-20T14:30:00Z",
    approved: true,
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    stars: 4,
    message: "Great experience overall, but there’s room for improvement.",
    timestamp: "2024-11-18T09:15:00Z",
    approved: true,
  },
  {
    name: "Clara Davis",
    email: "clara@example.com",
    stars: 3,
    message: "It was okay, but I expected better based on the reviews.",
    timestamp: "2024-11-15T16:00:00Z",
    approved: true,
  },
  {
    name: "David Brown",
    email: "david@example.com",
    stars: 1,
    message: "Terrible experience. Would not recommend at all.",
    timestamp: "2024-11-10T11:45:00Z",
    approved: true,
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    stars: 5,
    message: "Outstanding! Will definitely come back again.",
    timestamp: "2024-11-08T08:20:00Z",
    approved: true,
  },
];

const About = ({ reviews }) => {
  const { t } = useTranslation("about");

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const displayToast = (success) => {
    if (success) {
      toast({
        title: 'Success',
        description: "Success!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
    else {
      toast({
        title: 'Error',
        description: "Error!",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  const handleReviewSubmit = async (newReview) => {
    const res = await postApi(baseUrl + "/review", newReview, false);
    if (res?.status === 200) {
      displayToast(true);
      onClose();
    }
    else {
      displayToast(false)
    }
    return res;
  }


  return (
    <Box
      padding="4"
      margin="auto"
      maxWidth={{ base: "100%", sm: '480px', md: '600px', lg: '1000px' }}
    >
      <Heading as="h1" size="lg" mb="6" mt="20">
        {t("title")}
      </Heading>
      <Text mb="4">{t("description1")}</Text>
      <Text mb="4">{t("description2")}</Text>
      <Text mb="4">{t("description3")}</Text>
      <Text mb="4">{t("description4")}</Text>
      <Text mb="4">{t("description5")}</Text>

      <Heading as="h2" size="lg" mt="6" mb="4">
        {t("services_title")}
      </Heading>
      <List spacing="3">
        {t("services_list", { returnObjects: true }).map((service, index) => (
          <ListItem key={index}>
            <ListIcon as={MdCheckCircleOutline} color='green.500' />
            {service}
          </ListItem>
        ))}
      </List>

      <Text mt="6">{t("conclusion")}</Text>

      <Divider
        marginY="10"
      />

      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold">
          {t("reviews")}
        </Text>
        <Button colorScheme="blue" onClick={onOpen}>
          {t("add_review")}
        </Button>
      </Flex>

      <VStack spacing={4} align="stretch">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={review}
          />
        ))}
      </VStack>
      {/* Modal for Review Form */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('add_your_review')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ReviewForm
              onSubmit={handleReviewSubmit}
              t={t}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>

  );
};

export default About;
