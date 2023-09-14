"use client";
import React from "react";
import {
  Container,
  Flex,
  Text,
  useColorMode,
  Link as ChakraLink,
  IconButton,
  Box,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { AppMenu } from "./AppMenu";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { getIconSize } from "@/Helpers/icons";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const { faIconSize, chakraIconSize } = getIconSize("lg");

  return (
    <header>
      <Container
        maxW={"container.xl"}
        paddingX={4}
        paddingY={4}
        height="header_height"
        paddingLeft={{
          base: "content_horizontal_spacing",
          lg: "content_horizontal_spacing_lg",
        }}
        paddingRight={{
          base: "content_horizontal_spacing",
          lg: "content_horizontal_spacing_lg",
        }}
      >
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          width={"full"}
          alignItems={"center"}
        >
          <Box>
            <Link href="/">
              <Logo />
            </Link>
          </Box>
          <HStack
            spacing={4}
            justifySelf={"center"}
            display={{ base: "none", md: "flex" }}
          >
            <ChakraLink as={Link} href="/docs" color="brandTextLight">
              Docs
            </ChakraLink>
            <ChakraLink as={Link} href="/about" color="brandTextLight">
              About
            </ChakraLink>
          </HStack>
          <HStack spacing={2} justifySelf={"flex-end"}>
            <ChakraLink
              href="https://github.com/MetarDev/tab-goes-brrr"
              isExternal
            >
              <IconButton
                aria-label="View tab-goes-brrr.js on github"
                variant={"ghost"}
                colorScheme="gray"
                icon={<FaGithub size={faIconSize} />}
              />
            </ChakraLink>
            <ColorModeSwitcher size={chakraIconSize} />
            <Box display={{ base: "block", md: "none" }}>
              <MobileMenu />
            </Box>
          </HStack>
        </SimpleGrid>
      </Container>
    </header>
  );
};
