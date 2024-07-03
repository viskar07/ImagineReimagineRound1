import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");


const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "linear-gradient(135deg,#1e1e20,#0e0e11 32%)",
        "background-star": "url(/images/stars.png)",
        'astronote': "url(/images/magic/astronote.png)",
        "box-bg": "linear-gradient(#343236,#38343f)",
        'orbit1': "url(/public/icons/orbit-1)",
        "bg-wand": "linear-gradient(90deg, #0c0c0c, #1d1a1f);",
        "wand-cap":"linear-gradient(#cfdcf1 1%, #fff 13%, #fff 59%, #dfe6f1 92%, #d4ddec 96%)",
        "wand-strick": "linear-gradient(91deg, #000, #fff 31%)",
        "bg-screen":"radial-gradient(circle farthest-side at 50% 0, rgba(255, 255, 255, .12), rgba(255, 255, 255, 0))",
        "bg-screen-component": "linear-gradient(135deg, #1e1e1f, #1e1e20)",
      },
      boxShadow: {
        flipCard: "0 20px 25px rgba(0, 0, 0, .5), inset 0 2px 2px #525154",
        "custom-dark": "0 2px 4px rgba(0, 0, 0, 0.6)",
        "screen-shadow": "0 4px 116px rgba(240, 240, 240, 0.11)",
      },
      fontFamily: {
        "satoshi-light": ["Satoshi-Light", "sans-serif"],
        "satoshi-light-italic": ["Satoshi-LightItalic", "sans-serif"],
        "satoshi-regular": ["Satoshi-Regular", "sans-serif"],
        "satoshi-italic": ["Satoshi-Italic", "sans-serif"],
        "satoshi-medium": ["Satoshi-Medium", "sans-serif"],
        "satoshi-medium-italic": ["Satoshi-MediumItalic", "sans-serif"],
        "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
        "satoshi-bold-italic": ["Satoshi-BoldItalic", "sans-serif"],
        "satoshi-black": ["Satoshi-Black", "sans-serif"],
        "satoshi-black-italic": ["Satoshi-BlackItalic", "sans-serif"],
        "satoshi-variable": ["Satoshi-Variable", "sans-serif"],
        "satoshi-variable-italic": ["Satoshi-VariableItalic", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.2px",
      },
      colors: {
        primary: "#fff",
        secondary: "#bdbdc0",
        "card-paragraph": "#a9a9a9",
        "screen-border": "rgba(255, 255, 255, .12)",
        screen: " rgba(255, 255, 255, .01)",
        "screen-item": "#29292b",
      },

      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-medium": "spin 30s linear infinite",
        "spin-fast": "spin 20s linear infinite",
        move: "move 5s linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {

        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      perspective: {
        "1000": "1000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".transform-style-preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    },
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    
    function addVariablesForColors({ addBase, theme }: any) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );
     
      addBase({
        ":root": newVars,
      });
    }
  ],
};

export default config;
