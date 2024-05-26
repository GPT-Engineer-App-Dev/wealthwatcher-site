import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Life & Arts</Link>
        </HStack>
      </Flex>
      <Box as="main" p={4}>
        <VStack spacing={4} align="stretch">
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">Top Story</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">Latest News</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">Market Updates</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;