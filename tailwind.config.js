module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,vue,js}',
    './node_modules/primevue/**/*.{html,vue,js}'
  ],
  darkMode: 'false',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'gray-50': '#f9fafb',
        'gray-100': '#f2f4f7',
        'gray-200': '#eaecf0',
        'gray-300': '#d0d5dd',
        'gray-400': '#98a2b3',
        'gray-500': '#667085',
        'gray-600': '#475467',
        'gray-700': '#344054',
        'primary-50': '#d2e2f0',
        'primary-600': '#1c6db6',
        'primary-700': '#1962a4',
        'primary-800': '#165792',
        'success-500': '#12b76a',
        'success-700': '#027a48',
        'warning-25': '#fffcf5',
        'warning-500': '#f79009'
      },
      fontFamily: {
        primary: 'Inter',
        sans: ['Inter']
      },
      width: {
        40: '40px',
        260: '260px'
      },
      height: {
        40: '40px',
        65: '65px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
