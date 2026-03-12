import sharp from 'sharp';

const DEFAULT_QUALITY = 100;

type JpegOptions = {
  /** JPEG quality 1–100 (default 100). */
  quality?: number;
};

/**
 * Converts a raw image buffer to JPEG with a white background.
 *
 * Flattens alpha transparency to white — required for ECB images
 * that may have transparent backgrounds.
 *
 * @param buffer - Raw image data (any format supported by sharp)
 */
export async function toJpeg(buffer: Buffer, options: JpegOptions = {}): Promise<Buffer> {
  const { quality = DEFAULT_QUALITY } = options;
  if (!Number.isFinite(quality) || quality < 1 || quality > 100) {
    throw new RangeError(`JPEG quality must be between 1 and 100, got ${quality}`);
  }
  return sharp(buffer)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .jpeg({ quality })
    .toBuffer();
}
