"use client";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect } from "react";
import CopyToClipboard from "./CopyToClipboard";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export const CodeBlock = ({
  title = "",
  code,
  language,
  hasCopyButton = true,
  hasRunButton = false,
  hasResetButton = false,
  onRun,
  onReset,
}: {
  title?: string;
  code: string;
  language: "javascript" | "bash";
  hasCopyButton?: boolean;
  hasRunButton?: boolean;
  hasResetButton?: boolean;
  onRun?: () => void;
  onReset?: () => void;
}) => {
  useEffect(() => {
    const languages = {
      javascript: js,
      bash: bash,
    };

    try {
      SyntaxHighlighter.registerLanguage(language, languages[language]);
    } catch (e) {
      // Ignore this as it means the language is already registered.
      // If not, worst case scenario the code block is not syntax highlighted.
      // Yes this is a hack, 100%.
    }
  }, [language]);

  const hasAnyButton = hasCopyButton || hasRunButton || hasResetButton;

  let syntaxHighlighterProps: Object = {};

  if (hasAnyButton) {
    syntaxHighlighterProps = {
      customStyle: {
        paddingBottom: "3rem",
      },
    };
  }

  return (
    <Box position={"relative"} alignSelf={"flex-start"} width={"full"}>
      {title && (
        <Heading as="h4" size="sm" marginBottom={6} marginTop={2}>
          {title}
        </Heading>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        {...syntaxHighlighterProps}
      >
        {code}
      </SyntaxHighlighter>
      <Flex position={"absolute"} bottom={4} right={4} gap={4}>
        {hasCopyButton && <CopyToClipboard toCopy={code} />}
        {hasRunButton && (
          <Button size={"sm"} colorScheme={"orange"} onClick={onRun}>
            Run
          </Button>
        )}
        {hasResetButton && (
          <Button size={"sm"} colorScheme={"red"} onClick={onReset}>
            Reset
          </Button>
        )}
      </Flex>
    </Box>
  );
};
