import kebabCase from "lodash.kebabcase";

/**
 * Converts a title to an anchor. For example Swap Favicon -> swap-favicon
 *
 * @param title Title to convert to anchor
 */
export const anchorFromTitle = (title: string) => {
	return kebabCase(title);
}