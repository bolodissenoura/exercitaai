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
  alignItems: "center",
  marginLeft: 30,
  "@bp2": {
    marginLeft: 60,
  },
});

export const HeaderButtons = styled("div", {
  height: "100%",
  display: "flex",
  gap: 12,
  alignItems: "center",
  marginRight: 30,
  "@bp2": {
    marginRight: 60,
  },
});
