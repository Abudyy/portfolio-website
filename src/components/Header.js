import React from 'react';
import { Flex, Text, Link, useColorModeValue, Image, HStack, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';

const Header = () => {
  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(44, 44, 48, 0.8)');
  const color = useColorModeValue('black', 'white');

  const { colorMode } = useColorMode();

  const linkedInIcon = colorMode === 'light' ? '/images/linked in LIGHT MODE-removebg-preview.png' : '/images/linkedIN_LOGO_WHITE-removebg-preview.png';
  const sourceIcon = colorMode === 'light' ? '/images/github-LIGHTMODE-removebg-preview.png' : '/images/github-remove-bg-DARKpng-removebg-preview.png';

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
      backdropFilter="blur(2.5px)"
    >
      <Flex alignItems="center" justifyContent="center" width="100%" maxWidth="1200px" flexWrap="wrap">
        <HStack spacing={[2, 4, 6]} alignItems="center" wrap="wrap">
          {/* Wrap Abdullah Paracha as root page so that it goes when clicked */}
          <Link as={RouterLink} to="/" mx={[1, 2, 3]}>
            <Text fontWeight="bold" mx={[1, 2, 3]} fontSize="xl">
              Abdullah Paracha
            </Text>
          </Link>
          <Link as={RouterLink} to="/resume" mx={[1, 2, 3]}>Resume</Link>
          <Link as={RouterLink} to="/portfolio" mx={[1, 2, 3]}>Portfolio</Link>
          <Link href="https://www.linkedin.com/in/abdullah-paracha-9a5763277/" mx={[1, 2, 3]} display="flex" alignItems="center">
            <Image src={linkedInIcon} alt="LinkedIn Icon" boxSize="27px" mr={1} />
            LinkedIn
          </Link>
          <Link href="https://github.com/Abudyy" mx={[1, 2, 3]} display="flex" alignItems="center">
            <Image src={sourceIcon} alt="Source Icon" boxSize="27px" mr={1} />
            Github
          </Link>
          <ColorModeSwitcher />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
