import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const width = 1200;
const height = 630;
const projectRoot = process.cwd();
const fontDirectory = path.join(projectRoot, "assets", "fonts");
const regularFont = path.join(fontDirectory, "NotoSans-Regular.ttf");
const boldFont = path.join(fontDirectory, "NotoSans-Bold.ttf");
const outputDirectory = path.join(projectRoot, "public");

const cards = [
  {
    file: "opengraph-image.png",
    titleLead: "Draw directly on your screen.",
    titleAccent: "Edit everything later.",
    social: "Portable · Windows 10 & 11 · No installation · Vector, always editable",
    headlineSize: 66,
    socialSize: 27,
  },
  {
    file: "opengraph-image-sk.png",
    titleLead: "Kreslite priamo po obrazovke.",
    titleAccent: "Upravujte kedykoľvek potom.",
    social: "Prenosný · Windows 10 a 11 · Bez inštalácie · Vektor, vždy editovateľný",
    headlineSize: 62,
    socialSize: 25,
  },
  {
    file: "opengraph-image-de.png",
    titleLead: "Direkt auf den Bildschirm zeichnen.",
    titleAccent: "Alles später bearbeiten.",
    social: "Portabel · Windows 10 & 11 · Ohne Installation · Vektor, immer bearbeitbar",
    headlineSize: 58,
    socialSize: 27,
  },
];

const background = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="85%" cy="0%" r="78%">
        <stop offset="0%" stop-color="#2D7DF6" stop-opacity="0.25" />
        <stop offset="62%" stop-color="#2D7DF6" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#0B0D14" />
    <rect width="1200" height="630" fill="url(#glow)" />
  </svg>
`);

const brandIcon = Buffer.from(`
  <svg width="72" height="72" viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-14.121 -14.399) scale(1.11249)">
      <path d="M121 46 H61 A24 24 0 0 0 37 70 V186 A24 24 0 0 0 61 210 H192"
        fill="none" stroke="#2D7DF6" stroke-width="21" stroke-linejoin="round" />
      <rect x="73" y="122.5" width="37" height="11" fill="#E8EAF0" />
      <rect x="132" y="122.5" width="37" height="11" fill="#E8EAF0" />
      <rect x="115.5" y="80" width="11" height="37" fill="#E8EAF0" />
      <rect x="115.5" y="139" width="11" height="37" fill="#E8EAF0" />
      <path d="M142 47 H212 V104" fill="none" stroke="#F5842B" stroke-width="9" />
      <rect x="133.5" y="38.5" width="17" height="17" fill="#F5842B" />
      <rect x="203.5" y="95.5" width="17" height="17" fill="#F5842B" />
      <rect x="203.5" y="119.5" width="17" height="17" fill="#2D7DF6" />
      <circle cx="212" cy="47" r="17" fill="#FFFFFF" />
      <circle cx="212" cy="47" r="11" fill="#2D7DF6" />
      <circle cx="212" cy="209" r="17" fill="#FFFFFF" />
      <circle cx="212" cy="209" r="11" fill="#2D7DF6" />
    </g>
  </svg>
`);

function escapeMarkup(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function renderText({ text, color, size, fontfile, weight = "normal" }) {
  return sharp({
    text: {
      text: `<span foreground="${color}" weight="${weight}">${escapeMarkup(text)}</span>`,
      font: `Noto Sans${weight === "bold" ? " Bold" : ""} ${size}`,
      fontfile,
      dpi: 72,
      rgba: true,
      wrap: "none",
    },
  })
    .png()
    .toBuffer();
}

async function renderCard(card) {
  const brandName = await renderText({
    text: "Edi",
    color: "#E8EAF0",
    size: 34,
    fontfile: boldFont,
    weight: "bold",
  });
  const brandMark = await renderText({
    text: "vect",
    color: "#2D7DF6",
    size: 34,
    fontfile: boldFont,
    weight: "bold",
  });
  const lead = await renderText({
    text: card.titleLead,
    color: "#E8EAF0",
    size: card.headlineSize,
    fontfile: boldFont,
    weight: "bold",
  });
  const accent = await renderText({
    text: card.titleAccent,
    color: "#7FA8F9",
    size: card.headlineSize,
    fontfile: boldFont,
    weight: "bold",
  });
  const social = await renderText({
    text: card.social,
    color: "#9AA1B2",
    size: card.socialSize,
    fontfile: regularFont,
  });
  const { width: brandNameWidth = 0 } = await sharp(brandName).metadata();

  return sharp(Buffer.from(background))
    .composite([
      { input: Buffer.from(brandIcon), left: 88, top: 174 },
      { input: brandName, left: 178, top: 190 },
      { input: brandMark, left: 178 + brandNameWidth, top: 190 },
      { input: lead, left: 88, top: 270 },
      { input: accent, left: 88, top: 342 },
      { input: social, left: 88, top: 438 },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function hasExpectedLayout(image) {
  const { data, info } = await sharp(image)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let brandPixels = 0;
  let headlinePixels = 0;

  for (let y = 160; y < 250; y += 1) {
    for (let x = 80; x < 390; x += 1) {
      const offset = (y * info.width + x) * info.channels;
      const red = data[offset];
      const green = data[offset + 1];
      const blue = data[offset + 2];

      if (blue > 170 && blue > red * 1.25 && blue > green * 1.05) {
        brandPixels += 1;
      }
    }
  }

  for (let y = 260; y < 340; y += 1) {
    for (let x = 80; x < 1100; x += 1) {
      const offset = (y * info.width + x) * info.channels;
      const red = data[offset];
      const green = data[offset + 1];
      const blue = data[offset + 2];

      if (red > 175 && green > 175 && blue > 175) {
        headlinePixels += 1;
      }
    }
  }

  return brandPixels > 100 && headlinePixels > 1_000;
}

async function renderVerifiedCard(card) {
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    const image = await renderCard(card);

    if (await hasExpectedLayout(image)) {
      return { image, attempt };
    }
  }

  throw new Error(`Could not render a valid ${card.file} after 6 attempts.`);
}

await mkdir(outputDirectory, { recursive: true });

// Prime Sharp/Pango once before writing any deployable asset.
await renderCard(cards[0]);

for (const card of cards) {
  const { image, attempt } = await renderVerifiedCard(card);
  const destination = path.join(outputDirectory, card.file);
  await writeFile(destination, image);
  console.log(
    `Generated ${path.relative(projectRoot, destination)} (attempt ${attempt})`,
  );
}
