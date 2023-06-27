import { styled } from ".";

export const TabWrapper = styled("div", {
  background: "#C7C7C7",
  borderRadius: 16,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
});

export const TabItem = styled("button", {
  padding: "15px 50px",
  border: "none",
  borderRadius: 16,
  borderBottom: "2px solid transparent",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8,
  },
  p: {
    color: "$gray900",
  },
});

export const TabContent = styled("div", {
  padding: "20px",
  borderTop: "none",
});
