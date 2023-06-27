import Head from "next/head";
import * as S from "../styles/pages/home";
import * as C from "../components";
// General Components
import { TypographyV1, TypographyV2, TypographyV3 } from "@/styles/typography";
import { CTABtn, PrimaryBtn } from "@/styles/buttons";
import { subjects } from "@/utils/fakeData";
// SVGS imgs
import Image from "next/image";
import camIco from "../../public/assets/camIco.svg";
import sendIco from "../../public/assets/sendIco.svg";
import labelImg from "../../public/assets/labelImg.svg";
import brazilFlag from "../../public/assets/brazilFlag.svg";
import fuvest from "../../public/assets/institutions/fuvest.svg";
import ita from "../../public/assets/institutions/ita.svg";
import mackenzie from "../../public/assets/institutions/mackenzie.svg";
import oab from "../../public/assets/institutions/oab.svg";
import pf from "../../public/assets/institutions/pf.svg";
import puc from "../../public/assets/institutions/puc.svg";
import unesp from "../../public/assets/institutions/unesp.svg";
import unicamp from "../../public/assets/institutions/unicamp.svg";
import enem from "../../public/assets/institutions/enem.svg";
import explicativa from "../../public/assets/explicativa.png";
import direta from "../../public/assets/direta.png";

// Keen Slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React from "react";

export default function Home() {
  const contentRef = React.useRef<HTMLDivElement | null>(null);

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
          perView: 4,
          spacing: 16,
        },
      },
    },
  });

  const tabs = [
    {
      title: "Passo a passo",
      content: (
        <>
          <Image src={explicativa} width={300} alt="" />
        </>
      ),
    },
    {
      title: "Direto ao ponto",
      content: (
        <>
          <Image src={direta} width={300} alt="" />
        </>
      ),
    },
  ];
  const handleClickCTA = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
        <C.KeyframesGlow position="right" />
        <S.HomeContainerFlex>
          <S.TextGridContainer>
            <TypographyV1>
              #1 IA desenvolvida para resolução de questões de provas
            </TypographyV1>
            <TypographyV2 style={{ marginTop: "1.25rem", zIndex: 99 }}>
              A resposta para todas <br /> as suas perguntas <br /> está a um
              clique <br /> de distância!
            </TypographyV2>
            <PrimaryBtn onClick={handleClickCTA} style={{ zIndex: 99 }}>
              Testar GRÁTIS
            </PrimaryBtn>
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
                    zIndex: 99,
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
          <S.BoxPurple
            style={{ height: "102px" }}
            ref={sliderRef}
            className="keen-slider">
            {subjects?.map((item, index: number) => (
              <S.ItemCaroussel key={index} className="keen-slider__slide">
                <Image src={item.icon} alt={`${item.name} icon`} width={50} />
                <TypographyV2>{item.name}</TypographyV2>
              </S.ItemCaroussel>
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
                Treinada com diversos conteúdos e materiais brasiliero
              </TypographyV2>
              <Image src={brazilFlag} alt="brazil flag" />
            </div>
          </S.NewSectionText>
          <S.NewSectionExplanation>
            <TypographyV1
              className="text-box"
              style={{ color: "white", fontWeight: "300" }}>
              Nossa IA fornece respostas precisas e confiáveis para suas
              questões de provas. <br />
              <br />
              <TypographyV1 style={{ fontWeight: "700" }}>
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
          </S.InstitutionsGroup>
          <S.InstitutionsGroup>
            <Image src={oab} alt="oab logo" />
            <Image src={mackenzie} alt="mackenzie logo" />
            <Image src={ita} alt="ita logo" />
          </S.InstitutionsGroup>
          <S.InstitutionsGroup ref={contentRef}>
            <Image src={puc} alt="puc logo" />
            <Image src={pf} alt="pf logo" />
            <Image src={fuvest} alt="fuvest logo" />
          </S.InstitutionsGroup>
        </S.InstitutionsSection>
        <C.KeyframesGlow position="left" />
        <S.NewSection>
          <S.BoxCTA>
            <TypographyV2 style={{ color: "white", marginTop: 30, zIndex: 99 }}>
              Garanta um descontão de <br /> 20% em nosso lançamento
            </TypographyV2>
            <br />
            <TypographyV1 style={{ color: "white", fontWeight: "300" }}>
              Nossa plataforma está sendo desenvolvida <br /> e estará
              disponível em breve
            </TypographyV1>
            <S.InputBox
              style={{ zIndex: 99 }}
              onSubmit={() => console.log("sexo")}>
              <input
                style={{ zIndex: 99 }}
                placeholder="Seu melhor e-mail"
                type="email"
              />
              <CTABtn style={{ zIndex: 99 }} type="submit">
                Garantir desconto
              </CTABtn>
            </S.InputBox>
            <br />
          </S.BoxCTA>
        </S.NewSection>
        <br />
        <S.NewSection>
          <S.BoxCTAWhite>
            <TypographyV2 style={{ color: "#7907D5" }}>
              Desfrute de dois modos de Resposta:
            </TypographyV2>
            <br />
            <C.Tabs tabs={tabs} />
          </S.BoxCTAWhite>
        </S.NewSection>
      </S.HomeContainer>
      <C.Footer />
    </>
  );
}
