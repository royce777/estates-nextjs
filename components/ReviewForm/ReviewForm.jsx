import {
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
  Icon,
  useToast
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const ReviewForm = ({ onSubmit, t }) => {
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    stars: 0,
    message: "",
  });

  const handleStarClick = (stars) => {
    setNewReview((prev) => ({ ...prev, stars }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) {
      const res = await onSubmit(newReview);
      if(res?.status === 200){
        setNewReview({ name: "", email: "", stars: 0, message: "" });
      }
    }
    // Clear the form after submission
  };

  return (
    <Box mt={8}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {t('your_review')}
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>{t('name')}</FormLabel>
            <Input
              name="name"
              value={newReview.name}
              onChange={(e) =>
                setNewReview((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              placeholder={t("your_name")}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{t('email')}</FormLabel>
            <Input
              name="email"
              value={newReview.email}
              onChange={(e) =>
                setNewReview((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder={t('your_email')}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{t('stars')}</FormLabel>
            <HStack>
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  as={FaStar}
                  key={i}
                  boxSize={6}
                  cursor="pointer"
                  color={i < newReview.stars ? "yellow.400" : "gray.300"}
                  onClick={() => handleStarClick(i + 1)}
                />
              ))}
            </HStack>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{t("message")}</FormLabel>
            <Textarea
              name="message"
              value={newReview.message}
              onChange={(e) =>
                setNewReview((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              placeholder={t("your_message")}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            {t('submit')}
          </Button>
        </VStack>
      </form>
    </Box>

  );
}

export default ReviewForm;
