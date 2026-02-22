import { Box, Text, Link, VStack } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const animation = shouldReduceMotion ? {} : fadeIn;

  return (
    <Box
      as="section"
      id="work"
      px={{ base: "6", md: "10", lg: "14" }}
      pt={{ base: "10", md: "12" }}
      pb={{ base: "16", md: "20" }}
    >
      <Box maxW="900px" mx="auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          variants={animation}
        >
          <Text
            as="h2"
            fontFamily="'Mulish', system-ui, sans-serif"
            fontWeight="700"
            fontSize="13px"
            letterSpacing="0.04em"
            color="var(--marie-graphite)"
            mb="4"
          >
            Work Experience
          </Text>
        </motion.div>

        <VStack align="start" spacing="1">
          {[
            {
              text: "Staff Software Engineer → Mailchimp, 2019 - now",
              delay: 0.05,
            },
            { text: "Frontend Engineer → Banyan, 2017 - 2019", delay: 0.1 },
          ].map(({ text, delay }) => (
            <motion.div
              key={text}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={delay}
              variants={animation}
            >
              <Text
                fontFamily="'Mulish', system-ui, sans-serif"
                fontWeight="400"
                fontSize={{ base: "13px", md: "14px" }}
                color="var(--marie-graphite)"
                lineHeight="1.7"
              >
                {text}
              </Text>
            </motion.div>
          ))}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.15}
            variants={animation}
          >
            <Link
              href="https://linkedin.com"
              isExternal
              rel="noopener noreferrer"
              fontFamily="'Mulish', system-ui, sans-serif"
              fontWeight="400"
              fontSize={{ base: "13px", md: "14px" }}
              color="var(--marie-clay)"
              _hover={{ textDecoration: "underline" }}
              mt="1"
              display="block"
            >
              LinkedIn
            </Link>
          </motion.div>
        </VStack>
      </Box>
    </Box>
  );
}
