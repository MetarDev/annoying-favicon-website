"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../../theme";
import { Header } from "@/Components/Global/Header";
import { Footer } from "@/Components/Global/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header />
        {children}
        <Footer />
      </ChakraProvider>
    </CacheProvider>
  );
}
