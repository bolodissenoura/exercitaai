import Head from "next/head";
import * as S from "../styles/pages/home";
import { TextMD, TypographyV1, TypographyV2 } from "@/styles/typography";

export default function Home() {
  return (
    <>
      <Head>
        <title>Exercita.ai</title>
        <meta
          name="description"
          content="📚Soluções instantâneas e precisas com apenas um clique 📸."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.HomeContainer>
        <S.TextGridContainer>
          <TypographyV1>
            #1 IA desenvolvida para resolução de questões de provas pensado 100%
            em brasileiros 🇧🇷
          </TypographyV1>
          <TypographyV2>
            A resposta para todas <br /> as suas perguntas <br /> está a um
            clique <br /> de distância!
          </TypographyV2>
        </S.TextGridContainer>
        <S.TextGridContainer></S.TextGridContainer>
      </S.HomeContainer>
    </>
  );
}
