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
import { Feature } from "./Feature";

export const Examples = ({}: {}) => {
  return (
    <>
			<Feature
				title={"swapFavicon(favicon: string, options?: Object)"}
				description={<>Replace the current favicon with a new one. By using the{" "}
				<Code>when</Code> options prop, you can make it run only once or on
				blur / focus events (always). Resetting will reset the favicon to
				the original value before any tampering.</>}
				props={[
					{
						name: "favicon",
						type: "string",
						description: "The URL or emoji of the new favicon.",
					},
					{
						name: "options.when",
						type: "string",
						description: <>When to swap the favicon. Available options are <Code>now</Code>, <Code>onfocus</Code>, and <Code>onblur</Code></>
					},
					{
						name: "options.reset",
						type: "string",
						description: <>Reset the favicon if needed. Available options are <Code>none</Code>, <Code>after</Code>, <Code>onfocus</Code>, and <Code>onblur</Code></>
					},
					{
						name: "options.resetAfterMs",
						type: "number",
						description: "Used only with reset: \"after\" - The number of milliseconds to wait before resetting the favicon.",
					},
				]}
			/>
    </>
  );
};
