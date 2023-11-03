const default_theme = require('tailwindcss/defaultTheme')
{import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "neutral-50":"#F9F9F9",
        "neutral-1000":"#000",
        "twitter-blue-default":"#1D9BF0",
        "twitter-blue-hover":"#1871CA",
        "twitter-blue-disabled":"#1E5D87",
        "blue-wash":"rgba(255, 255, 255, 0.12)",
        "button-stroke":"#546A7A",
        "searchbar-fill":"#212327",
        "card-fill":"#16181C",
        "success":"#00BE74",
        "error":"#8B141A",
        "neutral-100":"#F4F4F4",
        "neutral-200":"#E4E4E4",
        "neutral-300":"#D3D3D3",
        "neutral-400":"#A2A2A2",
        "neutral-500":"#737373",
        "neutral-600":"#525252",
        "neutral-700":"#404040",
        "neutal-800":"262626",
        "neutral-900":"#171717",
        "neutral-950":"#0A0A0A",
        "signup-stroke":"rgba(29, 155, 240, 0.24)",
        "secondary":"rgba(255, 255, 255, 0.60)",
        "trans":"rgba(0, 0, 0, 0.60)"
      },
      fontFamily: {
        sans: ['Inter var', default_theme.fontFamily.sans],
      },
      gap:{
        "25":"100px",
        "2.5":"10px"
      },
      spacing:{
        loginx:"162px",
        loginy:"215px",
        "40":"160px",
        "97.5":"390px",
        "97":"388PX",
        "4.5":"18px",
        "77.5":"310px",
        "217":"868px",
        "37.5":"150px",
        "17":"68px",
        "88.5":"354px",
        "50":"200px",
        "35.75":"143px",
        "21":"84px"
      },
      fontSize:{
        jointoday:"26px"
      },
      borderRadius:{
        "post-btn":"30px"
      }
    },
  },
  plugins: [],
}

