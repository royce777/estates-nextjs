import { Box, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { MdCheckCircleOutline } from "react-icons/md";


export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
};

const About = () => {
  const { t } = useTranslation("about");

  return (
    <Box padding="4" maxWidth="800px" margin="auto">
      <Heading as="h1" size="lg" mb="6" mt="20">
        {t("title")}
      </Heading>
      <Text mb="4">{t("description1")}</Text>
      <Text mb="4">{t("description2")}</Text>
      <Text mb="4">{t("description3")}</Text>
      <Text mb="4">{t("description4")}</Text>
      <Text mb="4">{t("description5")}</Text>

      <Heading as="h2" size="lg" mt="6" mb="4">
        {t("services_title")}
      </Heading>
      <List spacing="3">
        {t("services_list", { returnObjects: true }).map((service, index) => (
          <ListItem key={index}>
            <ListIcon as={MdCheckCircleOutline} color='green.500' />
            {service}
          </ListItem>
        ))}
      </List>

      <Text mt="6">{t("conclusion")}</Text>
    </Box>
  );
};

export default About;
