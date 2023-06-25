import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../../public/assets/logo.svg";
import googleIco from "../../public/assets/googleIco.svg";
import Image from "next/image";
import * as S from "../styles/pages/app";
import {
  ConditionalRender,
  TextMD,
  TextSM,
  TypographyV3,
} from "@/styles/typography";
import { PrimaryBtn, VersionTag } from "@/styles/buttons";
import React from "react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [backgroundColor, setBackgroundColor] = React.useState("transparent");

  React.useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position and determine the background color based on it
      const scrollPosition = window.scrollY;
      const newColor =
        scrollPosition > 100 ? "rgba(121, 7, 213, 0.3)" : "transparent";

      setBackgroundColor(newColor);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Container>
      <S.Header style={{ background: backgroundColor }}>
        <S.HeaderLogo>
          <Image src={logoImg} alt="logo img" />
          <TextMD>Exercita.ai</TextMD>
        </S.HeaderLogo>
        <S.HeaderButtons>
          {/* <PrimaryBtn>
            <Image src={googleIco} alt="logo img" />
            <ConditionalRender>
              <TextSM>Login</TextSM>
            </ConditionalRender>
          </PrimaryBtn> */}
          <VersionTag>BETA v0.0.1</VersionTag>
        </S.HeaderButtons>
      </S.Header>
      <Component {...pageProps} />
    </S.Container>
  );
}
