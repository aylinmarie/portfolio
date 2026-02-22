import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  Circle,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function Navbar() {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box
      as="nav"
      px={{ base: 6, md: 12, lg: 20 }}
      py={5}
      position="sticky"
      top={0}
      zIndex={10}
      bg="brand.cream"
      borderBottom="1px solid"
      borderColor="rgba(44,44,44,0.08)"
    >
      <Flex align="center" justify="space-between">
        {/* Logo */}
        <HStack spacing={2}>
          <Circle size="10px" bg="brand.terracotta" />
          <Text
            fontFamily="heading"
            fontSize="sm"
            fontWeight="600"
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="brand.dark"
          >
            Aylin Marie
          </Text>
        </HStack>

        {/* Nav links */}
        {!isMobile && (
          <HStack spacing={10}>
            {['Home', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                fontSize="xs"
                fontWeight="500"
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="brand.dark"
                _hover={{ color: 'brand.terracotta' }}
                transition="color 0.2s"
              >
                {item}
              </Link>
            ))}
          </HStack>
        )}
      </Flex>
    </Box>
  )
}
