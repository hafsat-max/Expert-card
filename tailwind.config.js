/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '20': 'clamp(1.125rem,2vw,1.25rem)',
      },
      background:{
        input: 'linear-gradient(0deg, #EBEBEB, #EBEBEB), linear-gradient(0deg, #FFFFFF, #FFFFFF);'
      },
      backgroundColor:{
        'btn':'linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)',
        engineering: "#C81107",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      border:{
        input:'1px solid #EBEBEB',
        border: '1px solid F5F6F7',
        grey: '1px solid #EBEBEB',
        'light': '2px solid #F2F2F2'

      },
      borderRadius:{
        'card':'20px, 20px, 0px, 0px'
      },
      boxShadow:{
        shadow:'0px 4px 44px 0px #00000029;'
      },
      colors: {
        lust: "#E1261C",
        engineering: "#C81107",
        'davy-grey': '#54565B',
        'blood-red':"#6D0802",
        'phillipine-silver': '#B4B4B0',
        'spanish-gray': '#9FA19C',
        'dim-gray':'#696B6F',
        'gray': '#7C827D',
        dim: '#656C6C'

      },
      fontFamily: {
        switzer: 'Switzer'
      },
      fontSize:{
        12: "clamp(8px,0.8vw,12px)",
        14: 'clamp(13px,1vw,14px)',
        16: "clamp(14px,1vw,16px)",
        20: 'clamp(18px, 1.5vw,20px )',
        24: 'clamp(22px,2vw,24px)',
        31: "clamp(28px,1.7vw,31px)",
        32: "clamp(24px,2vw,32px)",
        48: "clamp(32px,3vw,48px)",
      },
      gap: {
        '16': '1rem',
        '40s': '2rem,3vw,2.5rem'
      },
      letterSpacing: {
        one: '1px'
      },
      lineHeight: {
        one: '1'
      },
 
      padding: {
        card: 'clamp(2.3rem, 3vw, 2.5rem)'
      }
    },
  },
  plugins: [],
}


