import { chromium } from '@playwright/test';

async function verifyLive() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log('1. Navigating to http://localhost:4321/ ...');
  await page.goto('http://localhost:4321/');
  await page.waitForLoadState('networkidle');

  console.log('2. Checking navbar triggers...');
  const navTriggers = await page.$$eval('[data-ac-nav-trigger]', els => els.map(e => e.textContent.trim()));
  console.log('Found triggers:', navTriggers);

  console.log('3. Opening Technologies dropdown...');
  const techTrigger = page.locator('[data-ac-nav-trigger]:has-text("Technologies")');
  await techTrigger.click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'scripts/live-navbar-dropdown.png' });
  console.log('Saved scripts/live-navbar-dropdown.png');

  // Close dropdown by pressing Escape or clicking outside
  await page.keyboard.press('Escape');
  await page.waitForTimeout(400);

  console.log('4. Navigating to #case-studies ...');
  // Use in-page click or direct scroll
  await page.evaluate(() => {
    const el = document.getElementById('case-studies');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1000);

  console.log('5. Clicking VowTimer case study (#case-vowtimer-trigger)...');
  const vowTrigger = page.locator('#case-vowtimer-trigger');
  await vowTrigger.click();
  await page.waitForTimeout(800);

  const vowState = await page.evaluate(() => {
    const activeMedia = document.querySelector('[data-ac-case-media][data-active]');
    const activeImg = activeMedia ? activeMedia.querySelector('img') : null;
    const activeItem = document.querySelector('[data-ac-case][data-active]');
    return {
      activeName: activeItem ? activeItem.querySelector('[data-ac-case-name]')?.textContent : null,
      activeSummary: activeItem ? activeItem.querySelector('[data-ac-case-summary]')?.textContent : null,
      imgSrc: activeImg?.src,
      imgNaturalWidth: activeImg?.naturalWidth,
      imgNaturalHeight: activeImg?.naturalHeight,
      imgComplete: activeImg?.complete
    };
  });
  console.log('VowTimer Case State:', vowState);

  const caseSection = page.locator('#case-studies');
  await caseSection.screenshot({ path: 'scripts/live-vowtimer-case.png' });
  console.log('Saved scripts/live-vowtimer-case.png');

  await browser.close();
  console.log('Verification finished successfully!');
}

verifyLive().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
