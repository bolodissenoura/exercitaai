import { styled } from "..";

export const HomeContainer = styled("main", {
  background: "$gradientBgPurple",
});

export const HomeContainerFlex = styled("main", {
  paddingTop: "150px",
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
  marginTop: "2.50rem",
  "@bp2": {
    textAlign: "left",
    padding: "30px",
  },
});

export const BoxGridContainer = styled("div", {
  width: "100%",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignContent: "center",
});

export const Box = styled("div", {
  width: "500px",
  height: "300px",
  marginTop: "1rem",
  borderRadius: "1rem",
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  "-webkit-backdrop-filter": "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  padding: "0.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "60px 10px",
});

export const WhiteBox = styled("div", {
  width: "100%",
  height: "100%",
  borderRadius: ".5rem",
  background: "rgba(246, 246, 246, 1)",
});

export const ButtonCamera = styled("button", {
  width: "50px",
  height: "100%",
  fontSize: "$lg",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 8,
  borderTopLeftRadius: ".5rem",
  borderBottomLeftRadius: ".5rem",
  background: "rgba(222, 222, 222, 1)",
  marginRight: "-12px",
  border: "none",

  "&:hover": {
    boxShadow: "none",
    opacity: 0.9,
    cursor: "pointer",
  },
});

export const InputQuest = styled("input", {
  width: "100%",
  height: "52px",
  fontSize: "$lg",
  borderRadius: ".5rem",
  padding: 5,
  border: "none",
  borderTopLeftRadius: ".8rem",
  borderBottomLeftRadius: ".8rem",
  boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  background: "rgba(255, 255, 255, 1)",
});

export const ButtonSend = styled("button", {
  width: "50px",
  height: "50px",
  fontSize: "$lg",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 8,
  borderRadius: ".5rem",
  background: "$gradientButtonPurple",
  border: "none",
  marginLeft: "-55px",
  marginTop: "6px",
  boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

  "&:hover": {
    boxShadow: "none",
    opacity: 0.9,
    cursor: "pointer",
  },
});

export const SectionCaroussel = styled("div", {
  width: "100%",
  height: "100vh",
  marginTop: 80,
});

export const SectionCarousselText = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  marginBottom: "2rem",
});

export const BoxCaroussel = styled("div", {
  width: "90%",
  margin: "0 auto",
  height: "165px",
  background: "$gradientButtonPurple",
  boxShadow: "rgba(121, 7, 213, 1) 0px 8px 29px 0px",
  borderRadius: 8,
});
