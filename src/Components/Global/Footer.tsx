import { Box, Container, Link, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
	return (
		<footer>
			<Container
				maxW={"container.xl"}
				height="footer_height"
				paddingLeft={{
					base: "content_horizontal_spacing",
					lg: "content_horizontal_spacing_lg",
				}}
				paddingRight={{
					base: "content_horizontal_spacing",
					lg: "content_horizontal_spacing_lg",
				}}
			>
				<Link href="https://github.com/MetarDev/tabky-js/blob/main/CHANGELOG.md" isExternal color="brandTextLight">Changelog</Link>
			</Container>
		</footer>
	);
};
