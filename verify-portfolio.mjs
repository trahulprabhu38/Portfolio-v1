import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

// 1. Projects page (/projects uses ProjectsPage.jsx with pp-card-visual)
await page.goto('http://localhost:5199/projects');
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/projects-page.png' });

const imgCount = await page.locator('.pp-card-img img').count();
const cardVisualCount = await page.locator('.pp-card-visual').count();
const visualNumberCount = await page.locator('.pp-card-visual-number').count();
const tagCount = await page.locator('.pp-card-visual .pp-tag').count();
console.log('pp-card-img imgs (should be 0):', imgCount);
console.log('.pp-card-visual count (should be 7):', cardVisualCount);
console.log('.pp-card-visual-number count (should be 7):', visualNumberCount);
console.log('tags inside visual (should be >0):', tagCount);

// 2. About navigation — __hScrollData populated on load (onRefresh fix)
await page.goto('http://localhost:5199/');
await page.waitForTimeout(2000);
const hScrollDataOnLoad = await page.evaluate(() => window.__hScrollData);
console.log('__hScrollData on load (should be non-null):', JSON.stringify(hScrollDataOnLoad));

// Click About in navbar
await page.locator('a.menu-item', { hasText: 'About' }).click();
await page.waitForTimeout(1000);
const scrollYAfterAbout = await page.evaluate(() => window.scrollY);
console.log('scrollY after clicking About (should be ~991):', scrollYAfterAbout);
await page.screenshot({ path: '/tmp/about-nav.png' });

// 3. Certifications — scrolls to top
await page.goto('http://localhost:5199/');
await page.waitForTimeout(800);
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(300);
const scrollBeforeCerts = await page.evaluate(() => window.scrollY);
console.log('scrollY before Certifications click:', scrollBeforeCerts);
await page.locator('button', { hasText: 'Certifications' }).click();
await page.waitForTimeout(800);
const certScrollY = await page.evaluate(() => window.scrollY);
const certUrl = page.url();
console.log('Certifications URL:', certUrl, '| scrollY (should be 0):', certScrollY);
await page.screenshot({ path: '/tmp/certifications-top.png' });

await browser.close();
console.log('All checks done.');
