// src/components/Footer.js
import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const bg = useColorModeValue('#f8f2ed', '#202023');
  const color = useColorModeValue('black', 'white');

  return (
    <Box as="footer" p={4} bg={bg} color={color} textAlign="center" width="100%">
      <Text>© {new Date().getFullYear()} Abdullah Paracha</Text>
      <Text fontSize={10}> Original model ‘Littlest Tokyo’ by Glenatron, published under a Creative Commons Attribution license.</Text>
    </Box>
  );
};

export default Footer;
