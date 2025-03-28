import { Box, Button, Flex, Heading, Image, Text, ChakraProvider } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <Box w="100vw" minH="100vh" bg="#F8F9FA" p={6} textAlign="center">
      {/* Navbar */}
      <Flex as="nav" justify="space-between" align="center" maxW="1200px" mx="auto">
        <Image src="/logo.png" alt="Vida AI Logo" h={8} />
        <Flex gap={6}>
          <Text cursor="pointer">Home</Text>
          <Text cursor="pointer">Use Cases</Text>
          <Text cursor="pointer">APIs</Text>
          <Text cursor="pointer">Pricing</Text>
          <Text cursor="pointer">Login</Text>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box mt={12}>
        <Heading as="h1" size="2xl" fontWeight="bold">
          Faster, Safer Credit Decisions
        </Heading>
        <Heading as="h1" size="2xl" fontWeight="bold" color="purple.500">
          with AI-Powered Accuracy
        </Heading>
        <Text maxW="600px" mx="auto" mt={4} color="gray.600">
          Get instant credit approvals, reliable identity verification, and secure
          repayment collections. Power your lending and Buy Now, Pay Later
          offerings with AI-driven decisions trusted by banks, lenders, and
          merchants.
        </Text>
        <Button mt={6} colorScheme="purple" size="lg" px={8}>
          Get started →
        </Button>
      </Box>

      {/* Image Section */}
      <Box mt={16}>
        <Image
          src="/dashboard-preview.png"
          alt="Dashboard Preview"
          borderRadius="lg"
          shadow="lg"
        />
      </Box>
    </Box>
  );
};

export default App;
