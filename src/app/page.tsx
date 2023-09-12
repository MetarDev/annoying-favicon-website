"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";
import { PageHeader } from "@/Components/Global/PageHeader";

export default function Homepage() {
  return (
    <DefaultLayout justifyContent="center">
      <PageHeader title={"Annoying Favicon"} hasDivider={false}>
        <Text maxW="xl">
          A JS library for manipulating the favicon / title of a webpage.
        </Text>

        <Flex gap={2}>
          <Button as={Link} href="/docs">
            View Docs
          </Button>
          <Button
            as={Link}
            href="https://github.com/MetarDev/annoying-favicon"
            variant={"outline"}
          >
            <Icon as={FaGithub} marginRight={2} />
            View on Github
          </Button>
        </Flex>
      </PageHeader>
    </DefaultLayout>
  );
}
