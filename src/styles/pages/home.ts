import { styled } from "..";

export const HomeContainer = styled("main", {
  background: "$gray900",
  marginBottom: "-4px",
});

export const HomeContainerFlex = styled("main", {
  paddingTop: "150px",
  maxWidth: "80%",
  margin: "0 auto",
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

export const MockupContainer = styled("div", {
  width: "100%",
  borderRadius: 32,
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignContent: "center",
  perspective: "1000px",
  marginTop: 100,

  "@bp2": {
    marginTop: 0,
  },

  ".iphone-mockup": {
    transition: "transform 0.3s ease",
  },

  ".iphone-mockup.hovered": {
    transform: "rotateY(-10deg)",
  },
});

export const NewSection = styled("div", {
  width: "100%",
  marginTop: 80,
});

export const NewSectionText = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  marginBottom: "2rem",
});

export const BoxPurple = styled("div", {
  width: "80% !important",
  margin: "0 auto",
  height: "165px",
  padding: 8,
  display: "flex",
  alignItems: "center",
  background: "$gradientButtonPurple",
  boxShadow: "rgba(121, 7, 213, 1) 0px 8px 29px 0px",
  borderRadius: "1.875rem",
});

export const ItemCaroussel = styled("div", {
  height: "78px !important",
  minHeight: "10px !important",
  background: "$gradientButtonBlue",
  boxShadow: "$gradientButtonBlue 0px 8px 29px 0px",
  borderRadius: "0.75rem",
  display: "flex",
  textAlign: "center",
  justifyContent: "flex-start",
  paddingLeft: "2rem",
  alignContent: "center",
  alignItems: "center",
  gap: "2rem",
});

export const NewSectionExplanation = styled("div", {
  width: "90%",
  display: "flex",
  flexDirection: "column-reverse",
  gap: 16,
  padding: 20,
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  marginBottom: "2rem",

  "@bp2": {
    flexDirection: "row",
    ".img": {
      marginTop: "-50px",
    },
    ".text-box": {
      width: 700,
    },
  },
});

export const InstitutionsSection = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  "@bp2": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export const InstitutionsGroup = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: 30,
});

export const InputBox = styled("form", {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: 16,
  marginTop: 30,
  background: "white",
  borderRadius: 30,

  input: {
    border: "none",
    width: "100%",
    padding: 8,
    paddingLeft: 30,
    borderRadius: 30,
    backgroundColor: "White",
    color: "#9d9d9d",
    fontWeight: 300,
    "input:focus": {
      outline: "none !important",
      borderColor: "red",
      boxShadow: "0 0 10px red",
    },
  },
});

export const BoxCTA = styled("div", {
  width: "90%",
  margin: "0 auto",
  padding: 16,
  display: "flex",
  alignItems: "center",
  background: "$gray900",
  boxShadow: "rgba(121, 7, 213, 1) 0px 8px 29px 0px",
  borderRadius: 30,
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column",
  "@bp2": {
    width: "800px",
  },
});

export const BoxCTAWhite = styled("div", {
  width: "90%",
  margin: "0 auto",
  padding: 16,
  display: "flex",
  alignItems: "center",
  background: "white",
  boxShadow: "rgba(121, 7, 213, 1) 0px 8px 29px 0px",
  borderRadius: 30,
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column",
  "@bp2": {
    width: "100%",
  },
});

export const BoxTransparent = styled("div", {
  width: "80%",
  paddingTop: "20px",
  margin: "40px auto",
  background: "rgba(255, 255, 255, 0.012)",
  borderRadius: "2rem",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(3.5px)",
  "-webkit-backdrop-filter": "blur(3.5px)",
  border: "1px solid rgba(255, 255, 255, 0.35)",
});
