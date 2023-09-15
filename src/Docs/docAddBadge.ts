import { Doc } from "@/Interfaces/Doc";
import { addBadge, resetFavicon } from "tabky-js";

const exampleAddBadge = `import { addBadge } from 'tabky-js';

addBadge({
  type: 'dot',
});
`;

const exampleAddBadgeWithCount = `import { addBadge } from 'tabky-js';

addBadge({
  type: 'count',
  count: 1,
});
`;

const exampleAddBadgeWithCountCustomFont = `import { addBadge } from 'tabky-js';

addBadge({
  type: 'count',
  count: 1,
  font: 'Inter',
});
`;

const exampleAddBadgeSmallerSize = `import { addBadge } from 'tabky-js';

addBadge({
  type: 'dot',
  size: 'sm' // xs, sm, md, lg
});
`;

const exampleAddBadgeCustomPosition = `import { addBadge } from 'tabky-js';

addBadge({
	type: 'dot',
  position: 'bottom-right',
});
`;

const exampleAddBadgeCustomDotColors = `import { addBadge } from 'tabky-js';

addBadge({
  type: 'dot',
  color: '#00FF00',
  innerDotColor: '#000',
});
`;

export const docAddBadge: Doc = {
  title: "addBadge(props: Object)",
  functionName: "addBadge",
  description:
    'Adds a badge to the current favicon. This can be used to add "you have a notification" type effect to your favicon or to indicate some other state to the user. Currently resets the favicon when called so you can only add badges to the original favicon.',
  props: [
    // position = "top-right",
    {
			name: "type",
			type: '"dot" | "count"',
			description: 'Type of badge.',
		},
    {
      name: "count",
      type: "number",
      description: 'Default: null. Count to display on the badge. Only used if type: "count".',
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg"',
      description: 'Default: "md". Size of the badge.',
    },
    {
      name: "position",
      type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',
      description: 'Default: "top-right". Position of the badge on favicon',
    },
    {
      name: "font",
      type: "string",
      description: 'Default: "sans-serif". Override font used for the count. Only used if type: "count".',
    },
    {
      name: "dotColor",
      type: "Color",
      description: 'Default: "#ff0000". Color of the badge dot. Accepts any valid CSS color.',
    },
    {
      name: "innerDotColor",
      type: "Color",
      description: 'Default: "#fff". Color of the inner badge dot. Accepts any valid CSS color. Set to same as dotColor to remove inner dot. Only used if type: "dot".',
    },
    {
      name: "countColor",
      type: "Color",
      description: 'Default: "#fff". Color of the count / number in badge. Only used if type: "count".',
    }
  ],
  codeBlocks: [
    // exampleAddBadgeCustomPosition
    // exampleAddBadgeCustomDotColors
    {
      title: "Add badge to favicon",
      codeString: exampleAddBadge,
      onReset: () => resetFavicon(),
      onRun: () => addBadge({ type: "dot" }),
    },
    {
      title: "Add badge, smaller size",
      codeString: exampleAddBadgeSmallerSize,
      onReset: () => resetFavicon(),
      onRun: () => addBadge({ type: "dot", size: "sm" }),
    },
    {
      title: "Add badge with count",
      codeString: exampleAddBadgeWithCount,
      onReset: () => resetFavicon(),
      onRun: () => addBadge({ type: "count", count: 1 }),
    },
    {
      title: "Add badge with count (custom font)",
      codeString: exampleAddBadgeWithCountCustomFont,
      onReset: () => resetFavicon(),
      onRun: () => addBadge({ type: "count", count: 1, font: "Inter" }),
    },
    {
      title: "Add badge, modify position",
      codeString: exampleAddBadgeCustomPosition,
      onReset: () => resetFavicon(),
      onRun: () => addBadge({ type: "dot", position: "bottom-right" }),
    },
    {
      title: "Add badge, custom dot colors",
      codeString: exampleAddBadgeCustomDotColors,
      onReset: () => resetFavicon(),
      onRun: () =>
        addBadge({ type: "dot", dotColor: "#00FF00", innerDotColor: "#000" }),
    },
  ],
};
