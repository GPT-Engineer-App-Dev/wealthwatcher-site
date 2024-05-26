import { Box, Container, Flex, Heading, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex
        as="nav"
        bg="gray.800"
        color="white"
        padding="1.5rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="white">
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="white">
            Contact
          </Link>
        </HStack>
      </Flex>
      <Container maxW="container.md" mt={10}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="xl">
            Welcome to Financial Times
          </Heading>
          <Text fontSize="lg">
            Stay updated with the latest financial news and insights.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;