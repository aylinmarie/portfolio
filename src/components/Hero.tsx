import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  Image,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Hero() {
  return (
    <Box
      id="home"
      px={{ base: 6, md: 12, lg: 20 }}
      pt={{ base: 12, md: 16 }}
      pb={{ base: 0, md: 0 }}
    >
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={0}
        alignItems="end"
        minH={{ base: 'auto', lg: '80vh' }}
      >
        {/* Left: Text content */}
        <GridItem pb={{ base: 10, lg: 16 }}>
          <VStack align="flex-start" spacing={6} maxW="520px">
            {/* Small label */}
            <Text
              fontSize="xs"
              fontWeight="500"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="brand.muted"
            >
              Creative + Digital Strategist
            </Text>

            {/* Large name */}
            <Heading
              as="h1"
              fontFamily="heading"
              fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
              fontWeight="400"
              lineHeight="1.0"
              color="brand.dark"
              letterSpacing="-0.02em"
            >
              Aylin{' '}
              <Box as="span" color="brand.terracotta" fontStyle="italic">
                Marie
              </Box>
            </Heading>

            {/* Description */}
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              lineHeight="1.8"
              color="brand.muted"
              maxW="420px"
            >
              I'm a content strategist and digital marketer with a passion for
              storytelling, brand building, and data-driven campaigns. Currently
              crafting email journeys at{' '}
              <Link
                href="https://mailchimp.com"
                isExternal
                color="brand.terracotta"
                fontWeight="500"
                borderBottom="1px solid"
                borderColor="brand.terracotta"
                pb="1px"
                _hover={{ opacity: 0.75 }}
              >
                Mailchimp
              </Link>
              .
            </Text>

            {/* CTA */}
            <HStack
              spacing={2}
              mt={2}
              cursor="pointer"
              role="group"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Text
                fontSize="sm"
                fontWeight="500"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="brand.dark"
                _groupHover={{ color: 'brand.terracotta' }}
                transition="color 0.2s"
              >
                View My Work
              </Text>
              <Icon
                as={ArrowForwardIcon}
                color="brand.terracotta"
                transition="transform 0.2s"
                _groupHover={{ transform: 'translateX(4px)' }}
              />
            </HStack>
          </VStack>
        </GridItem>

        {/* Right: Photo */}
        <GridItem
          display="flex"
          alignItems="flex-end"
          justifyContent={{ base: 'center', lg: 'flex-end' }}
        >
          <Box
            position="relative"
            w={{ base: '280px', md: '380px', lg: '460px' }}
            h={{ base: '380px', md: '500px', lg: '600px' }}
          >
            {/* Decorative background accent */}
            <Box
              position="absolute"
              bottom="0"
              right={{ base: '50%', lg: '0' }}
              transform={{ base: 'translateX(50%)', lg: 'none' }}
              w="85%"
              h="90%"
              bg="rgba(160,82,45,0.08)"
              borderRadius="200px 200px 0 0"
              zIndex={0}
            />
            <Image
              src="/profile.jpg"
              alt="Aylin Marie"
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              h="100%"
              w="auto"
              maxW="none"
              objectFit="contain"
              objectPosition="bottom"
              zIndex={1}
              fallback={
                <Box
                  position="absolute"
                  bottom="0"
                  left="50%"
                  transform="translateX(-50%)"
                  w="100%"
                  h="100%"
                  bg="rgba(160,82,45,0.12)"
                  borderRadius="200px 200px 0 0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  zIndex={1}
                >
                  <Text color="brand.muted" fontSize="sm" textAlign="center" px={4}>
                    Add profile.jpg to /public
                  </Text>
                </Box>
              }
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}
