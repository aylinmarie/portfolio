import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'

interface Thing {
  title: string
  description: string
  link?: string
}

const things: Thing[] = [
  {
    title: 'Writing',
    description:
      'Essays and reflections on creativity, culture, and navigating life as a first-generation American.',
  },
  {
    title: 'Photography',
    description:
      'Documenting everyday beauty through film photography — urban textures, soft light, quiet moments.',
  },
  {
    title: 'Reads',
    description:
      'Currently reading: "How to Do Nothing" by Jenny Odell. A running list of books that changed the way I think.',
  },
  {
    title: 'Side Projects',
    description:
      'Occasional newsletters, a zine I made in 2021, and a slow-moving ceramics hobby.',
  },
]

export default function OtherThings() {
  return (
    <Box
      id="other"
      px={{ base: 6, md: 12, lg: 20 }}
      py={{ base: 16, md: 24 }}
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
            Other Things
          </Text>
        </GridItem>

        {/* Content */}
        <GridItem>
          <VStack align="flex-start" spacing={10}>
            <Heading
              as="h2"
              fontFamily="heading"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="400"
              color="brand.dark"
            >
              Beyond the brief
            </Heading>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={8} w="100%">
              {things.map((thing) => (
                <VStack key={thing.title} align="flex-start" spacing={2}>
                  <Text
                    fontSize="xs"
                    fontWeight="600"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    color="brand.terracotta"
                  >
                    {thing.title}
                  </Text>
                  <Text fontSize="sm" lineHeight="1.8" color="brand.muted">
                    {thing.description}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  )
}
