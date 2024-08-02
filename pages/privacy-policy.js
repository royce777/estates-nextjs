// pages/privacy-policy.js
import { Center, Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const PrivacyPolicy = () => {
  const { t } = useTranslation('privacyPolicy');

  return (
    <Center>
      <Box p={5} maxWidth="1000px">
        <Heading as="h1" mb={4} pt="100px">
          {t("privacyPolicy")}
        </Heading>
        <Text mb={2}>{t("effectiveDate")} 30/07/2024</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("introduction")}
        </Heading>
        <Text mb={4}>{t("introductionText")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("infoWeCollect")}
        </Heading>
        <Text mb={2}>{t("infoWeCollectIntro")}</Text>
        <List mb={4}>
          <ListItem>{t("name")}</ListItem>
          <ListItem>{t("email")}</ListItem>
          <ListItem>{t("phone")}</ListItem>
        </List>

        <Heading as="h2" size="md" mb={2}>
          {t("useOfInfo")}
        </Heading>
        <Text mb={2}>{t("useOfInfoText")}</Text>
        <List mb={4}>
          <ListItem>{t("useOfInfoPoint1")}</ListItem>
          <ListItem>{t("useOfInfoPoint2")}</ListItem>
        </List>

        <Heading as="h2" size="md" mb={2}>
          {t("cookies")}
        </Heading>
        <Text mb={4}>{t("cookiesText")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("dataProtection")}
        </Heading>
        <Text mb={4}>{t("dataProtectionText")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("sharingInfo")}
        </Heading>
        <Text mb={4}>{t("sharingInfoText")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("yourRights")}
        </Heading>
        <Text mb={2}>{t("yourRightsText")}</Text>
        <List mb={4}>
          <ListItem>{t("yourRightsPoint1")}</ListItem>
          <ListItem>{t("yourRightsPoint2")}</ListItem>
          <ListItem>{t("yourRightsPoint3")}</ListItem>
        </List>

        <Heading as="h2" size="md" mb={2}>
          {t("policyChanges")}
        </Heading>
        <Text mb={4}>{t("policyChangesText")}</Text>

        <Heading as="h2" size="md" mb={2}>
          {t("contactUs")}
        </Heading>
        <Text mb={4}>{t("contactUsText")} stasulalesa@gmail.com</Text>

        <Text mb={4}>{t("consent")}</Text>
      </Box>

    </Center>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['privacyPolicy']),
  },
});

export default PrivacyPolicy;
