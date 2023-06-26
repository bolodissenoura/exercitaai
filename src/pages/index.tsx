import Head from "next/head";
import * as S from "../styles/pages/home";
import camIco from "../../public/assets/camIco.svg";
import sendIco from "../../public/assets/sendIco.svg";
import labelImg from "../../public/assets/labelImg.svg";
import brazilFlag from "../../public/assets/brazilFlag.svg";
import fuvest from "../../public/assets/institutions/fuvest.svg";
import espex from "../../public/assets/institutions/espex.svg";
import ita from "../../public/assets/institutions/ita.svg";
import mackenzie from "../../public/assets/institutions/mackenzie.svg";
import oab from "../../public/assets/institutions/oab.svg";
import pf from "../../public/assets/institutions/pf.svg";
import puc from "../../public/assets/institutions/puc.svg";
import unesp from "../../public/assets/institutions/unesp.svg";
import unicamp from "../../public/assets/institutions/unicamp.svg";
import enem from "../../public/assets/institutions/enem.svg";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { TypographyV1, TypographyV2, TypographyV3 } from "@/styles/typography";
import { CTABtn, PrimaryBtn } from "@/styles/buttons";
import { subjects } from "@/utils/fakeData";

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
      spacing: 16,
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
              #1 IA desenvolvida para resolução de questões de provas
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
        <S.NewSection>
          <S.NewSectionText>
            <TypographyV2>Já são milhares de questões resolvidas</TypographyV2>
            <TypographyV1>De diversas matérias</TypographyV1>
          </S.NewSectionText>
          <S.BoxPurple ref={sliderRef} className="keen-slider">
            {subjects?.map((item) => (
              <>
                <S.ItemCaroussel key={item.name} className="keen-slider__slide">
                  <Image src={item.icon} alt={`${item.name} icon`} width={50} />
                  <TypographyV2>{item.name}</TypographyV2>
                </S.ItemCaroussel>
              </>
            ))}
          </S.BoxPurple>
        </S.NewSection>
        <S.NewSection>
          <S.NewSectionText>
            <div>
              <TypographyV2
                style={{
                  background:
                    "linear-gradient(to right, #039736, #FECE40, #4D90FF 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                Treinada com diversos conteúdos e materiais Brasiliero
              </TypographyV2>
              <Image src={brazilFlag} alt="brazil flag" />
            </div>
          </S.NewSectionText>
          <S.NewSectionExplanation>
            <TypographyV1 className="text-box" style={{ color: "white" }}>
              Nossa IA fornece respostas precisas e confiáveis para suas
              questões de provas. <br />
              <br />
              <TypographyV1>
                Treinada com diversos dados de provas, incluindo vestibulares,
                concursos públicos e o ENEM.
              </TypographyV1>
              <br />
              Simplifique sua preparação, impulsionando seu desempenho e
              oferecendo uma vantagem competitiva.
              <br />
              <br />
              <br />
              <br />
            </TypographyV1>
            <Image className="img" src={labelImg} alt="Label img" />
          </S.NewSectionExplanation>
        </S.NewSection>
        <S.InstitutionsSection>
          <S.InstitutionsGroup>
            <Image src={enem} alt="enem logo" />
            <Image src={unicamp} alt="unicamp logo" />
            <Image src={unesp} alt="unesp logo" />
            <Image src={puc} alt="puc logo" />
            <Image src={pf} alt="pf logo" />
          </S.InstitutionsGroup>
          <S.InstitutionsGroup>
            <Image src={oab} alt="oab logo" />
            <Image src={mackenzie} alt="mackenzie logo" />
            <Image src={ita} alt="ita logo" />
            <Image src={espex} alt="espex logo" />
            <Image src={fuvest} alt="fuvest logo" />
          </S.InstitutionsGroup>
        </S.InstitutionsSection>
        <S.NewSection>
          <S.BoxCTA>
            <TypographyV2 style={{ color: "white" }}>
              Garanta um descontão de <br /> 20% em nosso lançamento
            </TypographyV2>
            <br />
            <TypographyV1 style={{ color: "white", fontWeight: "300" }}>
              Nossa plataforma está sendo desenvolvida <br /> e estará
              disponível em breve
            </TypographyV1>
            <S.InputBox onSubmit={() => console.log("sexo")}>
              <input placeholder="Seu melhor e-mail" type="email" />
              <CTABtn type="submit">Garantir desconto</CTABtn>
            </S.InputBox>
            <br />
          </S.BoxCTA>
        </S.NewSection>
        <br />
        <br />
        <br />
        <br />
        <br />
      </S.HomeContainer>
    </>
  );
}
