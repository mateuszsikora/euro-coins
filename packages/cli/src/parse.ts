import { InvalidArgumentError } from 'commander';

/** Parses and validates JPEG quality (1–100). */
export function parseQuality(value: string): number {
  const n = Number.parseInt(value, 10);
  if (Number.isNaN(n) || n < 1 || n > 100) {
    throw new InvalidArgumentError('must be between 1 and 100');
  }
  return n;
}

/** Parses and validates concurrency (positive integer). */
export function parseConcurrency(value: string): number {
  const n = Number.parseInt(value, 10);
  if (Number.isNaN(n) || n < 1) {
    throw new InvalidArgumentError('must be a positive integer');
  }
  return n;
}
