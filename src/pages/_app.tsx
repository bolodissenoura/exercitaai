import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../../public/assets/logo.svg";
import Image from "next/image";
import * as S from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderLogo>
          <Image src={logoImg} alt="logo img" />
          <S.TextMD>Exercita.ai</S.TextMD>
        </S.HeaderLogo>
      </S.Header>
      <Component {...pageProps} />
    </S.Container>
  );
}
