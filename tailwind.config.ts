import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        tru: {
          gold: '#C99A3B',
          terracotta: '#A95436',
          olive: '#68764A',
          navy: '#172B45',
          sandstone: '#D9C29A',
          ivory: '#F7F3E9',
          teal: '#287F78',
          forest: '#24543D',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(23, 43, 69, 0.08)',
      },
      backgroundImage: {
        sunrise: 'linear-gradient(135deg, rgba(201,154,59,0.18), rgba(40,127,120,0.12))',
      },
    },
  },
  plugins: [],
};

export default config;
