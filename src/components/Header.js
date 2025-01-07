import React from 'react';
import { Flex, Text, Link, useColorModeValue, Image, HStack, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';

const Header = () => {
  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(44, 44, 48, 0.8)');
  const color = useColorModeValue('black', 'white');

  const { colorMode } = useColorMode();

  // Fneed to use the process.env path for github pages, or else it wont show </3
  const linkedInIcon = colorMode === 'light'
    ? `${process.env.PUBLIC_URL}/images/linked-in-LIGHT-MODE-removebg-preview.png`
    : `${process.env.PUBLIC_URL}/images/linkedIN_LOGO_WHITE-removebg-preview.png`;

  const githubIcon = colorMode === 'light'
    ? `${process.env.PUBLIC_URL}/images/github-LIGHTMODE-removebg-preview.png`
    : `${process.env.PUBLIC_URL}/images/github-remove-bg-DARKpng-removebg-preview.png`;

  return (
    <Flex
      as="nav"
      p={3}
      bg={bg}
      color={color}
      alignItems="center"
      justifyContent="center"
      width="100%"
      position="fixed"
      top="0"
      zIndex="1000"
      backdropFilter="blur(3px)"
    >
      <Flex alignItems="center" justifyContent="space-between" width="100%" maxWidth="1200px" flexWrap="wrap">
        <HStack spacing={2} alignItems="center">
          <Text fontWeight="bold" mx={3} fontSize="xl">Abdullah Paracha</Text>
          <Link as={RouterLink} to="/resume" mx={6}>Resume</Link>
          <Link as={RouterLink} to="/portfolio" mx={6}>Portfolio</Link>
          <Link href="https://www.linkedin.com/in/abdullah-paracha-9a5763277/" mx={2} display="flex" alignItems="center" isExternal>
            <Image src={linkedInIcon} alt="LinkedIn Icon" boxSize="27px" mr={1} />
            LinkedIn
          </Link>
          <Link href="https://github.com/Abudyy" mx={2} display="flex" alignItems="center" isExternal>
            <Image src={githubIcon} alt="GitHub Icon" boxSize="27px" mr={1} />
            GitHub
          </Link>
          <ColorModeSwitcher />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
