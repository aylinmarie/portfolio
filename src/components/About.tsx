import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Image,
} from '@chakra-ui/react'

export default function About() {
  return (
    <Box
      id="about"
      px={{ base: 6, md: 12, lg: 20 }}
      py={{ base: 16, md: 24 }}
      bg="rgba(160,82,45,0.04)"
      borderTop="1px solid"
      borderColor="rgba(44,44,44,0.1)"
    >
      <Grid templateColumns={{ base: '1fr', md: '200px 1fr' }} gap={{ base: 8, md: 16 }}>
        {/* Section label */}
        <GridItem>
          <Text
            fontSize="xs"
            fontWeight="500"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="brand.muted"
            pt={{ base: 0, md: 2 }}
          >
            About
          </Text>
        </GridItem>

        {/* Content */}
        <GridItem>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 280px' }} gap={12}>
            <VStack align="flex-start" spacing={6}>
              <Heading
                as="h2"
                fontFamily="heading"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="400"
                lineHeight="1.2"
                color="brand.dark"
              >
                Merhaba!{' '}
                <Box as="span" color="brand.terracotta" fontStyle="italic">
                  Hello!
                </Box>
              </Heading>

              <Text fontSize="sm" lineHeight="1.9" color="brand.muted" maxW="520px">
                I'm Aylin — a Turkish-American creative based in Atlanta, GA. I blend
                analytical thinking with a love for design to build content that
                actually resonates with people.
              </Text>

              <Text fontSize="sm" lineHeight="1.9" color="brand.muted" maxW="520px">
                When I'm not strategizing campaigns, you'll find me exploring
                independent bookstores, experimenting with new recipes, or photographing
                street art. I care deeply about intentional storytelling and the spaces
                between data and emotion.
              </Text>

              <HStack spacing={6} pt={2} flexWrap="wrap">
                {[
                  { label: 'Resume', href: '#' },
                  { label: 'LinkedIn', href: '#' },
                  { label: 'Read.cv', href: '#' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="xs"
                    fontWeight="500"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    color="brand.dark"
                    borderBottom="1px solid"
                    borderColor="brand.dark"
                    pb="1px"
                    _hover={{ color: 'brand.terracotta', borderColor: 'brand.terracotta' }}
                    transition="all 0.2s"
                  >
                    {link.label}
                  </Link>
                ))}
              </HStack>
            </VStack>

            {/* Data viz / Mailchimp project image */}
            <Box display={{ base: 'none', lg: 'block' }}>
              <Image
                src="/images/uploads/mailchimpdataviz-9a6610d6aab382c799bbf34f707059bf-1-.png"
                alt="Mailchimp data visualization project"
                w="100%"
                borderRadius="4px"
                opacity={0.9}
              />
              <Text fontSize="xs" color="brand.muted" mt={2} textAlign="center">
                Mailchimp — Data Visualization
              </Text>
            </Box>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  )
}
