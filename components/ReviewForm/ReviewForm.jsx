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

const ReviewForm = ({ onSubmit, url }) => {
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
        Add a Review
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={newReview.name}
              onChange={(e) =>
                setNewReview((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              placeholder="Your name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              value={newReview.email}
              onChange={(e) =>
                setNewReview((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder="Your email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Stars</FormLabel>
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
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={newReview.message}
              onChange={(e) =>
                setNewReview((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              placeholder="Your review"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>

  );
}

export default ReviewForm;
