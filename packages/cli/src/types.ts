import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { generateMetadataDts } from '@euro-coins/downloader';

/** CLI flags for the `types` command. */
export type TypesFlags = {
  output: string;
};

/** Runs the `types` command. */
export async function typesCommand(flags: TypesFlags): Promise<void> {
  await mkdir(dirname(flags.output), { recursive: true });
  await writeFile(flags.output, generateMetadataDts());
  console.log(`Types written → ${flags.output}`);
}
