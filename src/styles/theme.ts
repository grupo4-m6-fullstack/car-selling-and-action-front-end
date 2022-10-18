import {
  extendTheme,
  theme as ChakraTheme,
} from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {},
    white: '#FFFFFF',
    grey: {
      0: '#FDFDFD',
      100: '#F8F9FA',
      200: '#F1F3F5',
      300: '#E9ECEF',
      400: '#DEE2E6',
      500: '#CED4DA',
      600: '#ADB5BD',
      700: '#868E96',
      800: '#495057',
      900: '#212529',
      1000: '#0B0D0D',
    },
    feedback: {
      alert: {
        100: '#FFE5E5',
        200: '#FDD8D8',
        300: '#CD2B31',
      },
      success: {
        100: '#DDF3E4',
        200: '#CCEBD7',
        300: '#18794E',
      },
    },
    profile: {
      1: '#E34D8C',
      2: '#C04277',
      3: '#7D2A4D',
      4: '#7000FF',
      5: '#6200E3',
      6: '#36007D',
      7: '#349974',
      8: '#2A7D5F',
      9: '#153D2E',
      10: '#6100FF',
      11: '#5700E3',
      12: '#30007D',
    },
  },
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      bg: 'white',
      color: 'grey.800'
    },
  },
  components: {
    Button: {
      defaultProps: {variant: 'primary'},
      variants: {
        primary: {
          bg: 'grey.600',
          border: '2px solid',
          borderColor: 'grey.600',
          color: 'blue',
          fontSize: '10px',
          fontWeight: 'bold',
          _hover: {bg: 'grey.800'},
          _focus: {borderColor: 'grey.800'},
          _disabled: {borderColor: 'grey.200'}
        },
        outline: {
          bg: 'transparent',
          border: '2px solid',
          borderColor: 'grey.600',
          color: 'red',
          fontSize: '10px',
          fontWeight: 'bold',
          _hover: {bg: 'grey.800'},
          _focus: {borderColor: 'grey.800'},
          _disabled: {borderColor: 'grey.200'}
        },
        link: {
          bg: 'red',
          border: '2px solid',
          borderColor: 'grey.600',
          color: 'yellow',
          fontSize: '10px',
          fontWeight: 'bold',
          _hover: {bg: 'grey.800'},
          _focus: {borderColor: 'grey.800'},
          _disabled: {borderColor: 'grey.200'}
        }
      }
    }
  }
  
});