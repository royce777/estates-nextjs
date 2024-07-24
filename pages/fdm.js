import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from '../styles/fdm.module.css';
import {
  Textarea, Center, Box, Button,
  FormControl, FormLabel, Input, SimpleGrid,
  Text, HStack, Icon, VStack, useToast, Image
} from "@chakra-ui/react";

const FDM = () => {
  const { t } = useTranslation('fdm');

  return (
    <>
      <Center>
        <Box paddingTop="100px" maxWidth="1000px">
          <Center>
            <Text fontSize="25px" fontWeight="bold">{t('title')}</Text>
          </Center>

          <Text padding="15px" fontSize="18px" fontWeight="semibold" fontStyle="italic">{t('historicalFacts')}</Text>

          <Center>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" maxWidth="1000px">
              <Center>
                <Text padding="15px">
                  {t('historicalContent')}
                </Text>
              </Center>
              <Center padding="15px">
                <Image src="/images/forte_old.png" height={{ base: "400px", md: "300px" }} objectFit='cover'></Image>
              </Center>
            </SimpleGrid>
          </Center>

          <Text padding="15px" fontSize="18px" fontWeight="semibold" fontStyle="italic">{t('mainAttractions')}</Text>

          <Center>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" maxWidth="1000px">
              <Center>
                <Text padding="15px">
                  {t('attractionsContent')}
                </Text>
              </Center>
              <Center padding="15px">
                <Image src="/images/forte1.jpg" height={{ base: "400px", md: "300px" }} objectFit='cover'></Image>
              </Center>
            </SimpleGrid>
          </Center>

          <Text padding="15px" fontSize="18px" fontWeight="semibold" fontStyle="italic">{t('landscapeFeatures')}</Text>

          <Center>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" maxWidth="1000px">
              <Center>
                <Text padding="15px">
                  {t('landscapeContent')}
                </Text>
              </Center>
              <Center padding="15px">
                <Image src="/images/forte2.jpg" height={{ base: "400px", md: "300px" }} objectFit='cover'></Image>
              </Center>
            </SimpleGrid>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['fdm']),
  },
});

export default FDM;
