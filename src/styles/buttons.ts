import { styled } from ".";

export const PrimaryBtn = styled("button", {
  backgroundColor: "$purple700",
  borderRadius: "1.5rem",
  width: "9.8125rem",
  height: "3.25rem",
  display: "flex",
  justifyContent: "center",
  gap: 12,
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  color: "$white",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  margin: "0 auto",
  "&:hover": {
    opacity: 0.8,
  },

  "@bp2": {
    textAlign: "left",
    alignItems: "left",
    margin: "1rem 0",
    width: "15rem",
  },
});
