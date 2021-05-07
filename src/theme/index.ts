import { extendTheme } from "@chakra-ui/react";

const mainAppTheme = {
  // Other foundational style mainAppTheme go here

  fonts: {
    body: "Fira Sans Condensed",
  },

  colors: {
    brand: {
      100: "#0435BD",
      200: "#1a202c",
    },
  },
  components: {
    // Other components go here
  },
};
export default extendTheme(mainAppTheme);
