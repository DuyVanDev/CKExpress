/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        new4: "repeat(2, minmax(200px, 1fr))",
      },
      colors: {
        primary: "#f26d00",
        secondary: "#fdbd00",
        lightgreen: "#ddf1de",
        lightorange: "#f78c47",
        blue: "#29abdf",
        red: "#c8372d",
        white: "#ffffff",
        lightblue: "#478eda",
        darkblue: "#0b2a63",
        blueseconds: "#0b3476",
        lightgray: "#9696a0",
        heading: "#283ED4",
        gray: "#292a31",
        green: "#bae6bd",
        orange: "#ff6900",
        border: "#EAEAEA",
        hero: "#354130",
        text: "#5a5b6a",
        support: "rgba(0, 0, 0, 0.4)",
        background: "#f5faf5",
        footermask: "rgba(41, 42, 49, 0.9)",
        "hover-text-white": "#f8fafc",
        "hover-tel": "#24E9E2",
        "hover-text-primary": "#0479cc",
        "text-red": "#d30d0d",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to right, #3439D7 0%, #24E9E2 100%)",
        info: "url('@/assets/background/bg-service.png')",
        contact: "url('@/assets/background/bg-po.jpg')",
        office: "url('@/assets/background/bg-post-offices.png')",
        branch: "url('@/assets/background/bg-about.jpg')",
        branch2: "url('@/assets/background/bg-about.jpg')",
        footer: "url('@/assets/background/bg-footer.jpg')",
        login: "url('@/assets/background/bg-login.jpg')",
        about: "url('@/assets/background/bg-about.png')",
        "primary-gradient":
          "linear-gradient(to right, #3439D7 0%, #24E9E2 100%)",
        "bg-overlay":
          "linear-gradient(141deg, #0e68c8, #02a4a5, rgba(0,0,0,.30))",
      },
      backgroundColor: {
        overlay: "rgba(6, 17, 15, 0.767)",
      },
      boxShadow: {
        black: "0px 0px 4px  rgba(0, 0, 0, 255)",
        card: "0 3px 6px -4px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
  },
  plugins: [],
  important: true,
};
