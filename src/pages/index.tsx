import Head from "next/head";
import * as S from "../styles/pages/home";
import bgImg from "../../public/assets/bg-img.png";
import Image from "next/image";
import { TextMD, TypographyV1, TypographyV2 } from "@/styles/typography";
import { PrimaryBtn } from "@/styles/buttons";

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
          <PrimaryBtn style={{ margin: "0 auto" }}>Testar agora</PrimaryBtn>
        </S.TextGridContainer>
        <S.ImageGridContainer>
          <Image
            className="img"
            src={bgImg}
            height={350}
            width={350}
            alt="logo img"
          />
        </S.ImageGridContainer>
      </S.HomeContainer>
    </>
  );
}
