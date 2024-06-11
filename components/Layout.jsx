import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HarmonyHome</title>
      </Head>
      <Flex direction="column" minH="100vh">
        <header>
          <Navbar/>
        </header>
        <Flex as="main" flex="1" direction="column">
          {children}
        </Flex>
        <footer>
          <Footer/>
        </footer>
      </Flex>
    </>
  );
}