module.exports = {
  theme: {
    extend: {
      animation: {
        pulseZoom: 'pulseZoom 2s infinite',
      },
      keyframes: {
        pulseZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};


module.exports = {
    theme: {
      extend: {
        animation: {
          fadeInDown: "fadeInDown 1s ease-out",
          fadeInLeft: "fadeInLeft 1s ease-out",
        },
        keyframes: {
          fadeInDown: {
            "0%": { opacity: 0, transform: "translateY(-50px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          fadeInLeft: {
            "0%": { opacity: 0, transform: "translateX(-50px)" },
            "100%": { opacity: 1, transform: "translateX(0)" },
          },
        },
      },
    },
  };