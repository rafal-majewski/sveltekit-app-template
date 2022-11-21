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
			rules: {
				"no-empty-function": "off",
				"@typescript-eslint/no-empty-function": "off",
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
			},
			extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
			plugins: ["@typescript-eslint"],
			env: {
				es2022: true,
				node: true,
			},
			rules: {
				"no-empty-function": "off",
				"@typescript-eslint/no-empty-function": "off",
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-argument": "off",
			},
		},
		{
			files: ["*.unit.test.ts"],
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
				"plugin:jest-dom/recommended",
				"prettier",
			],
			plugins: ["@typescript-eslint", "jest-dom"],
			env: {
				es2022: true,
				node: true,
			},
			rules: {
				"no-empty-function": "off",
				"@typescript-eslint/no-empty-function": "off",
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-argument": "off",
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
			rules: {
				"no-empty-function": "off",
			},
		},
		{
			files: ["*.test.js", "*.test.cjs", "*.test.mjs"],
			parser: "espree",
			parserOptions: {
				ecmaVersion: 13,
				sourceType: "module",
			},
			extends: ["eslint:recommended", "prettier"],
			plugins: [],
			env: {
				es2022: true,
				node: true,
			},
			rules: {
				"no-empty-function": "off",
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
			rules: {
				"no-empty-function": "off",
				"@typescript-eslint/no-empty-function": "off",
			},
		},
	],
};
