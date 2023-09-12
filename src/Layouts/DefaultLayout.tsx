'use client'
import { Container } from "@chakra-ui/react";
import React from "react";

const DefaultLayout = ({
  justifyContent = "flex-start",
  children,
}: {
  justifyContent?: string;
  children: React.ReactNode;
}) => (
  <Container
    maxW={"container.xl"}
    minHeight={{ base: "body_height", lg: "body_height_lg" }}
    display={"flex"}
    flexDirection={"column"}
    justifyContent={justifyContent}
    marginTop={{
      base: "content_vertical_spacing",
      lg: "content_vertical_spacing_lg",
    }}
    marginBottom={{
      base: "content_vertical_spacing",
      lg: "content_vertical_spacing_lg",
    }}
    paddingLeft={{
      base: "content_horizontal_spacing",
      lg: "content_horizontal_spacing_lg",
    }}
    paddingRight={{
      base: "content_horizontal_spacing",
      lg: "content_horizontal_spacing_lg",
    }}
  >
    {children}
  </Container>
);

export default DefaultLayout;
