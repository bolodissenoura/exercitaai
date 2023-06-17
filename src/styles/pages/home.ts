import { styled } from "..";

export const HomeContainer = styled("main", {
  height: "100vh",
  background: "$gradientBgPurple",
  paddingTop: "100px",
  "@bp2": {
    paddingLeft: 60,
    display: "flex",
  },
});

export const TextGridContainer = styled("div", {
  width: "100%",
  display: "flex",
  gap: 8,
  flexDirection: "column",
  textAlign: "center",
  "@bp2": {
    textAlign: "left",
    padding: "30px",
  },
});

export const ImageGridContainer = styled("div", {
  width: "100%",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignContent: "center",
  ".img": {
    "@bp2": {
      width: "500px",
      height: "350px",
    },
  },
});
