import {
  FormControl,
  FormLabel,
  Box,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import Tiptap from '../RichEditor/Tiptap'
import { useState } from "react";

export default function DescriptionsForm({handleDescriptionsChange}){

  
    return(
      <SimpleGrid
        spacing={10}
        marginBottom={10}
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
        <Box marginY="30px">
          <FormControl>
            <FormLabel htmlFor="descr-en">Description-EN</FormLabel>
            <Tiptap
              placeholder="Insert description in English."
              name="descr-en"
              handleUpdate={handleDescriptionsChange}
            ></Tiptap>
          </FormControl>
        </Box>
        <Box marginY="30px">
          <FormControl>
            <FormLabel htmlFor="descr-ru">Description-RUS</FormLabel>
            <Tiptap
              placeholder="Insert description in Russian."
              name="descr-ru"
              handleUpdate={handleDescriptionsChange}
            ></Tiptap>
          </FormControl>
        </Box>
        <Box marginY="30px">
          <FormControl>
            <FormLabel htmlFor="descr-it">Description-ITA</FormLabel>
            <Tiptap
              placeholder="Insert description in Italian."
              name="descr-it"
              handleUpdate={handleDescriptionsChange}
            ></Tiptap>
          </FormControl>
        </Box>
        <Box marginY="30px">
          <FormControl>
            <FormLabel htmlFor="descr-uk">Description-UKR</FormLabel>
            <Tiptap
              placeholder="Insert description in Ukrainian."
              name="descr-uk"
              handleUpdate={handleDescriptionsChange}
            ></Tiptap>
          </FormControl>
        </Box>
      </SimpleGrid>
    )
}
