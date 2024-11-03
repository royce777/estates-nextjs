import { useEffect, useState, useRef } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaDeleteLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../public/images/noresult.svg';

export default function SearchFilters() {
  const paramsDef = {
    listing_type: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    beds: "",
    sea_dist: "",
    area: "",
    sort: "",
    category: "",
    minPrice: "",
    maxPrice: ""
  };
  const [params, setParams] = useState(paramsDef);
  const router = useRouter();

  const hasMounted = useRef(false);  // Track if the component has mounted

  // Sync params with URL query only on initial render
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;  // Set to true after the first render
      const { query } = router;

      // Create a new params object from the query parameters
      const newParams = { ...paramsDef };

      Object.keys(newParams).forEach((key) => {
        if (query[key]) {
          newParams[key] = query[key];
        }
      });

      setParams(newParams);  // Set the state based on URL parameters
    }
  }, [router.query]);  // This will run only once due to the hasMounted check

  // Update params state on select change
  const handleSelectChange = (name, value) => {
    setParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const resetParams = () => {
    setParams(paramsDef);
  }

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const query = {};

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query: query });
  };


  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filterData?.map((filter) => (
        <Box key={filter.queryName}>
          <Select 
            value={params[filter.queryName]}
            onChange={(e) => handleSelectChange(filter.queryName, e.target.value )} 
            placeholder={filter.placeholder[router.locale]} 
            w='fit-content' 
            p='2' >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name[router.locale]}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      <Flex width="100%" justifyContent="center" mt="4">
        <Button onClick={() => searchProperties(params)} mr="2" variant="outline">
          <FaSearch/>
        </Button>
        <Button onClick={() => resetParams()} variant="outline">
          <FaDeleteLeft/>
        </Button>
      </Flex>
    </Flex>
  );
}
