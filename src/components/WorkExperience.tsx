import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Link,
} from '@chakra-ui/react'

interface Job {
  company: string
  role: string
  period: string
  description: string
  url?: string
}

const jobs: Job[] = [
  {
    company: 'Mailchimp',
    role: 'Content Strategist',
    period: '2022 — Present',
    description:
      'Crafting data-driven email campaigns and lifecycle marketing programs that drive customer engagement and retention across the Mailchimp platform.',
    url: 'https://mailchimp.com',
  },
  {
    company: 'Freelance',
    role: 'Digital Marketing Consultant',
    period: '2020 — 2022',
    description:
      'Partnered with early-stage startups and small businesses to build content strategies, social media presence, and brand identity from the ground up.',
  },
  {
    company: 'Agency',
    role: 'Marketing Coordinator',
    period: '2018 — 2020',
    description:
      'Coordinated multi-channel campaigns for clients across fashion, beauty, and lifestyle verticals. Managed editorial calendars and influencer relationships.',
  },
]

export default function WorkExperience() {
  return (
    <Box
      id="projects"
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
            Experience
          </Text>
        </GridItem>

        {/* Jobs */}
        <GridItem>
          <VStack spacing={0} align="stretch">
            {jobs.map((job, i) => (
              <Box key={job.company}>
                <Grid
                  templateColumns={{ base: '1fr', sm: '1fr auto' }}
                  gap={2}
                  py={8}
                  _hover={{ '& .company-name': { color: 'brand.terracotta' } }}
                  transition="all 0.2s"
                >
                  <VStack align="flex-start" spacing={2}>
                    <Heading
                      as="h3"
                      fontFamily="heading"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="400"
                      color="brand.dark"
                      className="company-name"
                      transition="color 0.2s"
                    >
                      {job.url ? (
                        <Link href={job.url} isExternal _hover={{ textDecoration: 'none' }}>
                          {job.company}
                        </Link>
                      ) : (
                        job.company
                      )}
                    </Heading>
                    <Text fontSize="sm" color="brand.terracotta" fontWeight="500">
                      {job.role}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="brand.muted"
                      lineHeight="1.8"
                      maxW="560px"
                    >
                      {job.description}
                    </Text>
                  </VStack>

                  <HStack align="flex-start" pt={1}>
                    <Text
                      fontSize="xs"
                      color="brand.muted"
                      letterSpacing="0.05em"
                      whiteSpace="nowrap"
                    >
                      {job.period}
                    </Text>
                  </HStack>
                </Grid>
                {i < jobs.length - 1 && (
                  <Divider borderColor="rgba(44,44,44,0.1)" />
                )}
              </Box>
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  )
}
