import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { UserProvider } from "../context/UserContext"; // Import UserProvider
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <UserProvider>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </UserProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
