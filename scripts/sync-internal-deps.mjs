import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const version = process.argv[2];
if (!version || !/^\d+\.\d+\.\d+/.test(version)) {
	console.error(`Invalid version: ${version ?? "(missing)"}`);
	process.exit(1);
}

for (const dir of readdirSync("packages", { withFileTypes: true })) {
	if (!dir.isDirectory()) continue;
	const path = `packages/${dir.name}/package.json`;
	const pkg = JSON.parse(readFileSync(path, "utf8"));
	for (const deps of [pkg.dependencies, pkg.devDependencies].filter(Boolean)) {
		for (const name of Object.keys(deps)) {
			if (name.startsWith("@euro-coins/")) deps[name] = `^${version}`;
		}
	}
	writeFileSync(path, JSON.stringify(pkg, null, 2) + "\n");
}
