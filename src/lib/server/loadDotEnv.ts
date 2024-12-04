export function loadDotEnv(): void {
	const currentDirectoryPath = process.cwd();
	process.loadEnvFile(`${currentDirectoryPath}/.env`);
}
