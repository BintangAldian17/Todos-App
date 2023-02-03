/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'BgDark': '#161722',
        'BgLight': '	#e4e5f1',
        'primarydark': '#25273c',
        'secondarydark': '#4d5066',
        'thirddark': '	#e4e5f1',
        'primarylight': '#484b6a',
        'secondarylight': '	#9394a5',
        'thirdlight': '	#d2d3db',
        'primarylinear': '#57ddff',
        'secondarylinear': '#c058f3',
        'hoverelement': '	#3a7bfd'
      },
      backgroundImage: {
        'BgImgDark': "url('./assets/images/bg-desktop-dark.jpg')",
        'BgImgLight': "url('./assets/images/bg-desktop-light.jpg')",
        'BgImgDarkMob': "url('./assets/images/bg-mobile-dark.jpg')"
      },
    },
  },
  plugins: [],
}
