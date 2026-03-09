/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8B0000',      // Đỏ sậm nội thất
        'secondary': '#D4AF37',    // Vàng Gold cổ điển
        'accent': '#1B4D3E',       // Xanh lá thông
        'bg-light': '#F9F7F2',     // Trắng ngà
        'bg-dark': '#1A1A1A',      // Xám than
        'footer-bg': '#121212',    // Nền footer
        'footer-text': '#A0A0A0',  // Text footer
        // Legacy colors (giữ để tương thích)
        'crimson': '#8B0000',
        'gold': '#D4AF37',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'Roboto', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
