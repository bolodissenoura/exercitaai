import Head from "next/head";
import * as S from "../styles/pages/home";
// General Components
import { TypographyV1 } from "@/styles/typography";
import Confetti from "react-confetti";

import React from "react";

export default function Congrats() {
  const [height, setHeight] = React.useState(50);
  const [width, setWidth] = React.useState(50);
  const confetiRef = React.useRef<any>(null);

  React.useEffect(() => {
    setHeight(confetiRef.current?.clientHeight);
    setWidth(confetiRef.current?.clientWidth);
  }, []);
  return (
    <>
      <Head>
        <title>🎉 Exercita.ai</title>
        <meta
          name="description"
          content="📚Soluções instantâneas e precisas com apenas um clique 📸."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Confetti
          gravity={0.01}
          numberOfPieces={150}
          style={{ maxWidth: "100%" }}
          width={width}
          height={height}
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 15; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
        />
        <S.HomeContainer
          style={{
            height: "110vh",
            display: "flex",
            justifyContent: "Center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}>
          <TypographyV1
            style={{
              fontSize: "30px",
              margin: "100px 0px",
              padding: "20px",
            }}>
            🎉 Parabens! Você acaba de garantir seu descontão no lançamento +
            teste grátis.
          </TypographyV1>
          <iframe
            src="https://media.tenor.com/3X9v444Ur9EAAAAC/shaun-the-sheep-sheep.gif"
            width="580"
            height="580"
            frameBorder="0"></iframe>
        </S.HomeContainer>
      </>
    </>
  );
}
