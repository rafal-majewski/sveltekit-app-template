import releaseItConfig from "./.release-it.ts";
import type {UserConfig} from "@commitlint/types";

const commitlintConfig = {
	defaultIgnores: true,
	extends: [],
	ignores: [],

	rules: {
		"scope-empty": [2, "always"],
		"subject-empty": [2, "never"],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],

		"type-enum": [
			2,
			"always",

			releaseItConfig.plugins["@release-it/conventional-changelog"].preset.types.map(
				(
					typeData: (typeof releaseItConfig)["plugins"]["@release-it/conventional-changelog"]["preset"]["types"][number],
				): string => typeData.type,
			),
		],
	},
} as const satisfies UserConfig;

export default commitlintConfig;
