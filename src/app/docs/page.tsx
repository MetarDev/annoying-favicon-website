"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Examples } from "@/Components/Examples";
import { AnchorNavigation } from "@/Components/AnchorNavigation";
import { PageHeader } from "@/Components/Global/PageHeader";
import { CodeBlock } from "@/Components/CodeBlock";

export default function Homepage() {
  return (
    <DefaultLayout justifyContent="center">
      <PageHeader title={"Docs"} />
      <VStack spacing={4} alignItems={"flex-start"} marginTop={8}>
        <Heading as="h2">Installation</Heading>
				<Text>To install tab-goes-brrr, run the following command in your terminal.</Text>
				<CodeBlock code="npm install tab-goes-brrr" language="bash" hasCopyButton={false} />
				<Heading as="h2" marginTop={16}>API</Heading>
        <Flex alignItems={"center"} gap={8}>
          <Box flex={1}>
            <Examples />
          </Box>
          <AnchorNavigation />
        </Flex>
      </VStack>
    </DefaultLayout>
  );
}
