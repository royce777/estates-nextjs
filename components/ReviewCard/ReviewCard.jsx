import { Box, HStack, Text, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const ReviewCard = ({ review }) => {

  const [time, setTime] = useState("");

  useEffect(() => {
    console.log('review card useEffect');
    setTime(
      new Date(review.timestamp).toLocaleString()
    );
  }, [])

  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="sm"
      bg="gray.50"
    >
      <HStack justify="space-between">
        <Text fontWeight="bold">{review.name}</Text>
        <HStack>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              as={FaStar}
              key={i}
              color={i < review.stars ? "yellow.400" : "gray.300"}
            />
          ))}
        </HStack>
      </HStack>
      <Text mt={2} fontStyle="italic">
        {review.message}
      </Text>
      <Text fontSize="sm" mt={2} color="gray.500">
        {time}
      </Text>
    </Box>
  );
}

export default ReviewCard;
