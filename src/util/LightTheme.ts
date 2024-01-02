export const LightTheme: Partial<Theme> = {
  background: "#fff",
  colors: {
    main: "#4A99E9",
    light: "#A5CCF4",
    dark: "#428AD2",
    error: "#E03C39",
    white: "#FFFFFF",
    inactiveBackground: "#F0F3F4",
    containerLine: "#F0F3F4",
    hover: "#E7E7E8",
    outline: "#D1D9DD",
    text: "#566370",
    black: "#000000",
    errorContainer: "#E5397F",

    myButtonMain: '#2890f1',
    myButtonOutline: '#286bf1',
    error2: '#fe4567',
    lightTransparent: '#a4ccf46f'
  },
  hover: {
    default: "#428AD2",
    follow: "#428AD2",
    error: "#FF0000",
    outlined: "#f3f3f3",
    disabled: "#A5CCF4",

    myButtonMain: '#2890f1',
    myButtonOutline: '#286bf1',
    white: "#FFFFFF"
  },
  text: {
    default: "#566370",
    title: "#000000",
    error: "#E03C39",
  },
  font: {
    default: "Manrope",
    title: "Inter",
  },
  buttonSize: {
    small: "95px",
    medium: "150px",
    large: "160px"
  },
  inputSize: {
    small: "224px",
    medium: "270px",
    large: "310px"
  }
};

export type Theme = {
  background: string;
  colors: {
    main: string;
    light: string;
    dark: string;
    error: string;
    white: string;
    inactiveBackground: string;
    containerLine: string;
    hover: string;
    outline: string;
    text: string;
    black: string;
    errorContainer: string;

    myButtonMain: string;
    myButtonOutline: string;
    error2: string;
    lightTransparent: string;
  };
  hover: {
    default: string;
    follow: string;
    error: string;
    outlined: string;
    disabled: string;

    myButtonMain: string;
    myButtonOutline: string;
    white: string;
  };
  text: {
    default: string;
    title: string;
    error: string;
  };
  font: {
    default: string;
    title: string;
  };
  buttonSize: {
    small: string;
    medium: string;
    large: string;
  };
  inputSize: {
    small: string;
    medium: string;
    large: string;
  }
};
