/**
 * Brand Configuration
 *
 * This is the single source of truth for the brand color.
 * Change BRAND_COLOR here to update every button, glow, shadow,
 * focus ring, and Cal.com embed accent across the entire site.
 *
 * Accepted format: a valid 6-digit CSS hex color, e.g. "#4F46E5"
 * Do NOT use shorthand (#FFF), rgb(), or CSS variable names here —
 * the value is used in canvas rgba() parsing and email HTML templates
 * which require a literal hex string.
 */

const RAW = "#4F46E5";

if (!/^#[0-9A-Fa-f]{6}$/.test(RAW)) {
  throw new Error(
    `[brand] BRAND_COLOR must be a 6-digit hex color (e.g. "#4F46E5"). Got: "${RAW}"`
  );
}

export const BRAND_COLOR: string = RAW;
