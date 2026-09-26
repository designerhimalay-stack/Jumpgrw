import sharp from 'sharp';

const W = 1600;
const H = 1067;

async function run() {
  const phone = await sharp('C:/Users/Himalay Singh/.gemini/antigravity-ide/brain/ebe88bf2-d448-4841-af80-347c3f5d5f02/scratch/case_assets/vow-timerbnr-screen64-portrait-scaled.webp')
    .resize({ height: 920, fit: 'inside' })
    .toBuffer();
  const pMeta = await sharp(phone).metadata();

  const bgSvg = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vowBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fdfcfb"/>
          <stop offset="100%" stop-color="#f5efe4"/>
        </linearGradient>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#c5a059" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#c5a059" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#vowBg)"/>
      <circle cx="${W / 2}" cy="${H / 2}" r="480" fill="url(#goldGlow)"/>
      <path d="M 1250 0 C 1450 150, 1600 300, 1600 550 L 1600 0 Z" fill="#d4af37" opacity="0.10"/>
      <path d="M 0 750 C 300 700, 600 900, 850 1067 L 0 1067 Z" fill="#c5a059" opacity="0.08"/>
    </svg>
  `);

  await sharp(bgSvg)
    .composite([
      {
        input: phone,
        left: Math.round((W - pMeta.width) / 2),
        top: Math.round((H - pMeta.height) / 2 + 10)
      }
    ])
    .jpeg({ quality: 94 })
    .toFile('src/assets/cases/vowtimer.jpg');

  console.log('Successfully rebuilt src/assets/cases/vowtimer.jpg');
}

run().catch(console.error);
