import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import MySlider from "../components/MySlider/MySlider";

export default function Home() {
  return (
    <Box>
      <MySlider />
    </Box>
  );
}
