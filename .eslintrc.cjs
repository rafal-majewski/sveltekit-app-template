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
			},
			extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
			plugins: ["@typescript-eslint"],
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
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:jest/recommended",
				"prettier",
			],
			plugins: ["@typescript-eslint", "jest"],
		},
		{
			files: ["*.js"],
			parser: "espree",
			parserOptions: {
				ecmaVersion: 13,
				sourceType: "module",
			},
			extends: ["eslint:recommended", "prettier"],
		},
		{
			files: ["*.test.js"],
			parser: "espree",
			parserOptions: {
				ecmaVersion: 13,
				sourceType: "module",
			},
			extends: ["eslint:recommended", "plugin:jest/recommended", "prettier"],
			plugins: ["jest"],
		},
	],
	settings: {},
	env: {
		es2022: true,
		node: true,
	},
};
