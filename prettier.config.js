/** @satisfies {import("prettier").Options} */
const prettierConfig = {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: false,
	endOfLine: "lf",
	plugins: ["prettier-plugin-svelte"],
	printWidth: 100,
	quoteProps: "as-needed",
	semi: true,
	singleQuote: false,
	svelteAllowShorthand: true,
	svelteIndentScriptAndStyle: true,
	svelteSortOrder: "options-scripts-markup-styles",
	trailingComma: "all",
	useTabs: true,
};

export default prettierConfig;
