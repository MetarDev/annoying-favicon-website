import { Doc } from "@/Interfaces/Doc";
import { swapFavicon, resetFavicon } from "tab-goes-brrr";

const exampleSwapFavicon = `import { swapFavicon } from 'tab-goes-brrr';

swapFavicon({
	favicon: '🎉', // favicon or img URL
});
`; 

const exampleSwapFaviconOnBlurResetOnFocus = `import { swapFavicon } from 'tab-goes-brrr';

swapFavicon({
	favicon: '👋',
	when: 'onblur',
	reset: 'onfocus',
});
`; 

const exampleSwapFaviconResetAfter = `import { swapFavicon } from 'tab-goes-brrr';

swapFavicon({
	favicon: '⏳',
	when: 'now',
	reset: 'after',
	resetAfter: 3000,
});
`; 

export const docSwapFavicon: Doc = {
	title: "swapFavicon(props: Object)",
	functionName: "swapFavicon",
	description: 'Replace the current favicon with a new one. By using the "when" options prop, you can make it run only once or on blur / focus events (always). Resetting will reset the favicon to the original value before any tampering.',
	props: [
		{
			name: "favicon",
			type: "string",
			description: "The URL or emoji of the new favicon.",
		},
		{
			name: "when",
			type: "string",
			description: 'Default "now". When to swap the favicon. Available options are "now" "onfocus" "onblur"',
		},
		{
			name: "reset",
			type: "string",
			description: 'Reset the favicon if needed. Available options are "none" "after" "onfocus" "onblur"',
		},
		{
			name: "resetAfterMs",
			type: "number",
			description: 'Used only with reset: "after" - The number of milliseconds to wait before resetting the favicon.',
		},
	],
	codeBlocks: [
		{
			title: "Swap favicon to emoji",
			codeString: exampleSwapFavicon,
			onReset: () => resetFavicon(),
			onRun: () => swapFavicon({ favicon: '🎉'}),
		},
		{
			title: "Swap favicon to emoji, reset after 3 seconds",
			codeString: exampleSwapFaviconResetAfter,
			onReset: () => resetFavicon(),
			onRun: () => swapFavicon({ favicon: '⏳', reset: 'after' }),
		},
		{
			title: "Swap favicon on blur, reset on focus",
			codeString: exampleSwapFaviconOnBlurResetOnFocus,
			onReset: () => resetFavicon(),
			onRun: () => swapFavicon({ favicon: '👋', when: 'onblur', reset: 'onfocus' }),
		},
	],
}