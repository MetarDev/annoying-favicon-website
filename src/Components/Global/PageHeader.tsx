"use client";
import React from "react";
import { getIconSize } from "@/Helpers/icons";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  VStack,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export const PageHeader = ({
  children = null,
  title,
  hasDivider = true,
}: {
  children?: React.ReactNode;
  title: string;
  hasDivider?: boolean;
}) => {
  return (
    <VStack spacing={{ base: 8, md: 12 }} alignItems={"center"}>
      <Heading variant={"main-heading"} size={"3xl"} as="h1">
        {title}
      </Heading>
      {children}
      {hasDivider && <Divider />}
    </VStack>
  );
};
