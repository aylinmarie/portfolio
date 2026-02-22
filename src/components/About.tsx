import { Box, Text, Link, VStack, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  }),
};

const otherThings = [
  { label: "Founder of OneYoungTraveler LLC", href: null },
  { label: "General Assembly Workshop Instructor", href: null },
  { label: "Squarespace Circle Member Feature", href: null },
  {
    label: "Portfolio Consultant - 2017 A3C Creator Complex Conference",
    href: null,
  },
];

export default function About() {
  return (
    <Box
      as="section"
      id="about"
      px={{ base: "6", md: "10", lg: "14" }}
      pt={{ base: "4", md: "6" }}
      pb={{ base: "20", md: "28" }}
    >
      <Box maxW="900px" mx="auto">
        {/* Indented content — offset from left like the original */}
        <Box pl={{ base: "0", md: "30%" }}>
          <VStack align="start" spacing="0">
            {/* Merhaba! Hello! */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={fadeIn}
            >
              <Box
                fontFamily="'Mulish', system-ui, sans-serif"
                fontWeight="700"
                fontSize={{ base: "32px", md: "38px", lg: "44px" }}
                lineHeight="1.2"
                color="var(--marie-graphite)"
                mb="8"
              >
                Merhaba!{" "}
                <Box
                  as="em"
                  fontFamily="'ivypresto-display', Georgia, serif"
                  fontWeight="400"
                  fontSize={{ base: "34px", md: "40px", lg: "46px" }}
                  color="var(--marie-graphite)"
                >
                  Hello!
                </Box>
              </Box>
            </motion.div>

            {/* Bio */}
            <VStack align="start" spacing="5" mb="10">
              {[
                {
                  text: "I am a software developer who enjoys harmonizing engineering and design. I specialize in design systems with a focus on accessibility. I love helping small businesses grow and found a way to do that throughout my entire tech career.",
                  delay: 0.05,
                },
                {
                  text: "I started my path in engineering as an independent Squarespace developer, moved to a creative agency that focuses on social good companies, and continued supporting small businesses as I found my way to Mailchimp where I'm currently the Engineering Tech Lead of our design system. I'm also a proud alum of General Assembly.",
                  delay: 0.1,
                },
                {
                  text: "An amateur knitter (Michelle Obama retweeted my baby's onesie!), traveler (30+ countries but who's counting), and embarking on my most exciting adventure yet – being someone's mama. Currently based in Atlanta.",
                  delay: 0.15,
                },
              ].map(({ text, delay }) => (
                <motion.div
                  key={text.slice(0, 20)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={delay}
                  variants={fadeIn}
                >
                  <Text
                    fontFamily="'Mulish', system-ui, sans-serif"
                    fontWeight="400"
                    fontSize={{ base: "14px", md: "15px" }}
                    lineHeight="1.8"
                    color="var(--marie-graphite)"
                  >
                    {text}
                  </Text>
                </motion.div>
              ))}
            </VStack>

            <Divider borderColor="var(--marie-sand)" opacity={0.5} mb="10" />

            {/* Other Things */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={fadeIn}
            >
              <Text
                fontFamily="'Mulish', system-ui, sans-serif"
                fontWeight="700"
                fontSize="15px"
                color="var(--marie-graphite)"
                mb="5"
              >
                Other Things
              </Text>
            </motion.div>

            <VStack align="start" spacing="3">
              {otherThings.map(({ label, href }, i) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={i * 0.06}
                  variants={fadeIn}
                >
                  <Box
                    fontFamily="'Mulish', system-ui, sans-serif"
                    fontWeight="400"
                    fontSize={{ base: "14px", md: "15px" }}
                    lineHeight="1.6"
                    color="var(--marie-graphite)"
                  >
                    <Box as="span" color="var(--marie-clay)" mr="2">
                      +
                    </Box>
                    {href ? (
                      <Link
                        href={href}
                        isExternal
                        color="var(--marie-clay)"
                        _hover={{ textDecoration: "underline" }}
                      >
                        {label}
                      </Link>
                    ) : (
                      <Box as="span" color="var(--marie-clay)">
                        {label}
                      </Box>
                    )}
                  </Box>
                </motion.div>
              ))}
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
