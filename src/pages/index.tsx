import Head from "next/head";
import { HomeContainer } from "../styles/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Exercita.ai</title>
        <meta name="description" content="📚Soluções instantâneas e precisas com apenas um clique 📸." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
      </HomeContainer>
    </>
  );
}
