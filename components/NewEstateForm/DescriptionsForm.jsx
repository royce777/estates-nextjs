import {
  FormControl,
  FormLabel,
  Box,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export default function DescriptionsForm({handleDescriptionsChange}){

  
    return(
      <SimpleGrid
        spacing={10}
        paddingRight={{
          base: "40px",
          sm: "50px",
          md: "100px",
          lg: "200px",
          xl: "300px",
        }}
        paddingLeft={{
          base: "40px",
          sm: "50px",
          md: "100px",
          lg: "200px",
          xl: "300px",
        }}
        columns={{sm: 1, md: 1, lg: 2}}
      >
        <Box>
          <FormControl>
            <FormLabel htmlFor="descr-en">Description-EN</FormLabel>
            <Textarea
              height="200px"
              placeholder="Insert description in English."
              name="descr-en"
              onBlur={handleDescriptionsChange}
            ></Textarea>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="descr-ru">Description-RUS</FormLabel>
            <Textarea
              height="200px"
              placeholder="Insert description in Russian."
              name="descr-ru"
              onBlur={handleDescriptionsChange}
            ></Textarea>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="descr-it">Description-ITA</FormLabel>
            <Textarea
              height="200px"
              placeholder="Insert description in Italian."
              name="descr-it"
              onBlur={handleDescriptionsChange}
            ></Textarea>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="descr-uk">Description-UKR</FormLabel>
            <Textarea
              height="200px"
              placeholder="Insert description in Ukrainian."
              name="descr-uk"
              onBlur={handleDescriptionsChange}
            ></Textarea>
          </FormControl>
        </Box>
      </SimpleGrid>
    )
}
