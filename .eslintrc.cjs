module.exports = {
	root: true,
	overrides: [
		{
			files: ["*.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				sourceType: "module",
				ecmaVersion: 13,
				extraFileExtensions: [".svelte"],
			},
			extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
			plugins: ["@typescript-eslint"],
			env: {
				es2022: true,
				node: true,
			},
		},
		{
			files: ["*.test.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				sourceType: "module",
				ecmaVersion: 13,
				extraFileExtensions: [".svelte"],
			},
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:jest/recommended",
				"prettier",
			],
			plugins: ["@typescript-eslint", "jest"],
			env: {
				es2022: true,
				node: true,
			},
		},
		{
			files: ["*.js", "*.cjs", "*.mjs"],
			parser: "espree",
			parserOptions: {
				ecmaVersion: 13,
				sourceType: "module",
			},
			extends: ["eslint:recommended", "prettier"],
			env: {
				es2022: true,
				node: true,
			},
		},
		{
			files: ["*.test.js", "*.test.cjs", "*.test.mjs"],
			parser: "espree",
			parserOptions: {
				ecmaVersion: 13,
				sourceType: "module",
			},
			extends: ["eslint:recommended", "plugin:jest/recommended", "prettier"],
			plugins: ["jest"],
			env: {
				es2022: true,
				node: true,
			},
		},
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
			extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
			plugins: ["svelte3", "@typescript-eslint"],
			env: {
				es2022: true,
				browser: true,
			},
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				sourceType: "module",
				ecmaVersion: 13,
				extraFileExtensions: [".svelte"],
			},
			settings: {
				"svelte3/typescript": require("typescript"),
			},
		},
	],
};
