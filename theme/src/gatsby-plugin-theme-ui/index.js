export default {
  initialColorMode: "light",
  // use CSS custom properties to help avoid flash of colors on initial page load
  useCustomProperties: true,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf"
      }
    }
  },
  fonts: {
    body: "Georgia, serif",
    heading: "system-ui, sans-serif"
  }
};
