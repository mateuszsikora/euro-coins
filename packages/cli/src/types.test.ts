import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { typesCommand } from './types.js';

describe('typesCommand', () => {
  it('writes .d.ts file to the specified path', async () => {
    const testDir = join(tmpdir(), `euro-coins-types-test-${Date.now()}`);
    const output = join(testDir, 'types.d.ts');
    try {
      await typesCommand({ output });
      assert.ok(existsSync(output));
      const content = await readFile(output, 'utf-8');
      assert.match(content, /export type CoinMetadata/);
      assert.match(content, /export type CountryCode/);
    } finally {
      await rm(testDir, { recursive: true, force: true });
    }
  });

  it('creates parent directories if they do not exist', async () => {
    const base = join(tmpdir(), `euro-coins-types-nested-${Date.now()}`);
    const output = join(base, 'deep', 'nested', 'types.d.ts');
    try {
      await typesCommand({ output });
      assert.ok(existsSync(output));
    } finally {
      await rm(base, { recursive: true, force: true });
    }
  });

  it('overwrites existing file', async () => {
    const output = join(tmpdir(), `euro-coins-types-overwrite-${Date.now()}.d.ts`);
    try {
      await typesCommand({ output });
      const first = await readFile(output, 'utf-8');
      await typesCommand({ output });
      const second = await readFile(output, 'utf-8');
      assert.equal(first, second);
    } finally {
      await rm(output, { force: true });
    }
  });
});
