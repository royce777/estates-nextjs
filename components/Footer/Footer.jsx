import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={8}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        maxW="6xl"
        mx="auto"
        px={{ base: '6', md: '0' }}
      >
        <Text fontSize="lg" fontWeight="bold">
          HarmonyHome
        </Text>
        <Text mt={{ base: 4, md: 0 }} textAlign={{ base: 'center', md: 'right' }}>
          © {new Date().getFullYear()} All rights reserved
        </Text>
        <Flex mt={{ base: 4, md: 0 }} direction="column" align={{ base: 'center', md: 'start' }}>
          <Link href="#">
            Terms of Service
          </Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="/login">Login</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
