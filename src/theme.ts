import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      cream: '#F5EFE6',
      terracotta: '#A0522D',
      dark: '#2C2C2C',
      muted: '#7A7A7A',
    },
  },
  fonts: {
    heading: `'Playfair Display', Georgia, serif`,
    body: `'Inter', system-ui, sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#F5EFE6',
        color: '#2C2C2C',
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
      },
    },
  },
})

export default theme
