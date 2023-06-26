import { styled } from ".";

export const FooterContainer = styled("footer", {
  width: "100%",
  background: "$gray500",
  "@bp2": {
    padding: 60,
  },
});

export const HeaderLogo = styled("div", {
  width: "230px",
  display: "flex",
  justifyContent: "center",
  gap: 12,
  alignItems: "center",
  marginTop: 4,
  marginLeft: 10,
});

export const TextSection = styled("div", {
  fontSize: "$sm",
  color: "$gray300",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
});

export const CreatedBySection = styled("div", {
  fontSize: "$sm",
  color: "$gray300",
  width: "100%",
  display: "flex",
  gap: 8,
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
});
