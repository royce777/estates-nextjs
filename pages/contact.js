import {
  Textarea, Center, Box, Button,
  FormControl, FormLabel, Input, SimpleGrid,
  Text, HStack, Icon, VStack, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { postApiContact, baseUrl } from "../utils/fetchApi";


export default function Contact() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const toast = useToast();

  const validate = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    const phoneRegex = /^[+]?[0-9]*$/;
    if (!phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone can only contain + and numeric characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is not valid";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
  };

  const cleanUpForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  }

  const handleContact = async (event) => {
    event.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      // No errors, submit the form
      // form submission logic here
      const formData = {
        name: name,
        phone: phone,
        email: email,
        message: message
      }
      const result = await postApiContact(baseUrl + "/contact", formData);
      if (result && result.status === 200) {
        cleanUpForm();
        toast({
          title: 'Success',
          description: "Data sent!",
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
        })
      }
    } else {
      setErrors(errors);
    }
  }

  return (
    <Box paddingTop="100px">
      <Center>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" maxWidth="1000px">
          <Box padding={{ base: "10px" }}>
            <Text fontSize="xl" fontWeight="semibold">Contact Details</Text>
            <VStack marginTop="30px" align="baselin" spacing="30px">
              <HStack spacing="15px">
                <Icon as={FaMapMarkerAlt} boxSize="8" />
                <Text fontSize="md">Forte dei Marmi, (LU)</Text>
              </HStack>
              <HStack spacing="15px">
                <Icon as={FaEnvelope} boxSize="8" />
                <Text>stasulalesa@gmail.com</Text>
              </HStack>
              <HStack spacing="15px">
                <Icon as={FaPhone} boxSize="8" />
                <Text>+39 334-1407445</Text>
              </HStack>
            </VStack>
          </Box>
          <Box padding={{ base: "10px" }}>
            <Text fontSize="xl" fontWeight="semibold">Request info</Text>
            <form onSubmit={handleContact}>
              <FormControl width={{ base: "350px", sm: "400px" }} padding={{ base: "10px" }}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input value={name} isInvalid={errors.name} name="name" onChange={handleNameChange} />
                {errors.name && <Text color="red.500">{errors.name}</Text>}
              </FormControl>
              <FormControl padding={{ base: "10px" }}>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <Input value={phone} isInvalid={errors.phone} name="phone" onChange={handlePhoneChange} />
                {errors.phone && <Text color="red.500">{errors.phone}</Text>}
              </FormControl>
              <FormControl padding={{ base: "10px" }}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input value={email} isInvalid={errors.email} name="email" onChange={handleEmailChange} />
                {errors.email && <Text color="red.500">{errors.email}</Text>}
              </FormControl>
              <FormControl padding={{ base: "10px" }}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea value={message} isInvalid={errors.message} name="message" onChange={handleMessageChange} />
                {errors.message && <Text color="red.500">{errors.message}</Text>}
              </FormControl>
              <Center>
                <Button width={{ base: "100%" }} type="submit">Send</Button>
              </Center>
            </form>
          </Box>
        </SimpleGrid>
      </Center>
    </Box>
  );
}
