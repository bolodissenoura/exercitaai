import { styled } from ".";

export const PrimaryBtn = styled("button", {
  backgroundColor: "$purple700",
  borderRadius: "0.5rem",
  display: "flex",
  padding: "20px 50px",
  justifyContent: "center",
  gap: 12,
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  color: "$white",
  fontSize: "$lg",
  background: "$gradientButtonPink",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  margin: "1rem auto 0 auto",
  "&:hover": {
    opacity: 0.8,
  },

  "@bp2": {
    textAlign: "left",
    alignItems: "left",
    margin: "2rem 0",
    width: "15rem",
    height: "3.25rem",
  },
});

export const CTABtn = styled("button", {
  background: "$gradientButtonPink",
  borderRadius: "1.25rem",
  display: "flex",
  padding: "8px 30px",
  justifyContent: "center",
  gap: 12,
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  color: "$white",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  fontWeight: 500,
  fontSize: "$sm",

  "&:hover": {
    opacity: 0.8,
  },
});

export const VersionTag = styled("div", {
  fontSize: "12px",
  fontWeight: "700",
  fontFamily: "Montserrat",
  color: "$white",
  background: "$gradientButtonPurple",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  padding: 4,
  borderRadius: 8,
  width: 80,
});
