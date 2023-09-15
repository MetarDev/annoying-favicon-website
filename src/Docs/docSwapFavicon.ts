import { Doc } from "@/Interfaces/Doc";
import { swapFavicon, resetFavicon } from "tabky-js";

const exampleSwapFavicon = `import { swapFavicon } from 'tabky-js';

swapFavicon({
  favicon: '🎉', // favicon or img URL
});
`;

const exampleSwapFaviconWithoutCompatibilityMode = `import { swapFavicon } from 'tabky-js';

swapFavicon({
  favicon: '🎉', // favicon or img URL,
  emojiCompatibilityMode: false, // this will draw the emoji as SVG instead of using the canvas.
});
`;

const exampleSwapFaviconOnBlurResetOnFocus = `import { swapFavicon } from 'tabky-js';

swapFavicon({
  favicon: '👋',
  when: 'onblur',
  reset: 'onfocus',
});
`;

const exampleSwapFaviconResetAfter = `import { swapFavicon } from 'tabky-js';

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
  description:
    'Replace the current favicon with a new one. By using the "when" options prop, you can make it run only once or on blur / focus events (always). Resetting will reset the favicon to the original value before any tampering.',
  props: [
    {
      name: "favicon",
      type: "string",
      description: "The URL or emoji of the new favicon.",
    },
    {
      name: "when",
      type: '"now" | "onfocus" | "onblur"',
      description: 'Default "now". When to swap the favicon.',
    },
    {
      name: "reset",
      type: '"none" | "after" | "onfocus" | "onblur"',
      description:
        "Reset the favicon if needed to the original favicon before any tampering.",
    },
    {
      name: "resetAfterMs",
      type: "number",
      description:
        'The number of milliseconds to wait before resetting the favicon. Only used with reset: "after"',
    },
  ],
  codeBlocks: [
    {
      title: "Swap favicon to emoji, draw as PNG",
      codeString: exampleSwapFavicon,
      onReset: () => resetFavicon(),
      onRun: () => swapFavicon({ favicon: "🎉" }),
    },
    {
      title: "Swap favicon to emoji, draw as SVG",
      codeString: exampleSwapFaviconWithoutCompatibilityMode,
      onReset: () => resetFavicon(),
      onRun: () =>
        swapFavicon({ favicon: "🎉", emojiCompatibilityMode: false }),
    },
    {
      title: "Swap favicon to emoji, reset after 3 seconds",
      codeString: exampleSwapFaviconResetAfter,
      onReset: () => resetFavicon(),
      onRun: () => swapFavicon({ favicon: "⏳", reset: "after" }),
    },
    {
      title: "Swap favicon on blur, reset on focus",
      codeString: exampleSwapFaviconOnBlurResetOnFocus,
      onReset: () => resetFavicon(),
      onRun: () =>
        swapFavicon({ favicon: "👋", when: "onblur", reset: "onfocus" }),
    },
  ],
};
