#!/usr/bin/env node

import { Command } from 'commander';
import { checkCommand } from './check.js';
import { downloadCommand } from './download.js';
import { ATTRIBUTION } from './format.js';
import { parseConcurrency, parseQuality } from './parse.js';
import { typesCommand } from './types.js';

const program = new Command()
  .name('euro-coins')
  .description(`Download euro coin images from the European Central Bank.\n\n${ATTRIBUTION}`)
  .version('0.1.0');

program.hook('preAction', () => {
  console.log(ATTRIBUTION);
  console.log();
});

program
  .command('download')
  .description('Download and normalize all euro coin images to JPEG')
  .option('-o, --output <dir>', 'output directory', './coins')
  .option('--metadata-only', 'generate metadata.json without downloading images')
  .option('--force-refresh', 'overwrite existing files')
  .option('--quality <number>', 'JPEG quality 1-100', parseQuality, 100)
  .option('--concurrency <number>', 'max parallel downloads', parseConcurrency, 8)
  .action(downloadCommand);

program
  .command('check')
  .description('HEAD-check all source URLs and report dead links')
  .option('--concurrency <number>', 'max parallel requests', parseConcurrency, 16)
  .action(checkCommand);

program
  .command('types')
  .description('Generate TypeScript declarations for coin metadata')
  .requiredOption('-o, --output <path>', 'output file path')
  .action(typesCommand);

program.parse();
