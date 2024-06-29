
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bangla: ['"Baloo Da 2"', "cursive"],
        english: ['"HK Grotesk"', "sans-serif"],
      },
      colors: {
        customGray: '#354895',
        primaryBlue: "#5468FF",
        blueLight: "#ECEEFF",
        bluePale: "#E0F1FE",
        blueDark: "#354895",
        footer: "#E4EDF4",
        footerDivider: "#D5E7FF",
        primaryPink: "#CF278D",
        pinkLight: "#FFECFA",
        highlight: "#00D6CA",
        primaryOrange: "#EFAD1E",
        title01: "#354895",
        title02: "#232C6A",
        title03: "#343B6D",
        body01: "#454C7E",
        body02: "#676EA0",
        body03: "#99A0D2",
        pinkText01: "#C0187E",
        dark: "#515870",
        mediumDark: "#8997A8",
        medium: "#B1BFCA",
        mediumLight: "#D0DEEF",
        light: "#F0F6F8",
        success: "#39B54A",
        successLight: "#E7F6E9",
        error: "#FF2E6C",
        errorLight: "#FFE4EA",
        disable: "#CECFD8",
        info: "#21C1F3",
        warning01: "#F3B122",
        warning02: "#F5C738",
        purple: "#A45AFF",
        purpleLight: "#F1E4FF",
        green: "#6DC337",
        greenLight: "#E8FFD9",
        blue: "#4353CC",
        skyBlueDark: "#0C4A6E",
        analogBueLight: "#E9EBF9", //its also blue light
        tomato: "#FF6E76",
        tomatoLight: "#FFEBF0",
        artBoardBackgroundLight: "#F3F5F9",
        artBoardBackgroundDark: "#171531",
        physics01: "#6070E9",
        chemistry01: "#39BCF7",
        generalMath01: "#FF7B33",
        biology1: "#3BC78A",
        higherMath01: "#9736E3",
        bangla01: "#E74D4F",
        ict01: "#43D1B9",
        english01: "#30C4D8",
        physics02: "#4757D0",
        chemistry02: "#21A4EE",
        generalMath02: "#EC6820",
        biology2: "#29B578",
        higherMath02: "#8322CF",
        bangla02: "#C42325",
        ict02: "#2FBDA5",
        english02: "#1CB0C4",
        physicsLight: "#EAEBFC",
        chemistryLight: "#DFF6FF",
        generalMathLight: "#FFF8E0",
        biologyLight: "#E6FAEF",
        higherMathLight: "#F2E5FB",
        banglaLight: "#FDEAEE",
        ictLight: "#E1F7F4",
        englishLight: "#E0F7FA",
        white: "#ffffff",
        black: "#000000",
        // new colors as per new design system starts from here
        primary25: "#F7FBFF",
        primary50: "#eaeaff",
        primary100: "#EDF6FF",
        primary200: "#a2a9ff",
        primary300: "#7786ff",
        primary400: "#5468ff",
        primary500: "#5468FF",
        primary600: "#2540ef",
        primary700: "#1634e2",
        primary800: "#0026d8",
        primary900: "#0004bf",
        secondary50: "#FCF0FA",
        secondary100: "#FCE3F7",
        secondary200: "#F7BBE9",
        secondary300: "#F493DB",
        secondary400: "#EB46B4",
        secondary500: "#E2008D",
        secondary600: "#CC0177",
        secondary700: "#AC005B",
        secondary800: "#870044",
        secondary900: "#66002E",
        accent50: "#F2F7FA",
        accent100: "#E4EEF5",
        accent200: "#BED3E6",
        accent300: "#99B6D6",
        accent400: "#5C7db5",
        accent500: "#2d4797",
        accent600: "#243c87",
        accent700: "#182d70",
        accent800: "#0f1f59",
        accent900: "#081445",
        gray50: "#fafafa",
        gray100: "#f5f5f5",
        gray200: "#efefef",
        gray300: "#e1e1e1",
        gray400: "#bebebe",
        gray500: "#9f9f9f",
        gray600: "#767676",
        gray700: "#626262",
        gray800: "#434343",
        gray900: "#222222",
        success50: "#F0FDF4",
        success100: "#DCFCE7",
        success200: "#a1daa5",
        success300: "#79cc81",
        success400: "#5ac065",
        success500: "#39b54a",
        success600: "#2fa640",
        success700: "#239435",
        success800: "#15822a",
        success900: "#006316",
        error50: "#ffe4ea",
        error100: "#ffbacc",
        error200: "#ff8caa",
        error300: "#ff8caa",
        error400: "#ff2e6d",
        error500: "#fd0053",
        error600: "#ec0052",
        error700: "#d6004f",
        error800: "#c3004d",
        error900: "#9e0049",
        info50: "#def5fd",
        info100: "#ace5f9",
        info200: "#71d3f6",
        info300: "#21c2f3",
        info400: "#00b5f3",
        info500: "#00a8f2",
        info600: "#009ae4",
        info700: "#0087d0",
        info800: "#0076bd",
        info900: "#00569c",
        warning50: "#fdf8e2",
        warning100: "#fbebb5",
        warning200: "#f9de86",
        warning300: "#f6d258",
        warning400: "#f5c738",
        warning500: "#f3be28",
        warning600: "#f3b122",
        warning700: "#f29f1e",
        warning800: "#f18f1b",
        warning900: "#ef7217",
        // new colors as per new design system ends at here
      },
      zIndex: {
        1: "1",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};