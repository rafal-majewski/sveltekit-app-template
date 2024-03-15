const releaseItConfig = {
	github: {
		release: true,
	},
	npm: {
		publish: false,
	},
	git: {
		commitMessage: "chore: release `${version}`",
	},
	plugins: {
		"@j-ulrich/release-it-regex-bumper": {
			out: [
				{
					file: "./helm/Chart.yaml",
					replace: "version: {{version}}",
					search: "version: (.*)",
				},
				{
					file: "./helm/Chart.yaml",
					replace: 'appVersion: "{{version}}"',
					search: 'appVersion: "(.*)"',
				},
			],
		},
		"@release-it/conventional-changelog": {
			infile: "./CHANGELOG.md",
			header: "# Changelog",
			ignoreRecommendedBump: false,
			strictSemVer: false,
			preset: {
				name: "conventionalcommits",
				types: [
					{
						type: "feature",
						section: "Features",
					},
					{
						type: "fix",
						section: "Bug fixes",
					},
					{
						type: "chore",
						section: "Chores",
					},
				],
			},
			parserOpts: {
				mergePattern: "^Merge pull request #(\\d+) from (.*)$",
			},
			writerOpts: {
				groupBy: "type",
			},
		},
	},
};

export default releaseItConfig;
