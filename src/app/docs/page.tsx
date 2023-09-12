"use client";
import {
  Box,
  Button,
  Code,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";
import { Examples } from "@/Components/Examples";
import { AnchorNavigation } from "@/Components/AnchorNavigation";
import { Demo } from "@/Components/Demo";
import { PageHeader } from "@/Components/Global/PageHeader";

export default function Homepage() {
  return (
    <DefaultLayout justifyContent="center">
			<PageHeader title={"Docs"} />
      <Flex alignItems={"center"} marginTop={16} gap={8}>
        <Box flex={1}>
          <Examples />
        </Box>
        <AnchorNavigation />
      </Flex>
    </DefaultLayout>
  );
}
