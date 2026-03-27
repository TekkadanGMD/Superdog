/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: '#002A5B',
        orange: '#E67E00',
        red: '#E31B23',
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'float-up': 'floatUp 1s ease-out forwards',
        'float-base': 'floatBase 6s ease-in-out infinite',
        'float-badge': 'floatBadge 5s ease-in-out infinite',
        'carousel-1': 'carousel1 12s infinite ease-in-out',
        'carousel-2': 'carousel2 12s infinite ease-in-out',
        'pulse-red': 'pulseRed 2s infinite',
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite',
        'outer-glow': 'outerGlow 4s ease-in-out infinite',
        'fadeInOut': 'fadeInOut 8s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'walkPoint': 'walkPoint 1.5s ease-in-out infinite',
        'popBark': 'popBark 1.2s ease-out forwards',
        'sweep': 'sweep 1.5s ease-in-out infinite',
        'pulseGreen': 'pulseGreen 2.5s infinite',
      },
      keyframes: {
        neonPulse: { '0%, 100%': { opacity: '0.4', boxShadow: '0 0 10px #00f3ff' }, '50%': { opacity: '1', boxShadow: '0 0 20px #00f3ff' } },
        outerGlow: { '0%, 100%': { boxShadow: '0 0 30px rgba(255, 140, 0, 0.2)' }, '50%': { boxShadow: '0 0 60px rgba(255, 140, 0, 0.4)' } },
        slideInLeft: { '0%': { opacity: '0', transform: 'translateX(-50px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        floatUp: { '0%': { opacity: '0', transform: 'translateY(100px) rotate(2deg)' }, '100%': { opacity: '1', transform: 'translateY(0) rotate(2deg)' } },
        floatBase: { '0%, 100%': { transform: 'translateY(0) rotate(2deg)' }, '50%': { transform: 'translateY(-15px) rotate(3deg)' } },
        floatBadge: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        fadeInOut: { '0%, 100%': { opacity: '0', transform: 'scale(0.95)' }, '50%': { opacity: '1', transform: 'scale(1.05)' } },
        walkPoint: { '0%, 100%': { opacity: '0.2', transform: 'translateY(-3px)' }, '50%': { opacity: '1', transform: 'translateY(3px)' } },
        popBark: { '0%': { opacity: '0', transform: 'translateY(10px) scale(0.8)' }, '20%, 80%': { opacity: '1', transform: 'translateY(0) scale(1.1)' }, '100%': { opacity: '0', transform: 'translateY(-15px) scale(0.9)' } },
        sweep: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(200%)' } },
        pulseGreen: { '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' }, '70%': { boxShadow: '0 0 0 20px rgba(37, 211, 102, 0)' }, '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' } },
      }
    },
  },
  plugins: [],
}
