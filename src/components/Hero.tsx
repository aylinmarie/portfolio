import { Box, Text, Link, VStack, HStack, Image } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import heroImg from "../assets/aylin-atkins-lifestyle-57.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.75 },
  }),
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const animation = shouldReduceMotion ? {} : fadeUp;

  return (
    <Box
      as="section"
      id="home"
      pt={{ base: "120px", md: "140px" }}
      pb={{ base: "14", md: "16" }}
      px={{ base: "6", md: "10", lg: "14" }}
    >
      <Box maxW="1400px" mx="auto">
        <HStack
          align="start"
          spacing={{ base: 6, md: 8, lg: 12 }}
          flexDir={{ base: "column", lg: "row" }}
        >
          {/* Left Column - Text */}
          <VStack align="start" spacing={{ base: 6, md: 8 }} flex={1}>
            {/* Name */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={animation}
            >
              <Box
                as="h1"
                fontFamily="'Playfair Display', Georgia, serif"
                fontWeight="400"
                fontSize={{ base: "64px", sm: "72px", md: "88px", lg: "100px" }}
                lineHeight="1.0"
                letterSpacing="-0.01em"
                color="var(--marie-clay)"
              >
                Aylin Marie
              </Box>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.15}
              variants={animation}
            >
              <Text
                fontFamily="'Mulish', system-ui, sans-serif"
                fontSize={{ base: "20px", md: "24px", lg: "28px" }}
                lineHeight="1.45"
                color="var(--marie-graphite)"
                maxW={{ base: "full", md: "560px" }}
              >
                front end engineer based in Atlanta empowering teams with
                thoughtful design systems. building at{" "}
                <Link
                  href="https://mailchimp.com"
                  isExternal
                  rel="noopener noreferrer"
                  color="var(--marie-clay)"
                  _hover={{ textDecoration: "underline" }}
                >
                  Mailchimp
                </Link>
                .
              </Text>
            </motion.div>
          </VStack>

          {/* Right Column - Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={animation}
            style={{ flex: 1, width: "100%" }}
          >
            <Image
              src={heroImg}
              alt="Portrait of Aylin Atkins"
              borderRadius="md"
              w="100%"
              h="auto"
              objectFit="cover"
            />
          </motion.div>
        </HStack>
      </Box>
    </Box>
  );
}
