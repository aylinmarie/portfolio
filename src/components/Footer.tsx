import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box
      id="contact"
      as="footer"
      px={{ base: 6, md: 12, lg: 20 }}
      py={12}
      borderTop="1px solid"
      borderColor="rgba(44,44,44,0.1)"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        gap={6}
      >
        {/* Left: email */}
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color="brand.muted">
            Get in touch
          </Text>
          <Link
            href="mailto:hello@aylinmarie.com"
            fontSize="sm"
            fontWeight="500"
            color="brand.dark"
            _hover={{ color: 'brand.terracotta' }}
            transition="color 0.2s"
          >
            hello@aylinmarie.com
          </Link>
        </VStack>

        {/* Right: social links */}
        <HStack spacing={8}>
          {[
            { label: 'Pinterest', href: '#' },
            { label: 'Instagram', href: '#' },
            { label: 'LinkedIn', href: '#' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              isExternal
              fontSize="xs"
              fontWeight="500"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="brand.muted"
              _hover={{ color: 'brand.terracotta' }}
              transition="color 0.2s"
            >
              {link.label}
            </Link>
          ))}
        </HStack>
      </Flex>

      {/* Bottom line */}
      <Text fontSize="xs" color="brand.muted" mt={10} opacity={0.6}>
        © {year} Aylin Marie. Designed with care.
      </Text>
    </Box>
  )
}
