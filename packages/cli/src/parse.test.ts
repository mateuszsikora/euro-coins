import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { InvalidArgumentError } from 'commander';
import { parseConcurrency, parseQuality } from './parse.js';

describe('parseQuality', () => {
  it('parses valid quality', () => {
    assert.equal(parseQuality('90'), 90);
  });

  it('accepts boundary values', () => {
    assert.equal(parseQuality('1'), 1);
    assert.equal(parseQuality('100'), 100);
  });

  it('truncates decimal to integer', () => {
    assert.equal(parseQuality('90.7'), 90);
  });

  it('rejects non-numeric input', () => {
    assert.throws(() => parseQuality('abc'), InvalidArgumentError);
  });

  it('rejects zero', () => {
    assert.throws(() => parseQuality('0'), InvalidArgumentError);
  });

  it('rejects negative', () => {
    assert.throws(() => parseQuality('-1'), InvalidArgumentError);
  });

  it('rejects above 100', () => {
    assert.throws(() => parseQuality('101'), InvalidArgumentError);
  });

  it('rejects empty string', () => {
    assert.throws(() => parseQuality(''), InvalidArgumentError);
  });
});

describe('parseConcurrency', () => {
  it('parses valid concurrency', () => {
    assert.equal(parseConcurrency('8'), 8);
  });

  it('accepts 1', () => {
    assert.equal(parseConcurrency('1'), 1);
  });

  it('accepts large values', () => {
    assert.equal(parseConcurrency('256'), 256);
  });

  it('rejects zero', () => {
    assert.throws(() => parseConcurrency('0'), InvalidArgumentError);
  });

  it('rejects negative', () => {
    assert.throws(() => parseConcurrency('-4'), InvalidArgumentError);
  });

  it('rejects non-numeric input', () => {
    assert.throws(() => parseConcurrency('fast'), InvalidArgumentError);
  });
});
