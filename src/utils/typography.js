import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '300',
        '400',
        '900',
      ],
    },
  ],
  headerFontFamily: [
    "Lato",
    "sans-serif",
  ],
  
  bodyFontFamily: ["Lato", "sans-serif"],
})

export default typography