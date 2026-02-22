import { useState, useEffect } from "react";
import { Box, Flex, Link, HStack, IconButton, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "mailto:hello@aylinmarie.co" },
];

function OrbitalIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="10"
        stroke="var(--marie-graphite)"
        strokeWidth="1"
      />
      <circle
        cx="11"
        cy="11"
        r="5.5"
        stroke="var(--marie-graphite)"
        strokeWidth="0.75"
      />
      <circle cx="11" cy="11" r="2" fill="var(--marie-graphite)" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={1000}
      px={{ base: "6", md: "10", lg: "14" }}
      py="5"
      transition="background 0.3s ease, box-shadow 0.3s ease"
      bg={scrolled ? "rgba(245,239,237,0.96)" : "transparent"}
      style={{ backdropFilter: scrolled ? "blur(12px)" : "none" }}
      boxShadow={scrolled ? "0 1px 0 rgba(36,39,35,0.07)" : "none"}
    >
      <Flex justify="space-between" align="center" maxW="900px" mx="auto">
        {/* Left: orbital icon */}
        <Link
          href="#home"
          _hover={{ opacity: 0.6, textDecoration: "none" }}
          transition="opacity 0.2s ease"
          display="flex"
          alignItems="center"
        >
          <OrbitalIcon />
        </Link>

        {/* Center: nav links */}
        <HStack spacing="8" display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              fontSize="12px"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="var(--marie-graphite)"
              _hover={{ color: "var(--marie-clay)", textDecoration: "none" }}
              transition="color 0.2s ease"
            >
              {link.label}
            </Link>
          ))}
        </HStack>

        {/* Right: mobile toggle */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Toggle navigation"
            icon={
              mobileOpen ? (
                <CloseIcon w="3" h="3" />
              ) : (
                <HamburgerIcon w="4" h="4" />
              )
            }
            variant="ghost"
            color="var(--marie-graphite)"
            _hover={{ bg: "rgba(151,94,73,0.08)", color: "var(--marie-clay)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            size="sm"
          />
        </Box>

        {/* Desktop right spacer (mirrors icon width for centering) */}
        <Box w="22px" display={{ base: "none", md: "block" }} />
      </Flex>

      {mobileOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          mt="4"
          pb="6"
          borderTop="1px solid rgba(204,175,164,0.4)"
        >
          <VStack spacing="5" align="start" pt="6" px="2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="12px"
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="var(--marie-graphite)"
                onClick={() => setMobileOpen(false)}
                _hover={{ color: "var(--marie-clay)", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
}
