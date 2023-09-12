import { useColorMode } from "@chakra-ui/react";

export const Logo = ({ size = 42 }) => {
  const { colorMode } = useColorMode();

  const defaultRowColor = colorMode === "dark" ? "var(--chakra-colors-green-100)" : "var(--chakra-colors-green-900)";
  const highlightedRowColor = colorMode === "dark" ? "var(--chakra-colors-green-400)" : "var(--chakra-colors-green-400)";

  return (
		'😒'
  );
};
