import { styled } from "..";

export const Container = styled("div", {
  width: "100%",
  overflow: "hidden",
});

export const Header = styled("main", {
  position: "fixed",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "92px",
});

export const HeaderLogo = styled("div", {
  width: "230px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  gap: 12,
  textAlign: "center",
  alignItems: "center",
});

export const HeaderButtons = styled("div", {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  gap: 12,
  textAlign: "center",
  alignItems: "center",
});

export const GoogleBtn = styled("button", {
  backgroundColor: "$purple700",
  borderRadius: "1.5rem",
  width: "9.8125rem",
  height: "3.25rem",
  display: "flex",
  justifyContent: "center",
  gap: 12,
  textAlign: "center",
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  "&:hover": {
    opacity: 0.7,
  },
});
