"use client";

import {
  Code,
  Flex,
  Heading,
  Img,
  ListItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { CodeBlock } from "./CodeBlock";
import { CodeBlocks, PropsType } from "@/Interfaces/Doc";



export const Feature = ({
  title,
  description,
  props,
  codeBlocks,
}: {
  title: string;
  description: string | React.ReactNode;
  props: PropsType[];
  codeBlocks: CodeBlocks[];
}) => {
  return (
    <VStack spacing={6} alignItems={"flex-start"}>
      <Heading as="h3" size="md" id="swapFavicon" marginTop={12}>
        <Code colorScheme="green">{title}</Code>
      </Heading>
      <Text>{description}</Text>
      <VStack spacing={4} alignItems={"flex-start"}>
        <UnorderedList>
          {props.map((prop: any) => (
            <ListItem key={prop.name} marginBottom={4}>
              <Code>{prop.name}</Code> :{" "}
              <Code colorScheme="green">{prop.type}</Code> - {prop.description}
            </ListItem>
          ))}
        </UnorderedList>
      </VStack>
      {codeBlocks.map(({ title, codeString, onReset, onRun }) => (
        <CodeBlock
          key={codeString}
          code={codeString}
					title={title}
          language="javascript"
          hasResetButton
          hasRunButton
          onReset={onReset}
          onRun={onRun}
        />
      ))}
    </VStack>
  );
};
