import Head from "next/head";
import { HomeContainer } from "../styles/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buuk - Venda e compre e-books</title>
        <meta name="description" content="📚Book store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
      </HomeContainer>
    </>
  );
}
