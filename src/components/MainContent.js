import React from 'react';
import { Box, Text, VStack, useColorModeValue, Link as ChakraLink } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ThreeScene from './ThreeScene';

// Motion components
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(ChakraLink);

const MainContent = () => {
  const bg = useColorModeValue('#f8f2ed', '#202023');
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg={bg} color={color} textAlign="center" p={4} width="100%">
      <VStack spacing={8}>
        {/* 3D Model Section */}
        <MotionBox
          position="relative"
          width="100%"
          maxWidth="800px"
          height="650px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ThreeScene />
          <MotionBox
            position="absolute"
            bottom="-20px"
            left="20%"
            transform="translateX(-50%)"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <MotionText fontSize="2xl" fontWeight="bold">
              Abdullah Paracha
            </MotionText>
            <MotionText
              fontSize="lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Computer Science and Biology Student (Developer / Designer)
            </MotionText>
          </MotionBox>
        </MotionBox>

        {/* Bio Section */}
        <MotionBox
          textAlign="left"
          width="100%"
          maxWidth="800px"
          p={4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <MotionText
            fontSize="xl"
            fontWeight="bold"
            borderBottom="2px"
            display="inline-block"
            mb={4}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Bio
          </MotionText>
          <MotionText
            mb={9}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            
          Hi! I’m Abdullah, a fourth-year Computer Science and Biology student in Montreal. I love solving problems with data and building creative projects in web development and machine learning. Being fluent in English, Urdu, and Arabic helps me connect with different communities. I'm always excited to learn new things, work on innovative ideas, and collaborate with others to make meaningful contributions.
          </MotionText>

          {/* Add button with an animation */}
          <Box textAlign="center" mb={6}>
            <MotionButton
              as={RouterLink}
              to="/portfolio"
              p={4}
              px={6}
              mt={6}
              borderRadius="md"
              fontSize="lg"
              fontWeight="bold"
              bgGradient="linear(to-r, teal.400, teal.500)"
              color="white"
              shadow="md"
              _hover={{
                bgGradient: 'linear(to-r, teal.500, teal.600)',
                shadow: 'lg',
                textDecoration: 'none',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }} // Delayed the animation slightly
            >
              My Portfolio
            </MotionButton>
          </Box>

          {/* Interests Section */}
          <MotionText
            fontSize="xl"
            fontWeight="bold"
            borderBottom="2px"
            display="inline-block"
            mb={4}
            mt={4}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Interests
          </MotionText>
          <MotionText
            mb={4}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            3D design, AI, Machine Learning, Web Development, Football, Cricket, Table Tennis
          </MotionText>
          
          {/* Education Section */}
          <MotionText
            mt={8}
            fontSize="xl"
            fontWeight="bold"
            borderBottom="2px"
            display="inline-block"
            mb={4}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Education
          </MotionText>
          <MotionText
            mb={4}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            McGill University, B.Sc. Computer Science and Biology 2026
          </MotionText>  

          {/* Contact Section */}
          <MotionText
            mt={8}
            fontSize="xl"
            display="inline-block"
            borderBottom="2px"
            fontWeight="bold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
          >
            Contact
          </MotionText>
          <MotionBox
            mt={3}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
          >
            <Box as="span" mr={2}>
              abdullahfparacha14@gmail.com
            </Box>
          </MotionBox>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default MainContent;
