"use client";
import React from "react";
import { Divider, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, VStack } from "@chakra-ui/react";
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import Link from "next/link";

export const MobileMenu = ({}: {}) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem as={Link} href="/docs">
          Docs
        </MenuItem>
        <MenuItem as={Link} href="/about">
          About
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
