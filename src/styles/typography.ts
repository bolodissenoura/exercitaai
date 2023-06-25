import { styled } from ".";

export const TypographyV1 = styled("div", {
  fontSize: "$md",
  fontWeight: "500",
  fontFamily: "Inter",
  color: "$purple500",
  textShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});

export const TypographyV2 = styled("div", {
  fontSize: "$2xl",
  fontWeight: "700",
  fontFamily: "Inter",
  color: "$white",
});

export const TypographyV3 = styled("div", {
  fontSize: "$md",
  fontWeight: "500",
  fontFamily: "Montserrat",
  color: "$white",
  lineHeigth: "17px",
  letterSpacing: "0em",
  textAlign: "left",
});

export const TextMD = styled("h2", {
  fontSize: "$xl",
  fontWeight: "700",
  fontFamily: "Montserrat",
  color: "$white",
});

export const TextSM = styled("p", {
  fontSize: "$sm",
  fontWeight: "300",
  fontFamily: "Montserrat",
  color: "$white",
});

export const SubtitleSM = styled("p", {
  fontSize: "$sm",
  fontWeight: "normal",
  color: "$primary900",
});

export const ConditionalRender = styled("div", {
  display: "auto",
  "@media screen and (max-width: 992px)": {
    display: "none",
  },
});
