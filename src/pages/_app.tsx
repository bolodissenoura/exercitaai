import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../../public/assets/logo.svg";
import googleIco from "../../public/assets/googleIco.svg";
import Image from "next/image";
import * as S from "../styles/pages/app";
import { TextMD, TextSM } from "@/styles/typography";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderLogo>
          <Image src={logoImg} alt="logo img" />
          <TextMD>Exercita.ai</TextMD>
        </S.HeaderLogo>
        <S.HeaderButtons>
          <S.GoogleBtn>
            <Image src={googleIco} alt="logo img" />
            <TextSM>Login</TextSM>
          </S.GoogleBtn>
        </S.HeaderButtons>
      </S.Header>
      <Component {...pageProps} />
    </S.Container>
  );
}
