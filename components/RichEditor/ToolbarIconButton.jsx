import { IconButton } from "@chakra-ui/react";

export default function ToolbarIconButton({ isActive, onToggle, icon }) {
  return (
    <IconButton
      onClick={onToggle}
      icon={icon}
      margin='0.5'
      aria-label="Toggle Bold" // Accessibility
      size="sm"
      colorScheme={isActive ? "blue" : "gray"}
      bg={isActive ? "blue.500" : "gray.200"}
      _hover={{ bg: isActive ? "blue.400" : "gray.300" }}
      _active={{ transform: "scale(0.95)" }}
    />
  );
}

