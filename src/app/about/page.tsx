"use client";
import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { PageHeader } from "@/Components/Global/PageHeader";

export default function Homepage() {
  return (
    <DefaultLayout justifyContent="center">
      <PageHeader title={"About"} />
      <VStack
        spacing={4}
        alignItems={"flex-start"}
        marginTop={8}
        maxWidth={"xl"}
        margin={"auto"}
        paddingTop={16}
      >
        <Text>
          Tabsy.js is a library for allowing you to manipulate your {"browser's"}
          tab content (favicon and title) with a similar API / functionality for
          both favicons and titles.
        </Text>
        <Text>
          It allows you to build micro-interactions (dynamically and / or
          temporarily change your favicon / title depending on what action user
          takes on the page), show your {"app's"} status in favicon (with badges /
          notification markers), change favicon / title when user goes to a
          different tab and more.
        </Text>
        <Heading as="h2" marginTop={16}>
          Maintained by:
        </Heading>
        <Text>
          Maintained by by Ivan Grginov. For all inquiries please contact me on
          X.
        </Text>
        <UnorderedList>
          <ListItem>
            <Text>
              Twitter:{" "}
              <Link href="https://twitter.com/MetarDev" isExternal>
                https://twitter.com/MetarDev
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              GitHub:{" "}
              <Link href="https://github.com/MetarDev" isExternal>
                https://github.com/MetarDev
              </Link>
            </Text>
          </ListItem>
        </UnorderedList>
        <Heading as="h2" marginTop={16}>
          Suggestions / Feedback / Issues
        </Heading>
        <UnorderedList>
          <ListItem>
            <Text>
              For all library-specific issues please open an issue on{" "}
              <Link
                href="https://github.com/MetarDev/tabky-js/issues"
                isExternal
              >
                {"library's github"}
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              For all website-specific issues please open an issue on{" "}
              <Link
                href="https://github.com/MetarDev/tabky-js-website/issues"
                isExternal
              >
                {"website's github"}
              </Link>
            </Text>
          </ListItem>
        </UnorderedList>

        <Heading as="h2" marginTop={16}>
          License
        </Heading>
        <Text>
          This library is MIT licensed. See github repo for more info.
        </Text>
      </VStack>
    </DefaultLayout>
  );
}
