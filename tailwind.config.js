/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      translate: {
        full: "100%"
      },
      backgroundImage:{
        'home_image': "url('/src/asset/home-picture.png')"
      }
    },
  },
  variants: {
    rotate: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"]
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
