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

export const HeaderLogo = styled("main", {
  width: "230px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  gap: 12,
  textAlign: "center",
  alignItems: "center",
});

export const TextMD = styled("h2", {
  fontSize: "$xl",
  fontWeight: "700",
  color: "$white",
});

export const SubtitleSM = styled("p", {
  fontSize: "$sm",
  fontWeight: "normal",
  color: "$primary900",
});

export const Imgprofile = styled("div", {
  img: {
    borderRadius: "50%",
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px;",
  },
});
