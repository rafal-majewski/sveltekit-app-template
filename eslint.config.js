// https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new
// https://eslint.org/blog/2022/08/new-config-system-part-1/
// https://eslint.org/blog/2022/08/new-config-system-part-2/

// @ts-expect-error - Satisfying TypeSript here would actually cause ESLint to load the config incorrectly.
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
// @ts-expect-error - Needs Node 16 module resolution, but we can't use that because of SvelteKit.
import * as typescriptEslintParser from "@typescript-eslint/parser";
// @ts-expect-error - No types available.
import importEslintPlugin from "eslint-plugin-import";
import * as svelteEslintPlugin from "eslint-plugin-svelte";
// @ts-expect-error - No types available.
import * as espreeParser from "espree";
import * as svelteEslintParser from "svelte-eslint-parser";

export default [
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
		languageOptions: {
			ecmaVersion: 13,
		},
		plugins: {
			"import": importEslintPlugin,
		},
		rules: {
			// Possible Problems

			"array-callback-return": "off",
			"constructor-super": "error",
			"for-direction": "error",
			"getter-return": "error",
			"no-async-promise-executor": "error",
			"no-await-in-loop": "off",
			"no-class-assign": "error",
			"no-compare-neg-zero": "error",
			"no-cond-assign": "error",
			"no-const-assign": "error",
			"no-constant-binary-expression": "error",
			"no-constant-condition": "error",
			"no-constructor-return": "error",
			"no-control-regex": "off",
			"no-debugger": "error",
			"no-dupe-args": "error",
			"no-dupe-class-members": "error",
			"no-dupe-else-if": "error",
			"no-dupe-keys": "error",
			"no-duplicate-case": "error",
			"no-duplicate-imports": ["error", {"includeExports": true}],
			"no-empty-character-class": "error",
			"no-empty-pattern": "error",
			"no-ex-assign": "error",
			"no-fallthrough": "off",
			"no-func-assign": "error",
			"no-import-assign": "error",
			"no-inner-declarations": ["error", "both"],
			"no-invalid-regexp": "error",
			"no-irregular-whitespace": "error",
			"no-loss-of-precision": "error",
			"no-misleading-character-class": "error",
			"no-new-native-nonconstructor": "error",
			"no-new-symbol": "error",
			"no-obj-calls": "error",
			"no-promise-executor-return": "error",
			"no-prototype-builtins": "error",
			"no-self-assign": "error",
			"no-self-compare": "error",
			"no-setter-return": "error",
			"no-sparse-arrays": "error",
			"no-template-curly-in-string": "off",
			"no-this-before-super": "error",
			// We use TypeScript for that.
			"no-undef": "off",
			"no-unexpected-multiline": "error",
			"no-unmodified-loop-condition": "error",
			"no-unreachable": "error",
			"no-unreachable-loop": "error",
			"no-unsafe-finally": "error",
			"no-unsafe-negation": "error",
			"no-unsafe-optional-chaining": "error",
			"no-unused-private-class-members": "warn",
			"no-unused-vars": [
				"warn",
				{"vars": "all", "args": "all", "caughtErrors": "all", "ignoreRestSiblings": false},
			],
			"no-use-before-define": [
				"error",
				{"functions": true, "classes": true, "variables": true, "allowNamedExports": false},
			],
			"no-useless-backreference": "error",
			"require-atomic-updates": "error",
			"use-isnan": "error",
			"valid-typeof": "error",

			// Suggestions

			"accessor-pairs": "error",
			"arrow-body-style": "off",
			"block-scoped-var": "error",
			"camelcase": "off",
			"capitalized-comments": "off",
			"class-methods-use-this": "error",
			"complexity": "off",
			"consistent-return": "error",
			"consistent-this": "off",
			"curly": ["warn", "all"],
			"default-case": "off",
			"default-case-last": "off",
			"default-param-last": "off",
			"dot-notation": "off",
			"eqeqeq": ["error", "always", {"null": "ignore"}],
			"func-name-matching": "off",
			"func-names": "off",
			"func-style": "off",
			"grouped-accessor-pairs": "error",
			"guard-for-in": "off",
			"id-denylist": "off",
			"id-length": "off",
			"id-match": "off",
			"init-declarations": ["error", "always"],
			"logical-assignment-operators": "off",
			"max-classes-per-file": ["error", 1],
			"max-depth": "off",
			"max-lines": "off",
			"max-lines-per-function": "off",
			"max-nested-callbacks": "off",
			"max-params": "off",
			"max-statements": "off",
			"multiline-comment-style": "off",
			"new-cap": "off",
			"no-alert": "off",
			"no-array-constructor": "error",
			"no-bitwise": "off",
			"no-caller": "error",
			"no-case-declarations": "off",
			"no-confusing-arrow": "off",
			"no-console": "off",
			"no-continue": "off",
			"no-delete-var": "error",
			"no-div-regex": "off",
			"no-else-return": ["error", {"allowElseIf": false}],
			"no-empty": "error",
			"no-empty-function": ["error", {"allow": []}],
			"no-empty-static-block": "error",
			"no-eq-null": "off",
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-extra-boolean-cast": ["error", {"enforceForLogicalOperands": true}],
			"no-extra-label": "error",
			"no-extra-semi": "off",
			"no-floating-decimal": "error",
			"no-global-assign": "error",
			"no-implicit-coercion": "error",
			"no-implicit-globals": "error",
			"no-implied-eval": "error",
			"no-inline-comments": "off",
			"no-invalid-this": "off",
			"no-iterator": "error",
			"no-label-var": "error",
			"no-labels": "error",
			"no-lone-blocks": "error",
			"no-lonely-if": "error",
			"no-loop-func": "error",
			"no-magic-numbers": "off",
			"no-mixed-operators": "error",
			"no-multi-assign": ["error", {"ignoreNonDeclaration": false}],
			"no-multi-str": "error",
			"no-negated-condition": "error",
			"no-nested-ternary": "off",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-object": "off",
			"no-new-wrappers": "error",
			"no-nonoctal-decimal-escape": "error",
			"no-octal": "error",
			"no-octal-escape": "error",
			"no-param-reassign": ["error", {"props": false}],
			"no-plusplus": "off",
			"no-proto": "error",
			"no-redeclare": ["error", {"builtinGlobals": true}],
			"no-regex-spaces": "off",
			"no-restricted-exports": "off",
			"no-restricted-globals": "off",
			"no-restricted-imports": "off",
			"no-restricted-properties": "off",
			"no-restricted-syntax": "off",
			"no-return-assign": ["error", "always"],
			"no-script-url": "error",
			"no-sequences": ["error", {"allowInParentheses": false}],
			"no-shadow": [
				"error",
				{
					"builtinGlobals": true,
					"hoist": "all",
					"ignoreOnInitialization": true,
					"allow": ["event", "screen", "_"],
				},
			],
			"no-shadow-restricted-names": "error",
			"no-ternary": "off",
			"no-throw-literal": "error",
			"no-undef-init": "error",
			"no-undefined": "off",
			"no-underscore-dangle": [
				"error",
				{
					"allow": [],
					"allowAfterThis": false,
					"allowAfterSuper": false,
					"allowAfterThisConstructor": false,
					"enforceInMethodNames": false,
					"enforceInClassFields": false,
					"allowInArrayDestructuring": false,
					"allowInObjectDestructuring": false,
					"allowFunctionParams": false,
				},
			],
			"no-unneeded-ternary": ["error", {"defaultAssignment": false}],
			"no-unused-expressions": [
				"warn",
				{
					"allowShortCircuit": false,
					"allowTernary": false,
					"allowTaggedTemplates": false,
					"enforceForJSX": true,
				},
			],
			"no-unused-labels": "warn",
			"no-useless-call": "error",
			"no-useless-catch": "warn",
			"no-useless-computed-key": ["warn", {"enforceForClassMembers": true}],
			"no-useless-concat": "warn",
			"no-useless-constructor": "warn",
			"no-useless-escape": "warn",
			"no-useless-rename": [
				"warn",
				{
					"ignoreDestructuring": false,
					"ignoreImport": false,
					"ignoreExport": false,
				},
			],
			"no-useless-return": "error",
			"no-var": "error",
			"no-void": ["error", {"allowAsStatement": false}],
			"no-warning-comments": "off",
			"no-with": "error",
			"object-shorthand": [
				"error",
				"always",
				{
					"avoidQuotes": false,
					"ignoreConstructors": false,
					"avoidExplicitReturnArrows": false,
				},
			],
			"one-var": ["warn", "never"],
			"one-var-declaration-per-line": "off",
			"operator-assignment": ["error", "always"],
			"prefer-arrow-callback": ["error", {"allowNamedFunctions": false, "allowUnboundThis": false}],
			"prefer-const": ["warn", {"destructuring": "any", "ignoreReadBeforeAssign": false}],
			"prefer-destructuring": [
				"error",
				{
					"VariableDeclarator": {"array": true, "object": true},
					"AssignmentExpression": {"array": true, "object": true},
				},
				{"enforceForRenamedProperties": false},
			],
			"prefer-exponentiation-operator": "error",
			"prefer-named-capture-group": "error",
			"prefer-numeric-literals": "error",
			"prefer-object-has-own": "error",
			"prefer-object-spread": "error",
			"prefer-promise-reject-errors": ["error", {"allowEmptyReject": false}],
			"prefer-regex-literals": ["error", {"disallowRedundantWrapping": true}],
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			"prefer-template": "error",
			"quote-props": "off",
			"radix": ["error", "always"],
			"require-await": "error",
			"require-unicode-regexp": "error",
			"require-yield": "error",
			"sort-imports": "off",
			"sort-keys": "off",
			"sort-vars": "off",
			"spaced-comment": ["error", "always"],
			"strict": "off", // TypeScript has strict mode
			"symbol-description": "error",
			"vars-on-top": "error",
			"yoda": ["warn", "never", {"exceptRange": false, "onlyEquality": false}],

			// eslint-plugin-import

			"import/export": "error",
			"import/no-deprecated": "off", // Doesn't work correctly with TypeScript.
			"import/no-empty-named-blocks": "error",
			"import/no-extraneous-dependencies": "off", // Doesn't work correctly with SvelteKit.
			"import/no-mutable-exports": "error",
			"import/no-named-as-default": "off", // Doesn't work correctly with TypeScript.
			"import/no-named-as-default-member": "off", // Doesn't work correctly with TypeScript.
			"import/no-unused-modules": "off", // Doesn't work correctly.
			"import/no-amd": "error",
			"import/no-commonjs": "off", // The Prettier config uses CommonJS.
			"import/no-import-module-exports": ["error", {"exceptions": []}],
			"import/no-nodejs-modules": "off",
			"import/unambiguous": "error",
			"import/default": "off", // Doesn't work correctly with TypeScript.
			"import/named": "error",
			"import/namespace": "off", // Doesn't work correctly with TypeScript.
			"import/no-absolute-path": ["error", {"esmodule": true, "commonjs": true, "amd": true}],
			"import/no-cycle": [
				"error",
				{
					"maxDepth": Infinity,
					"ignoreExternal": false,
					"allowUnsafeDynamicCyclicDependency": false,
				},
			],
			"import/no-dynamic-require": "error",
			"import/no-internal-modules": "off",
			"import/no-relative-packages": "off",
			"import/no-relative-parent-imports": "off",
			"import/no-restricted-paths": "off",
			"import/no-self-import": "error",
			"import/no-unresolved": "off",
			"import/no-useless-path-segments": ["warn", {"noUselessIndex": true, "commonjs": true}],
			"import/no-webpack-loader-syntax": "error",
			"import/consistent-type-specifier-style": "off", // TypeScript will handle this.
			"import/dynamic-import-chunkname": "off",
			"import/exports-last": "warn",
			"import/extensions": "off", // TypeScript will handle this.
			"import/first": "warn",
			"import/group-exports": "off",
			"import/max-dependencies": "off",
			"import/newline-after-import": [
				"warn",
				{"count": 1, "exactCount": false, "considerComments": false},
			],
			"import/no-anonymous-default-export": "off",
			"import/no-default-export": "warn",
			"import/no-duplicates": ["warn", {"considerQueryString": false, "prefer-inline": true}],
			"import/no-named-default": "error",
			"import/no-named-export": "off",
			"import/no-namespace": "off",
			"import/no-unassigned-import": ["error", {"allow": []}],
			"import/order": [
				"warn",
				{
					"groups": [],
					"pathGroups": [],
					"distinctGroup": false,
					"pathGroupsExcludedImportTypes": [],
					"newlines-between": "never",
					"alphabetize": {"order": "asc", "orderImportKind": "asc", "caseInsensitive": false},
					"warnOnUnassignedImports": true,
				},
			],
			"import/prefer-default-export": "off",
		},
	},
	{
		files: ["**/*.ts", "**/*.svelte"],
		rules: {
			// Supported Rules

			"@typescript-eslint/adjacent-overload-signatures": "error",
			"@typescript-eslint/array-type": ["error", {"default": "array"}],
			"@typescript-eslint/await-thenable": "error",
			"@typescript-eslint/ban-ts-comment": "error",
			"@typescript-eslint/ban-tslint-comment": "error",
			"@typescript-eslint/ban-types": "error",
			"@typescript-eslint/class-literal-property-style": ["error", "fields"],
			"@typescript-eslint/consistent-generic-constructors": "off",
			"@typescript-eslint/consistent-indexed-object-style": ["warn", "index-signature"],
			"@typescript-eslint/consistent-type-assertions": "off",
			"@typescript-eslint/consistent-type-definitions": "off",
			"@typescript-eslint/consistent-type-exports": [
				"error",
				{"fixMixedExportsWithInlineTypeSpecifier": true},
			],
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{"prefer": "type-imports", "fixStyle": "separate-type-imports"},
			],
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-member-accessibility": ["error", {"accessibility": "explicit"}],
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/member-delimiter-style": "off",
			"@typescript-eslint/member-ordering": "off",
			"@typescript-eslint/method-signature-style": "off",
			"@typescript-eslint/naming-convention": "off",
			"@typescript-eslint/no-base-to-string": "error",
			"@typescript-eslint/no-confusing-non-null-assertion": "error",
			"@typescript-eslint/no-confusing-void-expression": "error",
			"@typescript-eslint/no-duplicate-enum-values": "error",
			"@typescript-eslint/no-duplicate-type-constituents": "error",
			"@typescript-eslint/no-dynamic-delete": "error",
			"@typescript-eslint/no-empty-interface": ["error", {"allowSingleExtends": true}],
			"@typescript-eslint/no-explicit-any": [
				"error",
				{"fixToUnknown": false, "ignoreRestArgs": false},
			],
			"@typescript-eslint/no-extra-non-null-assertion": "error",
			"@typescript-eslint/no-extraneous-class": [
				"error",
				{
					"allowConstructorOnly": false,
					"allowEmpty": false,
					"allowStaticOnly": false,
					"allowWithDecorator": false,
				},
			],
			"@typescript-eslint/no-floating-promises": [
				"error",
				{"ignoreVoid": false, "ignoreIIFE": false},
			],
			"@typescript-eslint/no-for-in-array": "error",
			"@typescript-eslint/no-import-type-side-effects": "error",
			"@typescript-eslint/no-inferrable-types": [
				"error",
				{"ignoreParameters": false, "ignoreProperties": false},
			],
			"@typescript-eslint/no-invalid-void-type": [
				"error",
				{"allowAsThisParameter": false, "allowInGenericTypeArguments": true},
			],
			"@typescript-eslint/no-meaningless-void-operator": ["error", {"checkNever": true}],
			"@typescript-eslint/no-misused-new": "error",
			"@typescript-eslint/no-misused-promises": "error",
			"@typescript-eslint/no-mixed-enums": "error",
			"@typescript-eslint/no-namespace": [
				"error",
				{"allowDeclarations": false, "allowDefinitionFiles": false},
			],
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
			"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-redundant-type-constituents": "error",
			"@typescript-eslint/no-require-imports": "error",
			"@typescript-eslint/no-this-alias": "error",
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": [
				"error",
				{
					"allowComparingNullableBooleansToTrue": false,
					"allowComparingNullableBooleansToFalse": false,
				},
			],
			"@typescript-eslint/no-unnecessary-condition": [
				"error",
				{
					"allowConstantLoopConditions": false,
					"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
				},
			],
			"@typescript-eslint/no-unnecessary-qualifier": "error",
			"@typescript-eslint/no-unnecessary-type-arguments": "error",
			"@typescript-eslint/no-unnecessary-type-assertion": "error",
			"@typescript-eslint/no-unnecessary-type-constraint": "error",
			"@typescript-eslint/no-unsafe-argument": "error",
			"@typescript-eslint/no-unsafe-assignment": "error",
			"@typescript-eslint/no-unsafe-call": "error",
			"@typescript-eslint/no-unsafe-declaration-merging": "error",
			"@typescript-eslint/no-unsafe-enum-comparison": "error",
			"@typescript-eslint/no-unsafe-member-access": "error",
			"@typescript-eslint/no-unsafe-return": "error",
			"@typescript-eslint/no-useless-empty-export": "error",
			"@typescript-eslint/no-var-requires": "error",
			"@typescript-eslint/non-nullable-type-assertion-style": "error",
			"@typescript-eslint/parameter-properties": [
				"error",
				{"allow": [], "prefer": "class-property"},
			],
			"@typescript-eslint/prefer-as-const": "error",
			"@typescript-eslint/prefer-enum-initializers": "error",
			"@typescript-eslint/prefer-for-of": "error",
			"@typescript-eslint/prefer-function-type": "error",
			"@typescript-eslint/prefer-includes": "error",
			"@typescript-eslint/prefer-literal-enum-member": [
				"error",
				{"allowBitwiseExpressions": false},
			],
			"@typescript-eslint/prefer-namespace-keyword": "error",
			"@typescript-eslint/prefer-nullish-coalescing": [
				"error",
				{
					"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
					"ignoreConditionalTests": false,
					"ignoreTernaryTests": false,
					"ignoreMixedLogicalExpressions": false,
					// "ignorePrimitives": {
					// 	"bigint": false,
					// 	"boolean": false,
					// 	"number": false,
					// 	"string": false,
					// },
				},
			],
			"@typescript-eslint/prefer-optional-chain": [
				"error",
				// {
				// 	"allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing": false,
				// 	"checkAny": true,
				// 	"checkUnknown": true,
				// 	"checkString": true,
				// 	"checkNumber": true,
				// 	"checkBoolean": true,
				// 	"checkBigInt": true,
				// 	"requireNullish": false,
				// },
			],
			"@typescript-eslint/prefer-readonly": ["error", {"onlyInlineLambdas": false}],
			"@typescript-eslint/prefer-readonly-parameter-types": "off",
			"@typescript-eslint/prefer-reduce-type-parameter": "error",
			"@typescript-eslint/prefer-regexp-exec": "error",
			"@typescript-eslint/prefer-return-this-type": "error",
			"@typescript-eslint/prefer-string-starts-ends-with": "error",
			"@typescript-eslint/prefer-ts-expect-error": "error",
			"@typescript-eslint/promise-function-async": [
				"error",
				{
					"allowAny": true,
					"allowedPromiseNames": [],
					"checkArrowFunctions": true,
					"checkFunctionDeclarations": true,
					"checkFunctionExpressions": true,
					"checkMethodDeclarations": true,
				},
			],
			"@typescript-eslint/require-array-sort-compare": ["error", {"ignoreStringArrays": false}],
			"@typescript-eslint/restrict-plus-operands": [
				"error",
				{
					"allowAny": false,
					// "allowBoolean": false,
					// "allowNullish": false,
					// "allowNumberAndString": false,
					// "allowRegExp": false,
					// "skipCompoundAssignments": false,
				},
			],
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{
					"allowAny": false,
					"allowBoolean": false,
					"allowNever": false,
					"allowNullish": false,
					"allowNumber": false,
					"allowRegExp": false,
				},
			],
			"@typescript-eslint/sort-type-constituents": "off",
			"@typescript-eslint/strict-boolean-expressions": [
				"error",
				{
					"allowAny": false,
					"allowNullableBoolean": false,
					"allowNullableEnum": false,
					"allowNullableNumber": false,
					"allowNullableObject": false,
					"allowNullableString": false,
					"allowNumber": false,
					"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
					"allowString": false,
				},
			],
			"@typescript-eslint/switch-exhaustiveness-check": "off",
			"@typescript-eslint/triple-slash-reference": [
				"error",
				{"path": "never", "types": "never", "lib": "never"},
			],
			"@typescript-eslint/type-annotation-spacing": "off",
			"@typescript-eslint/typedef": [
				"error",
				{
					"arrayDestructuring": false,
					"arrowParameter": false,
					"memberVariableDeclaration": false,
					"objectDestructuring": false,
					"parameter": false,
					"propertyDeclaration": false,
					"variableDeclaration": false,
					"variableDeclarationIgnoreFunction": false,
				},
			],
			"@typescript-eslint/unbound-method": ["error", {"ignoreStatic": false}],
			"@typescript-eslint/unified-signatures": [
				"error",
				{"ignoreDifferentlyNamedParameters": false},
			],

			// Extension Rules

			"block-spacing": "off",
			"@typescript-eslint/block-spacing": "off",
			"brace-style": "off",
			"@typescript-eslint/brace-style": "off",
			// "class-methods-use-this": "off",
			// "@typescript-eslint/class-methods-use-this": [
			// 	"error",
			// 	{"ignoreOverrideMethods": false, "ignoreClassesThatImplementAnInterface": false},
			// ],
			"comma-dangle": "off",
			"@typescript-eslint/comma-dangle": "off",
			"comma-spacing": "off",
			"@typescript-eslint/comma-spacing": "off",
			"default-param-last": "off",
			"@typescript-eslint/default-param-last": "off",
			"dot-notation": "off",
			"@typescript-eslint/dot-notation": [
				"error",
				{
					"allowPrivateClassPropertyAccess": false,
					"allowProtectedClassPropertyAccess": false,
					"allowIndexSignaturePropertyAccess": false,
				},
			],
			"func-call-spacing": "off",
			"@typescript-eslint/func-call-spacing": "off",
			"indent": "off",
			"@typescript-eslint/indent": "off",
			"init-declarations": "off",
			"@typescript-eslint/init-declarations": ["error", "always"],
			"key-spacing": "off",
			"@typescript-eslint/key-spacing": "off",
			"keyword-spacing": "off",
			"@typescript-eslint/keyword-spacing": "off",
			"lines-around-comment": "off",
			"@typescript-eslint/lines-around-comment": "off",
			"lines-between-class-members": "off",
			"@typescript-eslint/lines-between-class-members": "off",
			"no-array-constructor": "off",
			"@typescript-eslint/no-array-constructor": "error",
			"no-dupe-class-members": "off",
			"@typescript-eslint/no-dupe-class-members": "error",
			"no-empty-function": "off",
			"@typescript-eslint/no-empty-function": ["error", {"allow": []}],
			"no-extra-parens": "off",
			"@typescript-eslint/no-extra-parens": "off",
			"no-extra-semi": "off",
			"@typescript-eslint/no-extra-semi": "off",
			"no-implied-eval": "off",
			"@typescript-eslint/no-implied-eval": "error",
			"no-invalid-this": "off",
			"@typescript-eslint/no-invalid-this": "off",
			"no-loop-func": "off",
			"@typescript-eslint/no-loop-func": "error",
			"no-loss-of-precision": "off",
			"@typescript-eslint/no-loss-of-precision": "error",
			"no-magic-numbers": "off",
			"@typescript-eslint/no-magic-numbers": "off",
			"no-redeclare": "off",
			"@typescript-eslint/no-redeclare": [
				"error",
				{"builtinGlobals": true, "ignoreDeclarationMerge": false},
			],
			"no-restricted-imports": "off",
			"@typescript-eslint/no-restricted-imports": "off",
			"no-shadow": "off",
			"@typescript-eslint/no-shadow": [
				"error",
				{
					"builtinGlobals": true,
					"hoist": "all",
					"ignoreOnInitialization": true,
					"ignoreTypeValueShadow": false,
					"ignoreFunctionTypeParameterNameValueShadow": false,
					"allow": ["event", "screen"],
				},
			],
			"no-throw-literal": "off",
			"@typescript-eslint/no-throw-literal": [
				"error",
				{
					"allowThrowingAny": false,
					"allowThrowingUnknown": true,
				},
			],
			"no-unused-expressions": "off",
			"@typescript-eslint/no-unused-expressions": [
				"warn",
				{
					"allowShortCircuit": false,
					"allowTernary": false,
					"allowTaggedTemplates": false,
					"enforceForJSX": true,
				},
			],
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{"vars": "all", "args": "all", "caughtErrors": "all", "ignoreRestSiblings": false},
			],
			"no-use-before-define": "off",
			"@typescript-eslint/no-use-before-define": [
				"error",
				{
					"functions": true,
					"classes": true,
					"variables": true,
					"allowNamedExports": false,
					"enums": true,
					"typedefs": true,
					"ignoreTypeReferences": false,
				},
			],
			"no-useless-constructor": "off",
			"@typescript-eslint/no-useless-constructor": "error",
			"object-curly-spacing": "off",
			"@typescript-eslint/object-curly-spacing": "off",
			"padding-line-between-statements": "off",
			"@typescript-eslint/padding-line-between-statements": "off",
			"quotes": "off",
			"@typescript-eslint/quotes": "off",
			"require-await": "off",
			"@typescript-eslint/require-await": "error",
			"return-await": "off",
			"@typescript-eslint/return-await": "off",
			"semi": "off",
			"@typescript-eslint/semi": "off",
			"space-before-blocks": "off",
			"@typescript-eslint/space-before-blocks": "off",
			"space-before-function-paren": "off",
			"@typescript-eslint/space-before-function-paren": "off",
			"space-infix-ops": "off",
			"@typescript-eslint/space-infix-ops": "off",

			// eslint-plugin-import

			"import/named": "off", // TypeScript has this functionality.
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
			"svelte/infinite-reactive-loop": "error",
			"svelte/no-dom-manipulating": "error",
			"svelte/no-dupe-else-if-blocks": "error",
			"svelte/no-dupe-on-directives": "error",
			"svelte/no-dupe-style-properties": "error",
			"svelte/no-dupe-use-directives": "error",
			"svelte/no-dynamic-slot-name": "error",
			"svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
			"svelte/no-not-function-handler": "error",
			"svelte/no-object-in-text-mustaches": "error",
			// "svelte/no-reactive-reassign": ["error", {"props": true}],
			"svelte/no-shorthand-style-property-overrides": "error",
			"svelte/no-store-async": "error",
			"svelte/no-unknown-style-directive-property": [
				"error",
				{/* "ignoreProperties": [], */ "ignorePrefixed": false},
			],
			"svelte/require-store-callbacks-use-set-param": "error",
			"svelte/require-store-reactive-access": "error",
			"svelte/valid-compile": ["error", {"ignoreWarnings": false}],
			"svelte/valid-prop-names-in-kit-pages": "error",
			"svelte/no-at-html-tags": "error",
			"svelte/no-target-blank": [
				"error",
				{
					"allowReferrer": false,
					"enforceDynamicLinks": "always",
				},
			],
			"svelte/block-lang": [
				"error",
				{
					"enforceScriptPresent": false,
					"enforceStylePresent": false,
					"script": ["ts"],
					"style": ["scss"],
				},
			],
			"svelte/button-has-type": [
				"error",
				{
					"button": true,
					"submit": true,
					"reset": true,
				},
			],
			"svelte/no-at-debug-tags": "error",
			// "svelte/no-immutable-reactive-statements": "error",
			"svelte/no-reactive-functions": "error",
			"svelte/no-reactive-literals": "error",
			// "svelte/no-unused-class-name": ["warn", {"allowedClassNames": []}],
			"svelte/no-unused-svelte-ignore": "error",
			"svelte/no-useless-mustaches": [
				"error",
				{
					"ignoreIncludesComment": false,
					"ignoreStringEscape": false,
				},
			],
			"svelte/prefer-destructured-store-props": "error",
			// "svelte/require-each-key": "error",
			"svelte/require-event-dispatcher-types": "error",
			"svelte/require-optimized-style-attribute": "error",
			"svelte/require-stores-init": "error",
			// "svelte/valid-each-key": "error",
			"svelte/derived-has-same-inputs-outputs": "error",
			"svelte/first-attribute-linebreak": "off",
			"svelte/html-closing-bracket-spacing": "off",
			"svelte/html-quotes": "off",
			"svelte/html-self-closing": "off",
			"svelte/indent": "off",
			"svelte/max-attributes-per-line": "off",
			"svelte/mustache-spacing": "off",
			"svelte/no-extra-reactive-curlies": "error",
			"svelte/no-restricted-html-elements": "off",
			"svelte/no-spaces-around-equal-signs-in-attribute": "off",
			"svelte/prefer-class-directive": "error",
			"svelte/prefer-style-directive": "error",
			"svelte/shorthand-attribute": ["error", {"prefer": "always"}],
			"svelte/shorthand-directive": ["error", {"prefer": "always"}],
			"svelte/sort-attributes": "off",
			"svelte/spaced-html-comment": ["error", "always"],
			"svelte/no-inner-declarations": ["error", "both"],
			"svelte/no-trailing-spaces": "off",
			"svelte/experimental-require-slot-types": "error",
			"svelte/experimental-require-strict-events": "error",
			"svelte/comment-directive": [
				"error",
				{
					"reportUnusedDisableDirectives": true,
				},
			],
			"svelte/system": "error",
			// Props support.
			"init-declarations": "off",
			// Props support.
			"@typescript-eslint/init-declarations": "off",
			// $$Slots support.
			"no-unused-vars": "off",
			// $$Slots support.
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					"vars": "all",
					"args": "all",
					"caughtErrors": "all",
					"ignoreRestSiblings": false,
					"varsIgnorePattern": "^\\$\\$Slots$",
				},
			],

			// eslint-plugin-import

			"import/no-mutable-exports": "off", // Svelte props support.
		},
	},
	{
		ignores: [
			"**/node_modules/**",
			"build/**",
			".svelte-kit/**",
			"dist/**",
			"**/.vscode/**",
			"coverage-report/**",
			"**/.git/**",
			"src/assets/**",
		],
	},
];
