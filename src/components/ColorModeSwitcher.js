// src/components/ColorModeSwitcher.js
import React from 'react';
import { useColorMode, IconButton, useColorModeValue, keyframes } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue('purple.500', 'purple.200');
  const color = useColorModeValue('white', 'black');
  const spinAnimation = `${spin} 0.5s ease-in-out`;

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color={color}
      bg={bg}
      _hover={{ bg: useColorModeValue('purple.600', 'purple.300') }}
      _active={{
        bg: useColorModeValue('purple.700', 'purple.400'),
        transform: 'scale(1.1)',
        transition: 'transform 0.2s',
        animation:  spinAnimation,
      }}
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
      {...props}
    />
  );
};

export default ColorModeSwitcher;