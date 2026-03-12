import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sharp from 'sharp';
import { toJpeg } from './image.js';

async function createPng(options?: { alpha?: boolean }): Promise<Buffer> {
  const channels = options?.alpha ? 4 : 3;
  const pixel = channels === 4 ? [255, 0, 0, 128] : [255, 0, 0];
  return sharp(Buffer.from(pixel), { raw: { width: 1, height: 1, channels } })
    .png()
    .toBuffer();
}

describe('toJpeg', () => {
  it('returns a valid JPEG buffer', async () => {
    const png = await createPng();
    const result = await toJpeg(png);
    const meta = await sharp(result).metadata();
    assert.equal(meta.format, 'jpeg');
  });

  it('flattens alpha to white background', async () => {
    const png = await createPng({ alpha: true });
    const result = await toJpeg(png);
    const { data, info } = await sharp(result).raw().toBuffer({ resolveWithObject: true });
    assert.equal(info.channels, 3);
    // Semi-transparent red on white → pinkish (R high, G/B > 0)
    assert.ok(data[0] > 200); // R
    assert.ok(data[1] > 50); // G — blended with white
    assert.ok(data[2] > 50); // B — blended with white
  });

  it('respects quality parameter', async () => {
    const png = await createPng();
    const high = await toJpeg(png, { quality: 100 });
    const low = await toJpeg(png, { quality: 1 });
    assert.ok(high.length >= low.length);
  });

  it('defaults to quality 100', async () => {
    const png = await createPng();
    const defaultResult = await toJpeg(png);
    const explicit100 = await toJpeg(png, { quality: 100 });
    assert.equal(defaultResult.length, explicit100.length);
  });

  it('throws on quality > 100', async () => {
    const png = await createPng();
    await assert.rejects(() => toJpeg(png, { quality: 101 }), RangeError);
  });

  it('throws on quality < 1', async () => {
    const png = await createPng();
    await assert.rejects(() => toJpeg(png, { quality: 0 }), RangeError);
  });

  it('throws on NaN quality', async () => {
    const png = await createPng();
    await assert.rejects(() => toJpeg(png, { quality: Number.NaN }), RangeError);
  });
});
