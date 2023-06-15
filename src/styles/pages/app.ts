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
  marginLeft: "3.625rem",
});

export const HeaderButtons = styled("div", {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  gap: 12,
  textAlign: "center",
  alignItems: "center",
  marginRight: "3.625rem",
});

export const TextMD = styled("h2", {
  fontSize: "$xl",
  fontWeight: "700",
  fontFamily: "Montserrat",
  color: "$white",
});

export const TextSM = styled("h2", {
  fontSize: "$sm",
  fontWeight: "300",
  fontFamily: "Montserrat",
  color: "$white",
});

export const SubtitleSM = styled("p", {
  fontSize: "$sm",
  fontWeight: "normal",
  color: "$primary900",
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
