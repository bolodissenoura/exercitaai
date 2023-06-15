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
});
