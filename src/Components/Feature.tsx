"use client";

import {
  Code,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Demo } from "./Demo";

interface PropsType {
	name: string;
	type: string;
	description: string|React.ReactNode;
}

export const Feature = ({ title, description, props }: {
	title: string,
	description: string|React.ReactNode,
	props: PropsType[]
}) => {
  return (
    <>
      <Heading as="h3" size="md" id="swapFavicon">
        <Code colorScheme="green">{title}</Code>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} marginTop={6}>
        <VStack spacing={4} alignItems={"flex-start"}>
          <Text>{description}</Text>
          <Heading as="h4" size="sm">
            Props
          </Heading>
          <UnorderedList>
            {props.map((prop: any) => (
              <ListItem key={prop.name}>
                <Code>{prop.name}</Code> :{" "}
                <Code colorScheme="green">{prop.type}</Code> -{" "}
                {prop.description}
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>
        <Demo />
      </SimpleGrid>
    </>
  );
};
