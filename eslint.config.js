// https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new
// https://eslint.org/blog/2022/08/new-config-system-part-1/
// https://eslint.org/blog/2022/08/new-config-system-part-2/

import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import * as typescriptEslintParser from "@typescript-eslint/parser";
import * as espreeParser from "espree";
import globals from "globals";
import prettierEslintConfig from "eslint-config-prettier";

import svelteEslintPlugin from "eslint-plugin-svelte";
import svelteEslintParser from "svelte-eslint-parser";

const eslintConfig = [
	{
		files: ["**/*.mjs", "**/*.js", "**/*.ts", "**/*.svelte"],
		languageOptions: {
			sourceType: "module",
		},
	},
	{
		files: ["**/*.cjs"],
		languageOptions: {
			sourceType: "commonjs",
		},
	},
	{
		files: ["**/*.mjs", "**/*.js", "**/*.ts", "**/*.cjs"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	{
		languageOptions: {
			ecmaVersion: 13,
			globals: {
				...globals.es2021,
				...globals.browser,
			},
		},
		rules: {
			"constructor-super": "error",
			"for-direction": "error",
			"getter-return": "error",
			"no-async-promise-executor": "error",
			"no-case-declarations": "error",
			"no-class-assign": "error",
			"no-compare-neg-zero": "error",
			"no-cond-assign": "error",
			"no-const-assign": "error",
			"no-constant-condition": "error",
			"no-control-regex": "error",
			"no-debugger": "error",
			"no-delete-var": "error",
			"no-dupe-args": "error",
			"no-dupe-class-members": "error",
			"no-dupe-else-if": "error",
			"no-dupe-keys": "error",
			"no-duplicate-case": "error",
			"no-empty": "error",
			"no-empty-character-class": "error",
			"no-empty-pattern": "error",
			"no-ex-assign": "error",
			"no-extra-boolean-cast": "error",
			"no-fallthrough": "error",
			"no-func-assign": "error",
			"no-global-assign": "error",
			"no-import-assign": "error",
			"no-inner-declarations": "error",
			"no-invalid-regexp": "error",
			"no-irregular-whitespace": "error",
			"no-loss-of-precision": "error",
			"no-misleading-character-class": "error",
			"no-new-symbol": "error",
			"no-nonoctal-decimal-escape": "error",
			"no-obj-calls": "error",
			"no-octal": "error",
			"no-prototype-builtins": "error",
			"no-redeclare": "error",
			"no-regex-spaces": "error",
			"no-self-assign": "error",
			"no-setter-return": "error",
			"no-shadow-restricted-names": "error",
			"no-sparse-arrays": "error",
			"no-this-before-super": "error",
			"no-undef": "error",
			"no-unreachable": "error",
			"no-unsafe-finally": "error",
			"no-unsafe-negation": "error",
			"no-unsafe-optional-chaining": "error",
			"no-unused-labels": "warn",
			"no-unused-vars": ["warn", {ignoreRestSiblings: true}],
			"no-useless-backreference": "error",
			"no-useless-catch": "error",
			"no-useless-escape": "error",
			"no-with": "error",
			"require-yield": "error",
			"use-isnan": "error",
			"valid-typeof": "error",
		},
	},
	{
		files: ["**/*.ts", "**/*.svelte"],
		rules: {
			"@typescript-eslint/adjacent-overload-signatures": "error",
			"@typescript-eslint/ban-ts-comment": "error",
			"@typescript-eslint/ban-types": "error",
			"no-array-constructor": "off",
			"@typescript-eslint/no-array-constructor": "error",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-extra-non-null-assertion": "error",
			"@typescript-eslint/no-inferrable-types": "error",
			"no-loss-of-precision": "off",
			"@typescript-eslint/no-loss-of-precision": "error",
			"@typescript-eslint/no-misused-new": "error",
			"@typescript-eslint/no-namespace": "error",
			"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
			"@typescript-eslint/no-non-null-assertion": "warn",
			"@typescript-eslint/no-this-alias": "error",
			"@typescript-eslint/no-unnecessary-type-constraint": "error",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": ["warn", {ignoreRestSiblings: true}],
			"@typescript-eslint/no-var-requires": "error",
			"@typescript-eslint/prefer-as-const": "error",
			"@typescript-eslint/prefer-namespace-keyword": "error",
			"@typescript-eslint/triple-slash-reference": "error",
		},
		plugins: {
			"@typescript-eslint": typescriptEslintPlugin,
		},
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: ".",
				extraFileExtensions: [".svelte"],
			},
		},
	},
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: typescriptEslintParser,
		},
	},
	{
		files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
		languageOptions: {
			parser: espreeParser,
		},
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parser: svelteEslintParser,
			parserOptions: {
				parser: typescriptEslintParser,
			},
		},
		plugins: {
			"svelte": svelteEslintPlugin,
		},
		rules: {
			"svelte/comment-directive": "error",
			"svelte/no-at-debug-tags": "warn",
			"svelte/no-at-html-tags": "error",
			"svelte/no-dupe-else-if-blocks": "error",
			"svelte/no-dupe-style-properties": "error",
			"svelte/no-dynamic-slot-name": "error",
			"svelte/no-inner-declarations": "error",
			"svelte/no-not-function-handler": "error",
			"svelte/no-object-in-text-mustaches": "error",
			"svelte/no-shorthand-style-property-overrides": "error",
			"svelte/no-unknown-style-directive-property": "error",
			"svelte/no-unused-svelte-ignore": "error",
			"svelte/system": "error",
		},
	},
	{
		ignores: [
			"**/node_modules/**",
			"build/**",
			".svelte-kit/**",
			"pnpm-lock.yaml",
			"package-lock.json",
			"yarn.lock",
			"dist/**",
			"coverage/**",
			"**/.vscode/**",
			"coverage_report/**",
			"**/.git/**",
		],
	},
	prettierEslintConfig,
];

export default eslintConfig;
