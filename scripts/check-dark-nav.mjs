import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

// Get the position of the case-studies section
const casePos = await page.evaluate(() => {
  const el = document.getElementById('case-studies');
  return el ? el.getBoundingClientRect().top + window.scrollY : 0;
});
console.log(`Case studies section at y=${casePos}`);

// Scroll to it using window.scrollTo to fire scroll events
await page.evaluate((y) => {
  window.scrollTo({ top: y, behavior: 'instant' });
}, casePos);

// Give the scroll handler time to fire
await page.waitForTimeout(500);

// Dispatch a manual scroll event just in case
await page.evaluate(() => window.dispatchEvent(new Event('scroll')));
await page.waitForTimeout(200);

// Click VowTimer
const vowBtn = await page.$('#case-vowtimer-trigger');
if (vowBtn) {
  await vowBtn.click();
  await page.waitForTimeout(800);
}

await page.screenshot({ path: 'scripts/screenshot-case-dark.png', fullPage: false });
console.log('✅ Screenshot at case studies saved');

// Check dark mode
const navState = await page.evaluate(() => {
  const nav = document.querySelector('.ac-nav');
  const bar = document.querySelector('[data-ac-nav-bar]');
  const lightLogo = document.querySelector('.ac-nav-logo-light');
  const darkLogo = document.querySelector('.ac-nav-logo-dark');
  return {
    hasDarkAttr: nav?.hasAttribute('data-ac-nav-dark'),
    barClasses: bar?.className,
    lightDisplay: lightLogo ? getComputedStyle(lightLogo).display : 'missing',
    darkDisplay: darkLogo ? getComputedStyle(darkLogo).display : 'missing',
    scrollY: window.scrollY,
  };
});
console.log('\n📊 Nav state:', JSON.stringify(navState, null, 2));

await browser.close();
