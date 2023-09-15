import { Doc } from "@/Interfaces/Doc";
import { swapTitle, resetTitle } from "tabky-js";

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
  title: "swapTitle(props: Object): void",
  functionName: "swapTitle",
  description:
    'Replace the current title with a new one. By using the "when" options prop, you can make it run only once or on blur / focus events (always). Resetting will reset the title to the original value before any tampering.',
  props: [
    {
      name: "title",
      type: "string",
      description: "The new document title (document.title).",
    },
    {
      name: "when",
      type: '"now" | "onfocus" | "onblur"',
      description: 'Default "now". When to swap the title.',
    },
    {
      name: "reset",
      type: '"none" | "after" | "onfocus" | "onblur"',
      description:
        "Reset the title if needed to the original document title before any tampering.",
    },
    {
      name: "resetAfterMs",
      type: "number",
      description:
        'Used only with reset: "after" - The number of milliseconds to wait before resetting the title.',
    },
  ],
  codeBlocks: [
    {
      title: "Swap title now",
      codeString: exampleSwapTitle,
      onReset: () => resetTitle(),
      onRun: () => swapTitle({ title: "New page title" }),
    },
    {
      title: "Swap title, reset after 3 seconds",
      codeString: exampleSwapTitleResetAfter,
      onReset: () => resetTitle(),
      onRun: () =>
        swapTitle({ title: "Congratz! You did a thing!", reset: "after" }),
    },
    {
      title: "Swap title on blur, reset on focus",
      codeString: exampleSwapTitleOnBlurResetOnFocus,
      onReset: () => resetTitle(),
      onRun: () =>
        swapTitle({
          title: "Hey, come back!",
          when: "onblur",
          reset: "onfocus",
        }),
    },
  ],
};
