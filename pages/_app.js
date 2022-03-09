import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
