module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#39382F',
        'text-secondary': '#6C6C65',
        'custom-green': '#386641',
        'custom-yellow': '#FFBA00',
        'light-yellow': '#FFF9E8'
      },
      backgroundImage: {
        'linear-yellow': 'linear-gradient(276.51deg, #E8BE29 -8.29%, #FFD25A 112.61%)',
      },
      boxShadow: {
        'img': '-15px 15px 0px #FFE399'
      }
    },
    fontFamily: {
      'sans': ['Inter']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
