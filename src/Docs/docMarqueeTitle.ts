import { Doc } from "@/Interfaces/Doc";
import { marqueeTitle, resetTitle } from "tab-goes-brrr";

const exampleMarqueeTitle = `import { marqueeTitle } from 'annoying-title';

marqueeTitle({
	title: 'BREAKING NEWS! This is a marquee title!',
	interval: 300,
});
`;

export const docMarqueeTitle: Doc = {
	title: "marqueeTitle(props: Object)",
	functionName: "marqueeTitle",
	description: 'Marquee effect on the document title. Not really optimised. Built for fun, usage not recommended.',
	props: [
		{
			name: "title",
			type: "string",
			description: "The new document title to marquee.",
		},
		{
			name: "interval",
			type: "number",
			description: 'Default 300. How fast the title is marquee\'d in milliseconds. Used for the setInterval that scrolls the title.',
		},
	],
	codeBlocks: [
		{
			codeString: exampleMarqueeTitle,
			onReset: () => resetTitle(),
			onRun: () => marqueeTitle({ title: 'BREAKING NEWS! This is a marquee title!', interval: 250}),
		},
	],
}