const releaseItConfig = {
	github: {
		release: true,
	},
	npm: {
		publish: false,
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
	},
};

export default releaseItConfig;
