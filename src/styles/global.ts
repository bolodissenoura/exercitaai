import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialiasad",
    backgroundColor: "$white",
    color: "$gray100",
  },

  "body, input, textarea, button": {
    fontFamily: "Inter",
    fontWeight: 400,
  },
  "body::-webkit-scrollbar": {
    width: 6 /* Width of the scrollbar */,
    background: "#191C20",
  },

  /* Handle (thumb) of the scrollbar */
  "body::-webkit-scrollbar-thumb": {
    background: "$gradientButtonPurple",
    borderRadius: "3px",
  },

  /* Optional: Hover style for the scrollbar */
  "body::-webkit-scrollbar-thumb:hover": {
    background: "$gradientButtonPurple",
  },
});
