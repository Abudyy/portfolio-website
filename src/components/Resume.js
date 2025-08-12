import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Resume = () => {
  return (
    <Box textAlign="center" p={4} width="100%">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        My Resume
      </Text>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
        <Box height="90vh" overflow="auto">
          <Viewer fileUrl={`${process.env.PUBLIC_URL}/Abdullah_Resume_2025_comp_b_new.pdf`} />
        </Box>
      </Worker>
    </Box>
  );
};

export default Resume;