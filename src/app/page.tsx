"use client";
import { Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";
import { PageHeader } from "@/Components/Global/PageHeader";
import { addBadge, swapFavicon, swapTitle, marqueeTitle, resetFavicon, resetTitle } from "tabky-js";

export default function Homepage() {
  return (
    <DefaultLayout justifyContent="center">
      <PageHeader title={"😸 Tabky.js"}>
        <Text maxW="xl">
          {
            "A JS library for programmatically manipulating your website's browser tab (favicon / title)."
          }
        </Text>

        <Flex gap={2}>
          <Button as={Link} href="/docs">
            View Docs
          </Button>
          <Button
            as={Link}
            href="https://github.com/MetarDev/tabky-js"
            variant={"outline"}
          >
            <Icon as={FaGithub} marginRight={2} />
            View on Github
          </Button>
        </Flex>
      </PageHeader>
      <VStack marginTop={8} justifyContent={"center"} spacing={6}>
				<Heading as="h2">Quick demo</Heading>
				<Text maxW={"lg"} marginBottom={4}>Check your browser tab. View docs for more demos / examples.</Text>
        <Flex gap={4} justifyContent={"center"} wrap={"wrap"}>
          <Button
            onClick={() => swapFavicon({ favicon: "🎉" })}
            variant={"outline"}
						colorScheme="gray"
          >
            Swap favicon to 🎉
          </Button>
          <Button
            onClick={() => swapFavicon({ favicon: "https://nextjs.org/favicon.ico" })}
            variant={"outline"}
						colorScheme="gray"
          >
            Swap favicon to img <Image marginLeft={2} src="https://nextjs.org/favicon.ico" alt="Example favicon image, next favicon." width={"16px"} height={"16px"} />
          </Button>
          <Button
            onClick={() => addBadge({ type: "dot" })}
            variant={"outline"}
						colorScheme="gray"
          >
            Add badge 🔴
          </Button>
          <Button
            onClick={() => addBadge({ type: "count", count: 1 })}
            variant={"outline"}
						colorScheme="gray"
          >
            Add badge with count 1
          </Button>
          <Button
            onClick={() => swapTitle({ title: "New page title" })}
            variant={"outline"}
						colorScheme="gray"
          >
            Swap title
          </Button>
          <Button
            onClick={() => {
              swapFavicon({ favicon: "🎉", reset: "after" });
              swapTitle({ title: "Congratz!", reset: "after" });
            }}
            variant={"outline"}
						colorScheme="gray"
          >
            Swap favicon & title for 3s
          </Button>
          <Button
            onClick={() => {
              swapTitle({ title: "Hey, come back", when: "onblur", reset: 'onfocus' });
              swapFavicon({ favicon: '😢', when: "onblur", reset: 'onfocus' });
            }}
            variant={"outline"}
						colorScheme="gray"
          >
            Swap title + favicon on blur, reset on focus
          </Button>
          <Button
            onClick={() =>
              marqueeTitle({
                title: "BREAKING NEWS! You can now marquee your title",
              })
            }
            variant={"outline"}
						colorScheme="gray"
          >
            Marquee title
          </Button>
        </Flex>
        <Flex gap={4} justifyContent={"center"}>
          <Button
            onClick={() => resetFavicon()}
            colorScheme="red"
            variant={"outline"}
          >
            Reset Favicon
          </Button>
          <Button
            onClick={() => resetTitle()}
            colorScheme="red"
            variant={"outline"}
          >
            Reset title
          </Button>
        </Flex>
      </VStack>
    </DefaultLayout>
  );
}
