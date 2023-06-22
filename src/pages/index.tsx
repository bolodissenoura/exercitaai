import Head from "next/head";
import * as S from "../styles/pages/home";
import camIco from "../../public/assets/camIco.svg";
import sendIco from "../../public/assets/sendIco.svg";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import {
  TextMD,
  TypographyV1,
  TypographyV2,
  TypographyV3,
} from "@/styles/typography";
import { PrimaryBtn } from "@/styles/buttons";

export default function Home() {
  const animation = { duration: 80000, easing: (t: number) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 1,
      spacing: 32,
    },
    breakpoints: {
      "(min-width: 800px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  });
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
        <S.HomeContainerFlex>
          <S.TextGridContainer>
            <TypographyV1>
              #1 IA desenvolvida para resolução de questões de provas pensado
              100% em brasileiros 🇧🇷
            </TypographyV1>
            <TypographyV2 style={{ marginTop: "1.25rem" }}>
              A resposta para todas <br /> as suas perguntas <br /> está a um
              clique <br /> de distância!
            </TypographyV2>
            <PrimaryBtn>Testar agora</PrimaryBtn>
          </S.TextGridContainer>
          <S.BoxGridContainer>
            <S.Box>
              <S.WhiteBox>
                <form
                  style={{
                    margin: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "80%",
                  }}>
                  <TypographyV3
                    style={{
                      color: "rgba(126, 126, 126, 1)",
                    }}>
                    Capture ✨qualquer✨ exercício com sua câmera ou digite-o
                    aqui e veja a mágica acontecer.
                  </TypographyV3>
                  <div
                    style={{
                      display: "flex",
                    }}>
                    <S.ButtonCamera onClick={() => alert("abrir camera")}>
                      <Image style={{ marginRight: 6 }} src={camIco} alt="" />
                    </S.ButtonCamera>
                    <S.InputQuest />
                    <S.ButtonSend type="submit">
                      <Image style={{ marginRight: 6 }} src={sendIco} alt="" />
                    </S.ButtonSend>
                  </div>
                </form>
              </S.WhiteBox>
            </S.Box>
          </S.BoxGridContainer>
        </S.HomeContainerFlex>
        <S.SectionCaroussel>
          <S.SectionCarousselText>
            <TypographyV2>Já são milhares de questões resolvidas</TypographyV2>
            <TypographyV1>De diversas matérias</TypographyV1>
          </S.SectionCarousselText>
          <S.BoxCaroussel ref={sliderRef} className="keen-slider">
            <S.ItemCaroussel className="keen-slider__slide">oi</S.ItemCaroussel>
            <S.ItemCaroussel className="keen-slider__slide">oi</S.ItemCaroussel>
            <S.ItemCaroussel className="keen-slider__slide">oi</S.ItemCaroussel>
            <S.ItemCaroussel className="keen-slider__slide">oi</S.ItemCaroussel>
            <S.ItemCaroussel className="keen-slider__slide">oi</S.ItemCaroussel>
            <S.ItemCaroussel className="keen-slider__slide">oi</S.ItemCaroussel>
          </S.BoxCaroussel>
        </S.SectionCaroussel>
      </S.HomeContainer>
    </>
  );
}
