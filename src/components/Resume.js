import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Resume = () => {
  return (
    <Box textAlign="center" p={4} width="100%">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        My Resume
      </Text>
      <iframe
        src="/Abdullah_Resume_2025_comp_b.pdf"
        title="Resume"
        style={{ width: '100%', height: '90vh', border: 'none' }}
      />
    </Box>
  );
};

export default Resume;