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
            <EstateCard estate={property} />
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

export async function getServerSideProps({ query }) {
  const listingType = query.listing_type || "";
  const location = query.location || "Forte dei Marmi";
  const bedrooms = query.bedrooms || "0";
  const bathrooms = query.bathrooms || "0";
  const beds = query.beds || "0";
  const seaDist = query.sea_dist || "100000";
  const area = query.area || "0";
  const category = query.category || "";
  const minPrice = query.minPrice || "";
  const maxPrice = query.maxPrice || "";

  const data = await fetchApi(
    `${baseUrl}/search?listing_type=${listingType}&location=${location}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&beds=${beds}&sea_dist=${seaDist}&area=${area}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  );

  // TODO: Remove this test code
  let authorized = true;
  if (data.status === 401) {
    authorized = false;
  }

  console.log("DATA: ");
  console.log(data);
  return {
    props: {
      authorized: authorized,
      properties: data.estates || [],
    },
  };
}
