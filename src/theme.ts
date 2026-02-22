import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    // Playfair Display for headings (Google Fonts)
    heading: "'Playfair Display', Georgia, serif",
    body: "'Mulish', system-ui, sans-serif",
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'var(--marie-stone)',
        color: 'var(--marie-graphite)',
        fontFamily: "'Mulish', system-ui, sans-serif",
        overflowX: 'hidden',
      },
      '::selection': {
        backgroundColor: 'var(--marie-clay)',
        color: 'var(--marie-stone)',
      },
      '::-webkit-scrollbar': { width: '2px' },
      '::-webkit-scrollbar-track': { background: 'var(--marie-stone)' },
      '::-webkit-scrollbar-thumb': { background: 'var(--marie-clay)', borderRadius: '2px' },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: '400',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "'Mulish', system-ui, sans-serif",
      },
    },
    Link: {
      baseStyle: {
        transition: 'color 0.2s ease',
        _hover: { textDecoration: 'none', color: 'var(--marie-clay)' },
      },
    },
  },
})

export default theme
