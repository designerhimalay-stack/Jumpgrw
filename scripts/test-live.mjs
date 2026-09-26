import { chromium } from '@playwright/test';

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4321/');
  
  // Get all case study images
  const images = await page.evaluate(() => {
    const caseSection = document.querySelector('[data-ac-cases]');
    if (!caseSection) return [];
    const imgs = caseSection.querySelectorAll('img');
    return Array.from(imgs).map(img => ({
      alt: img.alt,
      src: img.src,
      currentSrc: img.currentSrc,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight
    }));
  });
  console.log('Case images on page:', JSON.stringify(images, null, 2));

  // Check navbar links
  const navTriggers = await page.evaluate(() => {
    const triggers = document.querySelectorAll('[data-ac-nav-trigger]');
    return Array.from(triggers).map(t => t.textContent.trim());
  });
  console.log('Nav triggers:', navTriggers);

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
