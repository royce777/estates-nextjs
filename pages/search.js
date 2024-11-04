import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { MdCompress } from "react-icons/md";
import EstateCard from "../components/EstateCard/EstateCard";
import SearchFilters from "../components/SearchFilters";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import noresult from "../public/images/noresult.svg";
import { useUser } from "../context/UserContext";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('search');


  return (
    <Box paddingTop="70px">
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="bold"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>{t('search_filters')}</Text>
        <Icon paddingLeft="2" w="7" as={MdCompress} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Flex
        justifyContent="center"
        alignItems="center">
        <Text fontSize="2xl" p="4" fontWeight="bold">
          {t('properties')}
        </Text>
      </Flex>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
      >
        {properties.map((property, index) => (
          <Flex
            key={index}
            justifyContent="center"
            paddingRight="5"
            paddingLeft="5"
            paddingBottom="8"
          >
            <EstateCard property={property} />
          </Flex>
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image src={noresult} />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const params = {
    listing_type: context.query.listing_type || "",
    location: context.query.location || "",
    bedrooms: context.query.bedrooms || "",
    bathrooms: context.query.bathrooms || "",
    beds: context.query.beds || "",
    sea_dist: context.query.sea_dist || "",
    area: context.query.area || "",
    category: context.query.category || "",
    minPrice: context.query.minPrice || "",
    maxPrice: context.query.maxPrice || ""
  };

  // Filter out empty parameters and construct the query string
  const queryString = Object.entries(params)
    .filter(([key, value]) => value !== "")  // Remove empty values
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");

  const searchUrl = queryString !== '' ? `${baseUrl}/search?${queryString}` : `${baseUrl}/search`

  const data = await fetchApi(
    searchUrl,
    context.req.cookies.access_token_cookie
  );

  const translations = await serverSideTranslations(context.locale, ['search']);

  //console.log("DATA: ");
  //console.log(data);
  return {
    props: {
      properties: data.estates || [],
      ...translations
    },
  };
}
