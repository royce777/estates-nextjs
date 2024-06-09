import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from '../styles/fdm.module.css';

const FDM = () => {
  const { t } = useTranslation('fdm');

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{t('title')}</h1>
      <section className={styles.section}>
        <h2 className={styles.subheader}>{t('historicalFacts')}</h2>
        <p>{t('historicalContent')}</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subheader}>{t('mainAttractions')}</h2>
        <p>{t('attractionsContent')}</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subheader}>{t('landscapeFeatures')}</h2>
        <p>{t('landscapeContent')}</p>
      </section>
      <div className={styles.images}>
        <Image src="/images/forte1.jpg" alt="Forte dei Marmi" width={600} height={400} />
        <Image src="/images/forte2.jpg" alt="Forte dei Marmi" width={600} height={400} />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['fdm']),
  },
});

export default FDM;
