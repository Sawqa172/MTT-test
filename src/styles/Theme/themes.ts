const lightTheme = {
  colors: {
    orange: "#ffa500",
    black: "#000000",
    white: "#ffffff",
    grey: "#b8b8b8",
    pink: "#ffc0cb",
    lightBlue: "#35d0ff",
  },
};

const darkTheme: Theme = {
  colors: {
    orange: "#ff6a00",
    black: "#000000",
    white: "#ffffff",
    grey: "#343434",
    pink: "#c62dff",
    lightBlue: "#3575ff",
  },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
