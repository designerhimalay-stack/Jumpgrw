import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

// Screenshot the full page
await page.screenshot({ path: 'scripts/screenshot-full.png', fullPage: false });
console.log('✅ Top screenshot saved to scripts/screenshot-full.png');

// Scroll to case studies section
const caseSection = await page.$('#case-studies');
if (caseSection) {
  await caseSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500); // wait for animations
  await page.screenshot({ path: 'scripts/screenshot-cases.png', fullPage: false });
  console.log('✅ Case studies screenshot saved to scripts/screenshot-cases.png');
}

// Click VowTimer to make it active
const vowBtn = await page.$('#case-vowtimer-trigger');
if (vowBtn) {
  await vowBtn.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'scripts/screenshot-vowtimer.png', fullPage: false });
  console.log('✅ VowTimer screenshot saved to scripts/screenshot-vowtimer.png');
}

// Get all case study images info
const images = await page.$$eval('[data-ac-case-media] img', imgs =>
  imgs.map(img => ({
    src: img.src,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    currentSrc: img.currentSrc,
  }))
);
console.log('\n📷 Case study images:');
images.forEach((img, i) => console.log(`  [${i}] src=${img.src.substring(0, 80)}... size=${img.naturalWidth}x${img.naturalHeight}`));

// Check the navbar logo
const logos = await page.$$eval('[data-ac-nav-bar] img', imgs =>
  imgs.map(img => ({
    src: img.src,
    alt: img.alt,
    className: img.className,
    display: getComputedStyle(img).display,
    visibility: getComputedStyle(img).visibility,
  }))
);
console.log('\n🖼️ Navbar logos:');
logos.forEach((l, i) => console.log(`  [${i}] alt="${l.alt}" class="${l.className}" display=${l.display}`));

// Download the VowTimer image to check what's actually served
const vowtimerImg = images[2]; // VowTimer is 3rd (index 2)
if (vowtimerImg) {
  const resp = await page.request.get(vowtimerImg.currentSrc || vowtimerImg.src);
  const buf = await resp.body();
  writeFileSync('scripts/vowtimer-served.jpg', buf);
  console.log(`\n📦 Downloaded served VowTimer image: ${buf.length} bytes -> scripts/vowtimer-served.jpg`);
}

await browser.close();
console.log('\n✅ Done');
