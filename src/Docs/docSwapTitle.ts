import { Doc } from "@/Interfaces/Doc";
import { swapTitle, resetTitle } from "tab-goes-brrr";

const exampleSwapTitle = `import { swapTitle } from 'annoying-title';

swapTitle({
	title: 'New page title',
});
`; 

const exampleSwapTitleResetAfter = `import { swapTitle } from 'annoying-title';

swapTitle({
	title: 'Congratz! You did a thing!',
	when: 'now',
	reset: 'after',
	resetAfter: 3000,
});
`; 

const exampleSwapTitleOnBlurResetOnFocus = `import { swapTitle } from 'annoying-title';

swapTitle({
	title: 'Hey, come back!',
	when: 'onblur',
	reset: 'onfocus',
});
`; 

export const docSwapTitle: Doc = {
	title: "swapTitle(props: Object)",
	description: 'Replace the current title with a new one. By using the "when" options prop, you can make it run only once or on blur / focus events (always). Resetting will reset the title to the original value before any tampering.',
	props: [
		{
			name: "title",
			type: "string",
			description: "The new document title (document.title).",
		},
		{
			name: "when",
			type: "string",
			description: 'Default "now". When to swap the title. Available options are "now" "onfocus" "onblur"',
		},
		{
			name: "reset",
			type: "string",
			description: 'Reset the title if needed. Available options are "none" "after" "onfocus" "onblur"',
		},
		{
			name: "resetAfterMs",
			type: "number",
			description: 'Used only with reset: "after" - The number of milliseconds to wait before resetting the title.',
		},
	],
	codeBlocks: [
		{
			title: "Swap title",
			codeString: exampleSwapTitle,
			onReset: () => resetTitle(),
			onRun: () => swapTitle({ title: 'New page title'}),
		},
		{
			title: "Swap title, reset after 3 seconds",
			codeString: exampleSwapTitleResetAfter,
			onReset: () => resetTitle(),
			onRun: () => swapTitle({ title: 'Congratz! You did a thing!', reset: 'after' }),
		},
		{
			title: "Swap title on blur, reset on focus",
			codeString: exampleSwapTitleOnBlurResetOnFocus,
			onReset: () => resetTitle(),
			onRun: () => swapTitle({ title: 'Hey, come back!', when: 'onblur', reset: 'onfocus' }),
		},
	],
}