import { styled } from "..";

export const HomeContainer = styled("main", {
  width: "100%",
  height: "100vh",
  background: "$gradientBgPurple",
  paddingTop: "100px",
  "@bp2": {
    display: "flex",
  },
});

export const TextGridContainer = styled("div", {
  width: "100%",
  height: "80vh",
  display: "flex",
  gap: 8,
  flexDirection: "column",
  textAlign: "center",
  "@bp2": {
    textAlign: "left",
    padding: "30px",
  },
});
