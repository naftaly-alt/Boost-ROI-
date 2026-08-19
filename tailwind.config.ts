import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1112",
        paper: "#F4F2ED",
        lime: "#C8FF4D",
        "lime-hi": "#DCFF86",
        forest: "#0B5C43",
        error: "#B4341F",
      },
      fontFamily: {
        display: ["var(--font-assistant)", "Assistant", "sans-serif"],
        body: ["var(--font-heebo)", "Heebo", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(26px) rotate(.6deg)" },
          to: { opacity: "1", transform: "none" },
        },
        fade: { from: { opacity: "0" }, to: { opacity: "1" } },
        bfloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        bblink: {
          "0%, 90%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(.1)" },
        },
        bspark: {
          "0%, 100%": { opacity: ".4", transform: "scale(.92)" },
          "50%": { opacity: "1", transform: "scale(1.14)" },
        },
        mleft: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        mright: { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        glow: {
          "0%, 100%": { opacity: ".5", transform: "scale(1)" },
          "50%": { opacity: ".85", transform: "scale(1.08)" },
        },
        sheen: { "0%": { transform: "translateX(-120%)" }, "100%": { transform: "translateX(220%)" } },
        bouch: {
          "0%": { transform: "scale(1)" },
          "22%": { transform: "scale(.66) rotate(-9deg)" },
          "48%": { transform: "scale(1.06) rotate(5deg)" },
          "70%": { transform: "scale(.94)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        rise: "rise .8s cubic-bezier(.2,.8,.2,1) both",
        fade: "fade .6s ease both",
        bfloat: "bfloat 5.4s ease-in-out infinite",
        bblink: "bblink 5s ease-in-out infinite",
        bspark: "bspark 2.4s ease-in-out infinite",
        mleft: "mleft 26s linear infinite",
        mright: "mright 26s linear infinite",
        glow: "glow 7s ease-in-out infinite",
        sheen: "sheen 1.4s ease infinite",
        bouch: "bouch .55s cubic-bezier(.3,1.6,.4,1) 1",
      },
    },
  },
  plugins: [],
};

export default config;
