module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./app/views/**/*.haml', './app/javascript/**/*'],
  theme: {
    borderRadius: {
      none: '0',
      '5': '5px',
      '8': '8px',
      '100': '100px',
      circle: '100%',
    },
    borderWidth: {
      none: '0',
      '1': '1px',
      '2': '2px',
    },
    boxShadow: {
      sm: '0px 4px 16px 0px rgb(79, 114, 205, 0.1)',
      base: '0px 4px 24px 0px rgba(79, 114, 205, 0.15)',
      lg: '0px 4px 42px 0px rgba(79, 114, 205, 0.15)',
    },
    colors: {
      unnamed15: '#F0F3F9',
      unnamed16: '#8480A0',

      transparent: 'transparent',
      current: 'currentColor',
      bgGray: '#FBFCFE',
      lightGray: '#EAECF3',
      textBase: '#343741',
      textLight: '#6D6986',
      borderLight: '#CBC9D9',

      lightBlue: '#2E57E8',
      darkBlue: '#6A93FF',
      //lightBlue: 'rgba(106, 147, 255, 0.5)',
      veryLightBlue: '#E1EBFF',

      purple: 'rgba(103, 93, 172, 1)',
      lightPurple: '#B0A8E3',

      gray: '#A9A6BD',
      darkGray: '#26282D',

      darkGreen: '#43B593',
      lightGreen: '#ABDBCC',

      black: '#000',
      white: '#fff',
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
    },
    fontSize: {
      '13': '13px',
      '14': '14px',
      '16': '16px',
      '20': '20px',
    },
    height: {
      '48': '48px',
    },
    lineHeight: {
      none: '1',
      paragraph: '150%',
    },
    spacing: {
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '28': '28px',
      '32': '32px',
      '36': '36px',
      '40': '40px',
      '48': '48px',
      '64': '64px',
      spacedColumns: '70px',
    },
    zIndex: {
      '-1': '-1',
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
  // s- for style
  prefix: 's-',
}
