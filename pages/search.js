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

const Search = ({ authorized, properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  const { isAdmin, setIsAdmin } = useUser();
  console.log(properties);
  console.log("Authorized: ", authorized);
  useEffect(() => {
    if (!authorized) {
      setIsAdmin(false);
      localStorage.setItem('isAdmin', false);
    }
  }, [authorized]);

  return (
    <Box paddingTop="70px">
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={MdCompress} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        paddingRight="50"
        paddingLeft="50"
      >
        {properties.map((property, index) => (
          <Flex
            key={index}
            justifyContent="center"
            paddingRight="10"
            paddingLeft="10"
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
  const listingType = context.query.listing_type || "";
  const location = context.query.location || "Forte dei Marmi";
  const bedrooms = context.query.bedrooms || "0";
  const bathrooms = context.query.bathrooms || "0";
  const beds = context.query.beds || "0";
  const seaDist = context.query.sea_dist || "100000";
  const area = context.query.area || "0";
  const category = context.query.category || "";
  const minPrice = context.query.minPrice || "";
  const maxPrice = context.query.maxPrice || "";

  const data = await fetchApi(
    `${baseUrl}/search?listing_type=${listingType}&location=${location}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&beds=${beds}&sea_dist=${seaDist}&area=${area}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
    context.req.cookies.access_token_cookie
  );

  // TODO: Remove this test code
  let authorized = true;
  if (data.status === 401) {
    authorized = false;
  }

  //console.log("DATA: ");
  //console.log(data);
  return {
    props: {
      authorized: authorized,
      properties: data.estates || [],
    },
  };
}
