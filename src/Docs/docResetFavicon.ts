import { Doc } from "@/Interfaces/Doc";
import { resetFavicon } from "tab-goes-brrr";

const exampleResetFavicon = `import { resetFavicon } from 'tab-goes-brrr';

// Resets favicon to original value (before tampering)
resetFavicon();
`; 

export const docResetFavicon: Doc = {
	title: "resetFavicon",
	functionName: "resetFavicon",
	description: 'Resets the favicon, undoing any other swapping or messing with the title done by this library.',
	codeBlocks: [
		{
			codeString: exampleResetFavicon,
			onReset: () => resetFavicon(),
			onRun: () => resetFavicon(),
		},
	],
}