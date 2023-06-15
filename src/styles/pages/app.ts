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
