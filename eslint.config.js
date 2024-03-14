import stylisticEslintPlugin from "@stylistic/eslint-plugin";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import * as TypescriptEslintParser from "@typescript-eslint/parser";
// @ts-expect-error - No types available.
import importEslintPlugin from "eslint-plugin-import";
// @ts-expect-error - No types available.
import sortDestructureKeysEslintPlugin from "eslint-plugin-sort-destructure-keys";
import * as SvelteEslintPlugin from "eslint-plugin-svelte";
import * as SvelteEslintParser from "svelte-eslint-parser";

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
		files: ["**/*.ts", "**/*.js", "**/*.cjs", "**/*.mjs"],
		languageOptions: {
			ecmaVersion: 13,
			parser: TypescriptEslintParser,
			parserOptions: {
				extraFileExtensions: [".svelte"],
				project: "./tsconfig.json",
				tsconfigRootDir: ".",
			},
		},
		settings: {
			/* Required because of https://github.com/import-js/eslint-plugin-import/issues/2556. */
			"import/parsers": {
				"@typescript-eslint/parser": [".ts", ".js", ".cjs", ".mjs"],
			},
		},
	},
	{
		plugins: {
			"@stylistic": stylisticEslintPlugin,
			"@typescript-eslint": typescriptEslintPlugin,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			import: importEslintPlugin,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			"sort-destructure-keys": sortDestructureKeysEslintPlugin,
		},
		rules: {
			"@stylistic/lines-between-class-members": [
				"warn",
				{
					enforce: [
						{
							blankLine: "always",
							next: "*",
							prev: "*",
						},
					],
				},
				{
					exceptAfterOverload: false,
					exceptAfterSingleLine: false,
				},
			],
			"@stylistic/object-curly-newline": [
				"warn",
				{
					ObjectExpression: {
						consistent: true,
						minProperties: 1,
						multiline: true,
					},
				},
			],
			"@stylistic/padding-line-between-statements": [
				"warn",
				{
					blankLine: "never",
					next: "singleline-const",
					prev: "singleline-const",
				},
				{
					blankLine: "never",
					next: "singleline-let",
					prev: "singleline-const",
				},
				{
					blankLine: "never",
					next: "singleline-const",
					prev: "singleline-let",
				},
				{
					blankLine: "never",
					next: "singleline-let",
					prev: "singleline-let",
				},
				{
					blankLine: "never",
					next: "expression",
					prev: "expression",
				},
				{
					blankLine: "always",
					next: "*",
					prev: "multiline-expression",
				},
				{
					blankLine: "always",
					next: "multiline-expression",
					prev: "*",
				},
				{
					blankLine: "always",
					next: "multiline-block-like",
					prev: "*",
				},
				{
					blankLine: "always",
					next: "*",
					prev: "multiline-block-like",
				},
				{
					blankLine: "always",
					next: "multiline-const",
					prev: "*",
				},
				{
					blankLine: "always",
					next: "*",
					prev: "multiline-const",
				},
			],
			"@stylistic/spaced-comment": [
				"warn",
				"always",
				{
					exceptions: [],
					markers: [],
				},
			],
			"@typescript-eslint/adjacent-overload-signatures": ["warn"],
			"@typescript-eslint/array-type": [
				"warn",
				{
					default: "array",
					readonly: "array",
				},
			],
			"@typescript-eslint/await-thenable": ["warn"],
			"@typescript-eslint/ban-ts-comment": [
				"warn",
				{
					minimumDescriptionLength: 1,
					"ts-check": true,
					"ts-expect-error": "allow-with-description",
					"ts-ignore": true,
					"ts-nocheck": true,
				},
			],
			"@typescript-eslint/ban-tslint-comment": ["warn"],
			"@typescript-eslint/ban-types": [
				"warn",
				{
					extendDefaults: true,
					types: {},
				},
			],
			"@typescript-eslint/class-literal-property-style": ["warn", "fields"],
			"@typescript-eslint/class-methods-use-this": [
				"warn",
				{
					enforceForClassFields: true,
					exceptMethods: [],
					ignoreClassesThatImplementAnInterface: false,
					ignoreOverrideMethods: false,
				},
			],
			"@typescript-eslint/consistent-type-assertions": [
				"warn",
				{
					assertionStyle: "as",
					objectLiteralTypeAssertions: "never",
				},
			],
			"@typescript-eslint/consistent-type-exports": [
				"warn",
				{
					fixMixedExportsWithInlineTypeSpecifier: true,
				},
			],
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{
					disallowTypeAnnotations: true,
					fixStyle: "separate-type-imports",
					prefer: "type-imports",
				},
			],
			"@typescript-eslint/dot-notation": [
				"warn",
				{
					allowIndexSignaturePropertyAccess: true,
					allowKeywords: true,
					allowPrivateClassPropertyAccess: false,
					allowProtectedClassPropertyAccess: false,
				},
			],
			"@typescript-eslint/explicit-function-return-type": [
				"warn",
				{
					allowConciseArrowFunctionExpressionsStartingWithVoid: false,
					allowDirectConstAssertionInArrowFunctions: false,
					allowExpressions: false,
					allowFunctionsWithoutTypeParameters: false,
					allowHigherOrderFunctions: false,
					allowIIFEs: false,
					allowTypedFunctionExpressions: false,
					allowedNames: [],
				},
			],
			"@typescript-eslint/explicit-member-accessibility": [
				"warn",
				{
					accessibility: "explicit",
					ignoredMethodNames: [],
					overrides: {},
				},
			],
			"@typescript-eslint/explicit-module-boundary-types": [
				"warn",
				{
					allowArgumentsExplicitlyTypedAsAny: false,
					allowDirectConstAssertionInArrowFunctions: false,
					allowHigherOrderFunctions: false,
					allowTypedFunctionExpressions: false,
					allowedNames: [],
				},
			],
			"@typescript-eslint/init-declarations": ["warn", "always"],
			"@typescript-eslint/member-ordering": [
				"warn",
				{
					classExpressions: {
						memberTypes: "never",
						order: "alphabetically",
					},
					classes: {
						memberTypes: "never",
						order: "alphabetically",
					},
					default: {
						memberTypes: "never",
						order: "alphabetically",
					},
					interfaces: {
						memberTypes: "never",
						order: "alphabetically",
					},
					typeLiterals: {
						memberTypes: "never",
						order: "alphabetically",
					},
				},
			],
			"@typescript-eslint/method-signature-style": ["warn", "method"],
			"@typescript-eslint/naming-convention": [
				"warn",

				{
					format: ["camelCase"],
					selector: ["classMethod", "function", "objectLiteralMethod", "typeMethod"],
				},
				{
					format: ["PascalCase"],
					selector: ["class", "enum", "enumMember", "interface", "typeAlias", "typeParameter"],
				},
				{
					format: ["PascalCase"],
					modifiers: ["namespace"],
					selector: ["import"],
				},
			],
			"@typescript-eslint/no-array-constructor": ["warn"],
			"@typescript-eslint/no-base-to-string": [
				"warn",
				{
					ignoredTypeNames: [],
				},
			],
			"@typescript-eslint/no-confusing-void-expression": [
				"warn",
				{
					ignoreArrowShorthand: false,
					ignoreVoidOperator: false,
				},
			],
			"@typescript-eslint/no-duplicate-enum-values": ["warn"],
			"@typescript-eslint/no-duplicate-type-constituents": [
				"warn",
				{
					ignoreIntersections: false,
					ignoreUnions: false,
				},
			],
			"@typescript-eslint/no-dynamic-delete": ["warn"],
			"@typescript-eslint/no-empty-function": [
				"warn",
				{
					allow: [],
				},
			],
			"@typescript-eslint/no-empty-interface": [
				"warn",
				{
					allowSingleExtends: false,
				},
			],
			"@typescript-eslint/no-explicit-any": [
				"warn",
				{
					fixToUnknown: false,
					ignoreRestArgs: false,
				},
			],
			"@typescript-eslint/no-extra-non-null-assertion": ["warn"],
			"@typescript-eslint/no-extraneous-class": [
				"warn",
				{
					allowConstructorOnly: false,
					allowEmpty: false,
					allowStaticOnly: false,
					allowWithDecorator: false,
				},
			],
			"@typescript-eslint/no-floating-promises": [
				"warn",
				{
					ignoreIIFE: false,
					ignoreVoid: false,
				},
			],
			"@typescript-eslint/no-for-in-array": ["warn"],
			"@typescript-eslint/no-implied-eval": ["warn"],
			"@typescript-eslint/no-import-type-side-effects": ["warn"],
			"@typescript-eslint/no-inferrable-types": [
				"warn",
				{
					ignoreParameters: false,
					ignoreProperties: false,
				},
			],
			"@typescript-eslint/no-invalid-void-type": [
				"warn",
				{
					allowAsThisParameter: false,
					allowInGenericTypeArguments: true,
				},
			],
			"@typescript-eslint/no-loop-func": ["warn"],
			"@typescript-eslint/no-loss-of-precision": ["error"],
			"@typescript-eslint/no-meaningless-void-operator": [
				"warn",
				{
					checkNever: true,
				},
			],
			"@typescript-eslint/no-misused-promises": [
				"warn",
				{
					checksConditionals: true,
					checksSpreads: true,
					checksVoidReturn: {
						arguments: true,
						attributes: true,
						properties: true,
						returns: true,
						variables: true,
					},
				},
			],
			"@typescript-eslint/no-mixed-enums": ["warn"],
			"@typescript-eslint/no-namespace": [
				"warn",
				{
					allowDeclarations: false,
					allowDefinitionFiles: false,
				},
			],
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": ["warn"],
			"@typescript-eslint/no-non-null-asserted-optional-chain": ["warn"],
			"@typescript-eslint/no-non-null-assertion": ["warn"],
			"@typescript-eslint/no-redeclare": [
				"warn",
				{
					ignoreDeclarationMerge: false,
				},
			],
			"@typescript-eslint/no-redundant-type-constituents": ["warn"],
			"@typescript-eslint/no-require-imports": ["warn"],
			"@typescript-eslint/no-shadow": [
				"warn",
				{
					allow: [],
					builtinGlobals: true,
					hoist: "all",
					ignoreFunctionTypeParameterNameValueShadow: false,
					ignoreOnInitialization: true,
					ignoreTypeValueShadow: false,
				},
			],
			"@typescript-eslint/no-this-alias": ["warn"],
			"@typescript-eslint/no-throw-literal": [
				"warn",
				{
					allowThrowingAny: false,
					allowThrowingUnknown: false,
				},
			],
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": [
				"warn",
				{
					allowComparingNullableBooleansToFalse: true,
					allowComparingNullableBooleansToTrue: true,
				},
			],
			"@typescript-eslint/no-unnecessary-condition": [
				"warn",
				{
					allowConstantLoopConditions: false,
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
				},
			],
			"@typescript-eslint/no-unnecessary-type-assertion": [
				"warn",
				{
					typesToIgnore: [],
				},
			],
			"@typescript-eslint/no-unnecessary-type-constraint": ["warn"],
			"@typescript-eslint/no-unsafe-argument": ["warn"],
			"@typescript-eslint/no-unsafe-assignment": ["warn"],
			"@typescript-eslint/no-unsafe-call": ["warn"],
			"@typescript-eslint/no-unsafe-declaration-merging": ["warn"],
			"@typescript-eslint/no-unsafe-enum-comparison": ["warn"],
			"@typescript-eslint/no-unsafe-member-access": ["warn"],
			"@typescript-eslint/no-unsafe-return": ["warn"],
			"@typescript-eslint/no-unsafe-unary-minus": ["warn"],
			"@typescript-eslint/no-unused-expressions": [
				"warn",
				{
					allowShortCircuit: false,
					allowTaggedTemplates: false,
					allowTernary: false,
					enforceForJSX: true,
				},
			],
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					args: "all",
					caughtErrors: "all",
					ignoreRestSiblings: false,
					vars: "all",
				},
			],
			"@typescript-eslint/no-use-before-define": [
				"warn",
				{
					allowNamedExports: false,
					classes: true,
					enums: true,
					functions: true,
					ignoreTypeReferences: false,
					typedefs: true,
					variables: true,
				},
			],
			"@typescript-eslint/no-useless-constructor": ["warn"],
			"@typescript-eslint/no-useless-empty-export": ["warn"],
			"@typescript-eslint/no-var-requires": ["warn"],
			"@typescript-eslint/non-nullable-type-assertion-style": ["warn"],
			"@typescript-eslint/parameter-properties": [
				"warn",
				{
					allow: [],
					prefer: "class-property",
				},
			],
			"@typescript-eslint/prefer-as-const": ["warn"],
			"@typescript-eslint/prefer-enum-initializers": ["warn"],
			"@typescript-eslint/prefer-for-of": ["warn"],
			"@typescript-eslint/prefer-function-type": ["warn"],
			"@typescript-eslint/prefer-includes": ["warn"],
			"@typescript-eslint/prefer-literal-enum-member": [
				"warn",
				{
					allowBitwiseExpressions: false,
				},
			],
			"@typescript-eslint/prefer-nullish-coalescing": [
				"warn",
				{
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
					ignoreConditionalTests: false,
					ignoreMixedLogicalExpressions: false,
					ignorePrimitives: {
						bigint: false,
						boolean: false,
						number: false,
						string: false,
					},
					ignoreTernaryTests: false,
				},
			],
			"@typescript-eslint/prefer-optional-chain": [
				"warn",
				{
					allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
					checkAny: true,
					checkBigInt: true,
					checkBoolean: true,
					checkNumber: true,
					checkString: true,
					checkUnknown: true,
					requireNullish: false,
				},
			],
			"@typescript-eslint/prefer-readonly": [
				"warn",
				{
					onlyInlineLambdas: false,
				},
			],
			"@typescript-eslint/prefer-reduce-type-parameter": ["warn"],
			"@typescript-eslint/prefer-regexp-exec": ["warn"],
			"@typescript-eslint/prefer-return-this-type": ["warn"],
			"@typescript-eslint/prefer-string-starts-ends-with": ["warn"],
			"@typescript-eslint/prefer-ts-expect-error": ["warn"],
			"@typescript-eslint/promise-function-async": [
				"warn",
				{
					allowAny: false,
					allowedPromiseNames: [],
					checkArrowFunctions: true,
					checkFunctionDeclarations: true,
					checkFunctionExpressions: true,
					checkMethodDeclarations: true,
				},
			],
			"@typescript-eslint/require-array-sort-compare": [
				"warn",
				{
					ignoreStringArrays: false,
				},
			],
			"@typescript-eslint/require-await": ["warn"],
			"@typescript-eslint/restrict-plus-operands": [
				"warn",
				{
					allowAny: false,
					allowBoolean: false,
					allowNullish: false,
					allowNumberAndString: false,
					allowRegExp: false,
					skipCompoundAssignments: false,
				},
			],
			"@typescript-eslint/restrict-template-expressions": [
				"warn",
				{
					allowAny: false,
					allowBoolean: false,
					allowNever: false,
					allowNullish: false,
					allowNumber: false,
					allowRegExp: false,
				},
			],
			"@typescript-eslint/return-await": ["warn", "always"],
			"@typescript-eslint/sort-type-constituents": [
				"warn",
				{
					checkIntersections: true,
					checkUnions: true,
					groupOrder: [],
				},
			],
			"@typescript-eslint/strict-boolean-expressions": [
				"warn",
				{
					allowAny: false,
					allowNullableBoolean: false,
					allowNullableEnum: false,
					allowNullableNumber: false,
					allowNullableObject: false,
					allowNullableString: false,
					allowNumber: false,
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
					allowString: false,
				},
			],
			"@typescript-eslint/switch-exhaustiveness-check": [
				"warn",
				{
					allowDefaultCaseForExhaustiveSwitch: false,
					requireDefaultForNonUnion: true,
				},
			],
			"@typescript-eslint/triple-slash-reference": [
				"warn",
				{
					lib: "never",
					path: "never",
					types: "never",
				},
			],
			"@typescript-eslint/typedef": [
				"warn",
				{
					arrayDestructuring: false,
					arrowParameter: true,
					memberVariableDeclaration: true,
					objectDestructuring: false,
					parameter: true,
					propertyDeclaration: true,
					variableDeclaration: false,
					variableDeclarationIgnoreFunction: false,
				},
			],
			"@typescript-eslint/unbound-method": [
				"warn",
				{
					ignoreStatic: false,
				},
			],
			"@typescript-eslint/unified-signatures": [
				"warn",
				{
					ignoreDifferentlyNamedParameters: false,
				},
			],
			"array-callback-return": [
				"warn",
				{
					allowImplicit: false,
					allowVoid: false,
					checkForEach: true,
				},
			],
			"arrow-body-style": [
				"warn",
				"as-needed",
				{
					requireReturnForObjectLiteral: false,
				},
			],
			"block-scoped-var": ["warn"],
			"consistent-return": [
				"warn",
				{
					treatUndefinedAsUnspecified: false,
				},
			],
			curly: ["warn", "all"],
			eqeqeq: [
				"warn",
				"always",
				{
					null: "always",
				},
			],
			"for-direction": ["warn"],
			"func-style": [
				"warn",
				"declaration",
				{
					allowArrowFunctions: true,
				},
			],
			"getter-return": ["warn"],
			"grouped-accessor-pairs": ["warn", "getBeforeSet"],
			"import/export": ["warn"],
			"import/exports-last": ["warn"],
			"import/first": ["warn"],
			"import/max-dependencies": ["off"],
			"import/named": ["warn"],
			"import/namespace": [
				"warn",
				{
					allowComputed: false,
				},
			],
			"import/no-absolute-path": [
				"warn",
				{
					commonjs: true,
					esmodule: true,
				},
			],
			"import/no-anonymous-default-export": [
				"warn",
				{
					allowAnonymousClass: false,
					allowAnonymousFunction: false,
					allowArray: false,
					allowArrowFunction: false,
					allowCallExpression: false,
					allowLiteral: false,
					allowNew: false,
					allowObject: false,
				},
			],
			"import/no-commonjs": [
				"warn",
				{
					allowConditionalRequire: false,
					allowPrimitiveModules: false,
					allowRequire: false,
				},
			],
			"import/no-cycle": [
				"warn",
				{
					allowUnsafeDynamicCyclicDependency: false,
					ignoreExternal: false,
					maxDepth: Infinity,
				},
			],
			"import/no-default-export": ["warn"],
			"import/no-deprecated": ["warn"],
			"import/no-duplicates": [
				"warn",
				{
					considerQueryString: true,
					"prefer-inline": true,
				},
			],
			"import/no-dynamic-require": ["warn"],
			"import/no-empty-named-blocks": ["warn"],
			"import/no-extraneous-dependencies": [
				"error",
				{
					bundledDependencies: [],
					devDependencies: ["./**/*.test.ts", "./eslint.config.js", "./svelte.config.js"],
					optionalDependencies: [],
					peerDependencies: [],
				},
			],
			"import/no-import-module-exports": [
				"warn",
				{
					exceptions: [],
				},
			],
			"import/no-mutable-exports": ["warn"],
			"import/no-named-as-default": ["warn"],
			"import/no-named-default": ["warn"],
			"import/no-relative-parent-imports": ["warn"],
			"import/no-self-import": ["warn"],
			"import/no-unassigned-import": [
				"warn",
				{
					allow: [],
				},
			],
			"import/no-useless-path-segments": [
				"warn",
				{
					commonjs: true,
					noUselessIndex: true,
				},
			],
			"import/order": [
				"warn",
				{
					alphabetize: {
						caseInsensitive: false,
						order: "asc",
						orderImportKind: "asc",
					},
					distinctGroup: false,
					groups: [],
					"newlines-between": "never",
					pathGroups: [],
					pathGroupsExcludedImportTypes: [],
					warnOnUnassignedImports: true,
				},
			],
			"logical-assignment-operators": [
				"warn",
				"always",
				{
					enforceForIfStatements: true,
				},
			],
			"max-classes-per-file": [
				"warn",
				{
					ignoreExpressions: false,
					max: 1,
				},
			],
			"new-cap": [
				"off",
				{
					capIsNew: true,
					capIsNewExceptions: [],
					newIsCap: true,
					newIsCapExceptions: [],
					properties: true,
				},
			],
			"no-array-constructor": ["warn"],
			"no-async-promise-executor": ["warn"],
			"no-class-assign": ["warn"],
			"no-compare-neg-zero": ["warn"],
			"no-cond-assign": ["warn", "always"],
			"no-constant-binary-expression": ["warn"],
			"no-constant-condition": [
				"warn",
				{
					checkLoops: true,
				},
			],
			"no-constructor-return": ["warn"],
			"no-debugger": ["warn"],
			"no-delete-var": ["warn"],
			"no-dupe-else-if": ["warn"],
			"no-duplicate-case": ["warn"],
			"no-duplicate-imports": [
				"warn",
				{
					includeExports: true,
				},
			],
			"no-else-return": [
				"warn",
				{
					allowElseIf: false,
				},
			],
			"no-empty": ["warn"],
			"no-empty-character-class": ["warn"],
			"no-empty-pattern": ["warn"],
			"no-empty-static-block": ["warn"],
			"no-eval": ["warn"],
			"no-ex-assign": ["warn"],
			"no-extend-native": ["warn"],
			"no-extra-bind": ["warn"],
			"no-extra-boolean-cast": [
				"warn",
				{
					enforceForLogicalOperands: true,
				},
			],
			"no-extra-label": ["warn"],
			"no-global-assign": ["warn"],
			"no-implicit-coercion": ["warn"],
			"no-implied-eval": ["warn"],
			"no-inline-comments": ["warn", {}],
			"no-inner-declarations": ["warn", "both"],
			"no-invalid-regexp": ["error"],
			"no-invalid-this": [
				"warn",
				{
					capIsConstructor: true,
				},
			],
			"no-irregular-whitespace": [
				"warn",
				{
					skipComments: true,
					skipJSXText: true,
					skipRegExps: true,
					skipStrings: true,
					skipTemplates: true,
				},
			],
			"no-labels": [
				"warn",
				{
					allowLoop: false,
					allowSwitch: false,
				},
			],
			"no-lone-blocks": ["warn"],
			"no-lonely-if": ["warn"],
			"no-misleading-character-class": ["warn"],
			"no-multi-assign": [
				"warn",
				{
					ignoreNonDeclaration: false,
				},
			],
			"no-multi-str": ["warn"],
			"no-negated-condition": ["warn"],
			"no-nested-ternary": ["warn"],
			"no-new": ["warn"],
			"no-new-func": ["warn"],
			"no-new-wrappers": ["warn"],
			"no-object-constructor": ["warn"],
			"no-param-reassign": [
				"warn",
				{
					ignorePropertyModificationsFor: [],
					props: true,
				},
			],
			"no-plusplus": [
				"warn",
				{
					allowForLoopAfterthoughts: false,
				},
			],
			"no-promise-executor-return": [
				"warn",
				{
					allowVoid: false,
				},
			],
			"no-prototype-builtins": ["warn"],
			"no-return-assign": ["warn", "always"],
			"no-self-assign": [
				"warn",
				{
					props: true,
				},
			],
			"no-self-compare": ["warn"],
			"no-sequences": [
				"warn",
				{
					allowInParentheses: false,
				},
			],
			"no-shadow-restricted-names": ["warn"],
			"no-sparse-arrays": ["warn"],
			"no-ternary": ["warn"],
			"no-undefined": ["warn"],
			"no-underscore-dangle": [
				"warn",
				{
					allow: [],
					allowAfterSuper: false,
					allowAfterThis: false,
					allowAfterThisConstructor: false,
					allowFunctionParams: false,
					allowInArrayDestructuring: false,
					allowInObjectDestructuring: false,
					enforceInClassFields: false,
					enforceInMethodNames: false,
				},
			],
			"no-unmodified-loop-condition": ["warn"],
			"no-unneeded-ternary": [
				"warn",
				{
					defaultAssignment: false,
				},
			],
			"no-unreachable-loop": ["warn"],
			"no-unsafe-finally": ["warn"],
			"no-unused-labels": ["warn"],
			"no-unused-private-class-members": ["warn"],
			"no-useless-backreference": ["warn"],
			"no-useless-call": ["warn"],
			"no-useless-catch": ["warn"],
			"no-useless-computed-key": [
				"warn",
				{
					enforceForClassMembers: true,
				},
			],
			"no-useless-concat": ["warn"],
			"no-useless-constructor": ["warn"],
			"no-useless-escape": ["warn"],
			"no-useless-rename": [
				"warn",
				{
					ignoreDestructuring: false,
					ignoreExport: false,
					ignoreImport: false,
				},
			],
			"no-useless-return": ["warn"],
			"no-var": ["warn"],
			"no-void": [
				"warn",
				{
					allowAsStatement: false,
				},
			],
			"no-with": ["warn"],
			"object-shorthand": [
				"warn",
				"always",
				{
					avoidExplicitReturnArrows: false,
					avoidQuotes: false,
					ignoreConstructors: false,
				},
			],
			"one-var": ["warn", "never"],
			"operator-assignment": ["warn", "always"],
			"prefer-arrow-callback": [
				"warn",
				{
					allowNamedFunctions: false,
					allowUnboundThis: false,
				},
			],
			"prefer-const": [
				"warn",
				{
					destructuring: "any",
					ignoreReadBeforeAssign: false,
				},
			],
			"prefer-destructuring": [
				"warn",
				{
					AssignmentExpression: {
						array: true,
						object: true,
					},
					VariableDeclarator: {
						array: true,
						object: true,
					},
				},
				{
					enforceForRenamedProperties: false,
				},
			],
			"prefer-exponentiation-operator": ["warn"],
			"prefer-named-capture-group": ["warn"],
			"prefer-numeric-literals": ["warn"],
			"prefer-object-has-own": ["warn"],
			"prefer-object-spread": ["warn"],
			"prefer-promise-reject-errors": [
				"warn",
				{
					allowEmptyReject: false,
				},
			],
			"prefer-regex-literals": [
				"warn",
				{
					disallowRedundantWrapping: true,
				},
			],
			"prefer-rest-params": ["warn"],
			"prefer-spread": ["warn"],
			"prefer-template": ["warn"],
			radix: ["warn", "always"],
			"require-atomic-updates": [
				"warn",
				{
					allowProperties: false,
				},
			],
			"require-unicode-regexp": ["warn"],
			"require-yield": ["warn"],
			"sort-destructure-keys/sort-destructure-keys": [
				"warn",
				{
					caseSensitive: true,
				},
			],
			// eslint-plugin-import will handle this.
			"sort-imports": [
				"warn",
				{
					allowSeparatedGroups: false,
					ignoreCase: false,
					ignoreDeclarationSort: true,
					ignoreMemberSort: true,
					memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
				},
			],
			"sort-keys": [
				"warn",
				"asc",
				{
					allowLineSeparatedGroups: false,
					caseSensitive: true,
					minKeys: 2,
					natural: false,
				},
			],
			"sort-vars": [
				"warn",
				{
					ignoreCase: false,
				},
			],
			strict: ["warn", "never"],
			"symbol-description": ["warn"],
			"use-isnan": ["warn"],
			"valid-typeof": ["warn"],
			"vars-on-top": ["warn"],
			yoda: [
				"warn",
				"never",
				{
					exceptRange: false,
					onlyEquality: false,
				},
			],
		},
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			ecmaVersion: 13,
			parser: SvelteEslintParser,
			parserOptions: {
				extraFileExtensions: [".svelte"],
				/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
				parser: TypescriptEslintParser,
				project: "./tsconfig.json",
				tsconfigRootDir: ".",
			},
		},
		plugins: {
			svelte: SvelteEslintPlugin,
		},
		rules: {
			"@typescript-eslint/init-declarations": ["off"],
			"import/no-mutable-exports": ["off"],
			"no-inner-declarations": ["off"],
			"svelte/block-lang": [
				"error",
				{
					enforceScriptPresent: false,
					enforceStylePresent: false,
					script: ["ts"],
					style: ["scss"],
				},
			],
			"svelte/button-has-type": [
				"warn",
				{
					button: true,
					reset: true,
					submit: true,
				},
			],
			"svelte/comment-directive": [
				"warn",
				{
					reportUnusedDisableDirectives: true,
				},
			],
			"svelte/derived-has-same-inputs-outputs": ["warn"],
			"svelte/experimental-require-slot-types": ["warn"],
			"svelte/experimental-require-strict-events": ["warn"],
			"svelte/infinite-reactive-loop": ["warn"],
			"svelte/no-at-debug-tags": ["warn"],
			"svelte/no-at-html-tags": ["warn"],
			"svelte/no-dom-manipulating": ["error"],
			"svelte/no-dupe-else-if-blocks": ["warn"],
			"svelte/no-dupe-on-directives": ["warn"],
			"svelte/no-dupe-style-properties": ["warn"],
			"svelte/no-dupe-use-directives": ["warn"],
			"svelte/no-dynamic-slot-name": ["error"],
			"svelte/no-extra-reactive-curlies": ["warn"],
			"svelte/no-immutable-reactive-statements": ["warn"],
			"svelte/no-inner-declarations": ["warn", "both"],
			"svelte/no-not-function-handler": ["warn"],
			"svelte/no-object-in-text-mustaches": ["warn"],
			"svelte/no-reactive-functions": ["warn"],
			"svelte/no-reactive-literals": ["warn"],
			"svelte/no-reactive-reassign": [
				"warn",
				{
					props: true,
				},
			],
			"svelte/no-shorthand-style-property-overrides": ["warn"],
			"svelte/no-store-async": ["warn"],
			"svelte/no-target-blank": [
				"warn",
				{
					allowReferrer: false,
					enforceDynamicLinks: "always",
				},
			],
			"svelte/no-unknown-style-directive-property": [
				"warn",
				{
					ignorePrefixed: false,
				},
			],
			"svelte/no-unused-class-name": [
				"warn",
				{
					allowedClassNames: [],
				},
			],
			"svelte/no-unused-svelte-ignore": ["warn"],
			"svelte/no-useless-mustaches": [
				"warn",
				{
					ignoreIncludesComment: false,
					ignoreStringEscape: false,
				},
			],
			"svelte/prefer-class-directive": ["warn"],
			"svelte/prefer-destructured-store-props": ["warn"],
			"svelte/prefer-style-directive": ["warn"],
			"svelte/require-each-key": ["warn"],
			"svelte/require-event-dispatcher-types": ["warn"],
			"svelte/require-optimized-style-attribute": ["warn"],
			"svelte/require-store-callbacks-use-set-param": ["warn"],
			"svelte/require-store-reactive-access": ["warn"],
			"svelte/require-stores-init": ["warn"],
			"svelte/shorthand-attribute": [
				"warn",
				{
					prefer: "always",
				},
			],
			"svelte/shorthand-directive": [
				"warn",
				{
					prefer: "always",
				},
			],
			"svelte/sort-attributes": [
				"warn",
				{
					order: [
						{
							match: "/.*/u",
							sort: "alphabetical",
						},
					],
				},
			],
			"svelte/spaced-html-comment": ["warn", "always"],
			"svelte/system": ["warn"],
			"svelte/valid-each-key": ["warn"],
			"svelte/valid-prop-names-in-kit-pages": ["warn"],
		},
	},
	{
		ignores: [
			"**/.git/**",
			"**/.vscode/**",
			"**/node_modules/**",
			".svelte-kit/**",
			"build/**",
			"coverage-report/**",
			"dist/**",
			"src/assets/**",
		],
	},
];

export default eslintConfig;
