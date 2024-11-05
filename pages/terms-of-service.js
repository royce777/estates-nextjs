import { Center, Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";



const TermsOfService = () => {
  const { t } = useTranslation('terms');

  return (
    <Center>
      <Box p={5} maxWidth="1000px">
        <Heading as="h1" mb={4} pt="100px">
          {t("title")}
        </Heading>

        <Heading as="h2" size="md" mb={2}>
          {t("acceptance.title")}
        </Heading>
        <Text mb={4}>{t("acceptance.content")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("servicesProvided.title")}
        </Heading>
        <Text mb={4}>{t("servicesProvided.content")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("userResponsibilities.title")}
        </Heading>
        <Text mb={4}>{t("userResponsibilities.content")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("intellectualProperty.title")}
        </Heading>
        <Text mb={4}>{t("intellectualProperty.content")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("limitationsOfLiability.title")}
        </Heading>
        <Text mb={4}>{t("limitationsOfLiability.content")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("links.title")}
        </Heading>
        <Text mb={4}>{t("links.content")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("changes.title")}
        </Heading>
        <Text mb={4}>{t("changes.content")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("governingLaw.title")}
        </Heading>
        <Text mb={4}>{t("governingLaw.content")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("contactUs.title")}
        </Heading>
        <Text mb={4}>{t("contactUs.content")}</Text>
      </Box>
    </Center>
 );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['terms']),
  },
});

export default TermsOfService;
