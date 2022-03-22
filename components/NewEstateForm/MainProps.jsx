import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Select,
  SimpleGrid,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useState } from "react";

export default function MainPropsForm({handleMainPropsChange}){
    return(
    <>
      <SimpleGrid
        minChildWidth="120px"
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
        paddingTop="40px"
        paddingBottom="20px"
      >
        <FormControl>
          <FormLabel htmlFor="name">Property name</FormLabel>
          <Input name="name" onChange={handleMainPropsChange}/>
          <FormHelperText>Main name.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref_id">Reference ID</FormLabel>
          <Input name="ref_id" onChange={handleMainPropsChange}/>
          <FormHelperText>REF-ID.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location">Location</FormLabel>
          <Select name="location" onChange={handleMainPropsChange}>
            <option value="Forte dei Marmi">Forte dei Marmi</option>
            <option value="Pietrasanta">Pietrasanta</option>
          </Select>
          <FormHelperText>City/town.</FormHelperText>
        </FormControl>
      </SimpleGrid>
      <SimpleGrid
        minChildWidth="120px"
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
        paddingBottom="40px"
      >
        <Box>
          <FormControl>
            <FormLabel htmlFor="area">Area</FormLabel>
            <NumberInput max={10000} min={1}>
              <NumberInputField name="area" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>House area(sq.m)</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="rooms">Rooms</FormLabel>
            <NumberInput max={40} min={1}>
              <NumberInputField name="rooms" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText> # of rooms.</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="bedrooms">Bedrooms</FormLabel>
            <NumberInput max={40} min={1}>
              <NumberInputField name="bedrooms" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>bedrooms.</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="bathrooms">Bathrooms</FormLabel>
            <NumberInput max={40} min={1}>
              <NumberInputField name="bathrooms" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>bathrooms.</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="garden_area">Garden</FormLabel>
            <NumberInput max={30000} min={1}>
              <NumberInputField name="garden_area" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>area sq.m</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="beds">Beds</FormLabel>
            <NumberInput max={100} min={1}>
              <NumberInputField name="beds" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>Beds</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="energy_class">E-class</FormLabel>
            <Select name="energy_class" onChange={handleMainPropsChange}>
              <option value="A4">A4</option>
              <option value="A3">A3</option>
              <option value="A2">A2</option>
              <option value="A1">A1</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </Select>
            <FormHelperText>A/B/C..</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="sea_dist">Beach</FormLabel>
            <NumberInput max={5000} min={1}>
              <NumberInputField name="sea_dist" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>Distance in m</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="listing_type">Listing</FormLabel>
            <Select name="listing_type" onChange={handleMainPropsChange}>
              <option value="rent">Rent</option>
              <option value="sell">Sell</option>
              <option value="both">Both</option>
            </Select>
            <FormHelperText>sell/rent</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="build_year">Build</FormLabel>
            <NumberInput max={2023} min={-1}>
              <NumberInputField name="build_year" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>year</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="floors">Floors</FormLabel>
            <NumberInput max={10} min={1}>
              <NumberInputField name="floors" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>floors</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="price">Price</FormLabel>
            <NumberInput max={999999999} min={1}>
              <NumberInputField name="price" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>Euro</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="m_rate">Rate</FormLabel>
            <NumberInput max={999999999} min={1}>
              <NumberInputField name="m_rate" onChange={handleMainPropsChange}/>
            </NumberInput>
            <FormHelperText>Euro/month</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Select name="category" onChange={handleMainPropsChange}>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="bifamiliar">Bifamiliar</option>
              <option value="rustic">Rustic</option>
              <option value="detached">Detached</option>
            </Select>
            <FormHelperText>House cat.</FormHelperText>
          </FormControl>
        </Box>
      </SimpleGrid>
      </>
    )
}