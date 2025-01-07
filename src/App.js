import React from 'react';
import { ChakraProvider, Flex, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Portfolio from './components/Portfolio'; // Create and import  Portfolio component
import Footer from './components/Footer';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Flex direction="column" minHeight="100vh">
          <Header />
          <Flex flex="1" direction="column" align="center" justify="center" width="100%" pt={20}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/portfolio" element={<Portfolio />} /> {/* Add  new Portfolio route */}
            </Routes>
          </Flex>
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
