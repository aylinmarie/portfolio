import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <Box
      as="footer"
      px={{ base: "6", md: "10", lg: "14" }}
      py={{ base: "10", md: "12" }}
      borderTop="1px solid"
      borderColor="var(--marie-sand)"
      style={{ borderTopColor: "rgba(204,175,164,0.4)" }}
    >
      <Box maxW="900px" mx="auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify="flex-end"
            align={{ base: "start", sm: "center" }}
            gap={{ base: "2", sm: "4" }}
          >
            <Link
              href="mailto:hello@aylinmarie.co"
              fontFamily="'Mulish', system-ui, sans-serif"
              fontWeight="400"
              fontSize="14px"
              color="var(--marie-graphite)"
              _hover={{ color: "var(--marie-clay)", textDecoration: "none" }}
              transition="color 0.2s ease"
            >
              hello@aylinmarie.co
            </Link>

            <Text
              aria-hidden="true"
              color="var(--marie-sand)"
              display={{ base: "none", sm: "block" }}
              fontSize="14px"
            >
              |
            </Text>

            <Link
              href="https://pinterest.com"
              isExternal
              rel="noopener noreferrer"
              fontFamily="'Mulish', system-ui, sans-serif"
              fontWeight="400"
              fontSize="14px"
              color="var(--marie-graphite)"
              _hover={{ color: "var(--marie-clay)", textDecoration: "none" }}
              transition="color 0.2s ease"
            >
              Pinterest
            </Link>

            <Text
              aria-hidden="true"
              color="var(--marie-sand)"
              display={{ base: "none", sm: "block" }}
              fontSize="14px"
            >
              |
            </Text>

            <Link
              href="https://instagram.com"
              isExternal
              rel="noopener noreferrer"
              fontFamily="'Mulish', system-ui, sans-serif"
              fontWeight="400"
              fontSize="14px"
              color="var(--marie-graphite)"
              _hover={{ color: "var(--marie-clay)", textDecoration: "none" }}
              transition="color 0.2s ease"
            >
              Instagram
            </Link>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
}
