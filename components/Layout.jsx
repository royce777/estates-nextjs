import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box m='auto'>
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
        <footer>
        </footer>
      </Box>
    </>
  );
}