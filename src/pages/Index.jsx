import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex
        as="nav"
        bg="gray.800"
        color="white"
        padding={4}
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
      <Container maxW="container.lg" mt={10}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="xl">
            Welcome to Financial Times
          </Heading>
          <Text fontSize="lg">
            Stay updated with the latest news and insights from around the world.
          </Text>
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Latest Articles
            </Heading>
            <VStack spacing={4} align="start">
              <Box>
                <Heading as="h4" size="sm">
                  Article 1
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  Article 2
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  Article 3
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;