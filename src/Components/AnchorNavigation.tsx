"use client";

import { Box, Code, Heading, List, ListItem, VStack, Link } from "@chakra-ui/react";

import { functionDocs } from "@/Docs";
import { anchorFromTitle } from "@/Helpers/anchor";
import { Fragment } from "react";

export const AnchorNavigation = ({ base = "/docs" }: { base?: string }) => {
  return (
    <Box
      position={"sticky"}
      as="aside"
      flex={0}
      flexBasis={"1/4"}
      justifySelf={"flex-start"}
      alignSelf={"flex-start"}
      top={16}
			display={{ base: "none", md: "block" }}
    >
      <Heading as="h2" size="sm" marginBottom={4}>
        On this page:
      </Heading>
      <List fontSize={"sm"}>
        <VStack spacing={2} alignItems={"flex-start"}>
          {functionDocs.map(({ functionName, codeBlocks }) => {
            return (
              <Fragment key={functionName}>
                <ListItem color={"brandTextLighter"}>
                  <Link href={`${base}#${anchorFromTitle(functionName)}`} color={"brandTextLighter"}>
                    {functionName}
                  </Link>
                </ListItem>

                {codeBlocks.filter((doc) => doc.title).map(({ title }) => (
                  <ListItem key={title} marginLeft={4}>
                    <Link href={`${base}#${anchorFromTitle(title || '')}`} color={"brandTextLighter"}>
											{title}
										</Link>
                  </ListItem>
                ))}
              </Fragment>
            );
          })}
        </VStack>
      </List>
    </Box>
  );
};
