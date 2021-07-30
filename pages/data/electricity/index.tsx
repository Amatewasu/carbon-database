import Head from 'next/head';
import Image, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image';
import { ExternalLink } from 'react-feather';
import { ElectricityData, getElectricityData } from '../../../lib/electricity';
import { getFlag } from '../../../lib/flags';
import styles from '../../../styles/Home.module.css';

const countryFlagLoader: ImageLoader = ({ src }: ImageLoaderProps): string => {
    return `/img/country-flags/${(src as string).toUpperCase()}`
  };

export default function ElectricityPage({ allElectricityData }: { allElectricityData: ElectricityData[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>⚡ Electricity</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            ⚡ Electricity
        </h1>

        <p className={styles.description}>
          find the kWh emission factor
        </p>

        <div className={styles.grid}>
          {allElectricityData.map((electricityData) => {
            return (
              <a key={electricityData.id} href="#" className={styles.card}>
              <h2>
                <span className="country-icon-container">
                  <Image src={getFlag(electricityData.country)} width={20} height={20*1.5} alt={`${electricityData.country} flag`} layout="fixed" className="country-icon" />
                </span>
{ electricityData.title }</h2>
              
              <p>
                { electricityData.value } { electricityData.unit }
                <a className="source-data" href={electricityData.link.href} target="_blank">
                  <ExternalLink size={24} />
                </a>
              </p>
          </a>);
          })}
        </div>

        <pre style={{ display: 'none' }}>
        {JSON.stringify(allElectricityData, null, 2)}
        </pre>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute{' '}
          <span className={styles.logo}>
            <Image src="/GitHub-Mark-32px.png" alt="Github Logo" width={32} height={32} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
    const allElectricityData = getElectricityData();

    return {
        props: {
            allElectricityData
        }
    };
}