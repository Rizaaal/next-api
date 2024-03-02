import Head from "next/head";
import Image from "next/image";
import { getData } from "./api/products";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

console.log(process.env.NEXT_PUBLIC_URL);


export const getServerSideProps = ( async () => {
  const products: Product[] = await getData();
  return { props: { products } };
})


export default function Home({ products }: { products: Product[] }) {
  return (
    <>
      <Head>
        <title>next api</title>
        <meta name="description" content="esercizio next API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <ul className={styles.grid}>
          {products.map((product: Product) => (
            <li key={product.id}>
              <div className={styles.card}>
                <h2 style={{ height: '180px' }}>{product.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
