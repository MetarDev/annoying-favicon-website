"use client";
import React from "react";
import { getIconSize } from "@/Helpers/icons";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Box, Flex, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const AppMenu = () => {
  const { faIconSize, chakraIconSize } = getIconSize("lg");
  return (
    <Flex alignItems={"center"} gap={1}>
      <ChakraLink as={Link} href="/docs">Docs</ChakraLink>
      <ChakraLink href="https://github.com/MetarDev/annoying-favicon" isExternal>
        <IconButton
          aria-label="View annoying-favicon.js on github"
          variant={"ghost"}
          colorScheme="gray"
          icon={<FaGithub size={faIconSize} />}
        />
      </ChakraLink>
      <ColorModeSwitcher size={chakraIconSize} />
    </Flex>
  );
};
