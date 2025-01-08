import React from 'react';
import { Box, Text, VStack, Link, useColorModeValue, Image, SimpleGrid } from '@chakra-ui/react';

const projects = [
  {
    title: 'Book Recommendation Site',
    description: 'A machine learning-based book recommender system with Flask deployment.',
    image: `${process.env.PUBLIC_URL}/images/book-recommender front page.jpeg`,
    link: 'https://github.com/Abudyy/book-recommendation-system',
  },
  {
    title: 'Organ Classification using ML',
    description: 'Classified medical images from the OrganAMNIST dataset. The models include (MLPs) and (CNNs), trained to predict organ types based on grayscale images.',
    image: `${process.env.PUBLIC_URL}/images/organs_grayscale.png`,
    link: 'https://github.com/Abudyy/CNN-MLP-organ-classification',
  },
  {
    title: 'Portfolio Website',
    description: 'The personal portfolio website you are currently viewing.',
    image: `${process.env.PUBLIC_URL}/images/personal_website_front.jpeg`,
    link: 'https://github.com/Abudyy/portfolio-website',
  },
  {
    title: 'EDA and Regressions',
    description: 'Performed EDA on Infrared thermography temperatures dataset and CBC diabetes indicators dataset. Applied linear and logistic regression from scratch and performed various testing',
    image: `${process.env.PUBLIC_URL}/images/heat and regression expanded.jpeg`,
    link: 'https://github.com/Abudyy/EDA-and-Regressions',
  },
];

const Portfolio = () => {
  // Hooks should be at the top level, cause we kept getting error if not
  const bg = useColorModeValue('#f8f2ed', '#202023');
  const color = useColorModeValue('black', 'white');
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bg} color={color} textAlign="center" p={4} width="100%">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">My Portfolio</Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} width="100%" maxWidth="800px">
          {projects.map((project, index) => (
            <Box
              key={index}
              p={4}
              bg={cardBg} 
              borderRadius="md"
              shadow="md"
              _hover={{ shadow: 'lg', transform: 'scale(1.05)', transition: '0.3s' }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width="100%"
                height="150px"
                objectFit="contain"
                borderRadius="md"
                mb={4}
              />
              <Text fontSize="xl" fontWeight="bold" mb={2}>{project.title}</Text>
              <Text mb={4}>{project.description}</Text>
              <Link href={project.link} isExternal color="teal.500" fontWeight="bold">
                View on GitHub
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Portfolio;
