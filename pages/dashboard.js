import { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Button,
  VStack,
  Input,
  Textarea,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast
} from "@chakra-ui/react";
import { fetchApi, putApi, deleteApi, baseUrl } from '../utils/fetchApi';

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.access_token_cookie
  const data = await fetchApi(`${baseUrl}/reviews/get-all`, token);
  return {
    props: {
      reviews : data ? data.reviews :  []
    },
  };
};

const AdminDashboard = ({ reviews }) => {
  const [properties, setProperties] = useState([
    { id: 1, title: "Luxury Villa", description: "A beautiful villa with ocean view.", price: "$1,000,000" },
    { id: 2, title: "Cozy Apartment", description: "A modern apartment in the city center.", price: "$500,000" },
  ]);

  const [allReviews, setReviews] = useState(reviews);

  const toast = useToast();

  const handlePropertyUpdate = (id, field, value) => {
    setProperties((prev) =>
      prev.map((property) =>
        property.id === id ? { ...property, [field]: value } : property
      )
    );
  };

  const handleReviewSave = async (review) => {
    const result = await putApi(baseUrl + `/review/${review.id}`, review, true);
    if (result && result.status === 200) {
      toast({
        title: 'Success',
        description: "Review saved!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
    else {
      toast({
        title: 'Error',
        description: "Try again!",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  const handleReviewDelete = async (id) => {
    const result = await deleteApi(baseUrl + `/review/${id}`, true);
    if (result && result.status === 200) {
      toast({
        title: 'Success',
        description: "Review deleted!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
    }
    else {
      toast({
        title: 'Error',
        description: "Try again!",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  const handleReviewUpdate = (id, field, value) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, [field]: value } : review
      )
    );
  };

  return (
    <Box p={8} maxWidth={{base:'100%'}} marginTop="70px" marginX="auto" >
      <Heading mb={6}>Admin Dashboard</Heading>
      <Tabs isFitted>
        <TabList maxWidth={{base:'200px', sm:'400px', md:'600px', lg:'1000px'}}>
          <Tab>Manage Properties</Tab>
          <Tab>Manage Reviews</Tab>
        </TabList>
        <TabPanels>
          {/* Properties Tab */}
          <TabPanel>
            <VStack align="stretch" spacing={6}>
              {properties.map((property) => (
                <Box key={property.id} p={4} borderWidth="1px" borderRadius="md">
                  <Heading size="md">Property ID: {property.id}</Heading>
                  <Input
                    mt={2}
                    placeholder="Title"
                    value={property.title}
                    onChange={(e) =>
                      handlePropertyUpdate(property.id, "title", e.target.value)
                    }
                  />
                  <Textarea
                    mt={2}
                    placeholder="Description"
                    value={property.description}
                    onChange={(e) =>
                      handlePropertyUpdate(property.id, "description", e.target.value)
                    }
                  />
                  <Input
                    mt={2}
                    placeholder="Price"
                    value={property.price}
                    onChange={(e) =>
                      handlePropertyUpdate(property.id, "price", e.target.value)
                    }
                  />
                  <Button mt={4} colorScheme="blue">
                    Save Changes
                  </Button>
                </Box>
              ))}
            </VStack>
          </TabPanel>

          {/* Reviews Tab */}
          <TabPanel>
            <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Comment</Th>
                  <Th>Stars</Th>
                  <Th>Approved</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {allReviews.map((review) => (
                  <Tr key={review.id}>
                    <Td>{review.id}</Td>
                    <Td>
                      <Input
                        width="200px"
                        value={review.name}
                        onChange={(e) =>
                          handleReviewUpdate(review.id, "name", e.target.value)
                        }
                      />
                    </Td>
                    <Td>
                      <Textarea
                        width="300px"
                        value={review.message}
                        onChange={(e) =>
                          handleReviewUpdate(review.id, "message", e.target.value)
                        }
                      />
                    </Td>
                    <Td>
                      <Input
                        width="50px"
                        value={review.stars}
                        onChange={(e) =>
                          handleReviewUpdate(review.id, "stars", e.target.value)
                        }
                        type="number"
                        max={5}
                        min={1}
                      />
                    </Td>
                    <Td>
                      <Checkbox
                        isChecked={review.approved}
                        onChange={(e) =>
                          handleReviewUpdate(review.id, "approved", e.target.checked)
                        }
                      />
                    </Td>
                    <Td>
                      <VStack>
                        <Button 
                          colorScheme="blue"
                          size="sm"
                          onClick={() => handleReviewSave(review)}
                        >
                          Save
                        </Button>
                        <Button 
                          colorScheme="red"
                          size="sm"
                          onClick={() => handleReviewDelete(review.id)}
                        >
                          Delete 
                        </Button>
                      </VStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AdminDashboard;

