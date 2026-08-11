import { chromium } from 'file:///C:/Users/scowell1/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const browser = await chromium.launch({ headless: true, channel: 'msedge' });
let failed = false;

for (let moduleNumber = 1; moduleNumber <= 5; moduleNumber += 1) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:8768/module.html?module=${moduleNumber}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('.topic-video');
  const result = await page.evaluate(() => ({
    questions: document.querySelectorAll('.check').length,
    groups: [...document.querySelectorAll('.check-group')].map(group => group.querySelectorAll('.check').length),
    written: document.querySelectorAll('.written-evidence').length,
    videos: document.querySelectorAll('.topic-video').length,
    presentation: document.querySelector('.module-support a[download]')?.getAttribute('href'),
    openLarger: document.querySelectorAll('.infographic-open-label').length,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
  }));
  const pass = result.questions === 30 && result.groups.join(',') === '10,10,10' && result.written === 6 && result.videos === 3 && result.presentation === `presentations/programmable-light-module-${moduleNumber}.pptx` && result.openLarger >= 3 && !result.overflow && errors.length === 0;
  failed ||= !pass;
  console.log(JSON.stringify({ route: `module=${moduleNumber}`, pass, errors, ...result }));
  await page.close();
}

const interaction = await browser.newPage({ viewport: { width: 390, height: 844 } });
await interaction.goto('http://127.0.0.1:8768/module.html?module=1', { waitUntil: 'domcontentloaded' });
await interaction.waitForSelector('.topic-video');
await interaction.locator('input[name="student-name"]').fill('Course QA');
await interaction.locator('textarea[name="written-0"]').fill('Saved student evidence check.');
await interaction.locator('[data-check-button="0"]').click();
const emptyFeedback = await interaction.locator('[data-check-feedback="0"]').textContent();
await interaction.locator('[data-play-video]').first().click();
const videoSrc = await interaction.locator('.topic-video iframe').first().getAttribute('src');
await interaction.reload({ waitUntil: 'domcontentloaded' });
const restored = await interaction.locator('textarea[name="written-0"]').inputValue();
const interactionPass = emptyFeedback === 'Choose an answer first.' && restored === 'Saved student evidence check.' && videoSrc?.startsWith('https://www.youtube-nocookie.com/embed/');
failed ||= !interactionPass;
console.log(JSON.stringify({ interaction: true, pass: interactionPass, emptyFeedback, restored, videoSrc }));
await interaction.close();

for (const route of ['folio.html', 'teacher-resources.html']) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:8768/${route}`, { waitUntil: 'domcontentloaded' });
  const result = await page.evaluate(() => ({
    cards: document.querySelectorAll('.folio-card').length,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
  }));
  const pass = (route !== 'folio.html' || result.cards === 12) && !result.overflow && errors.length === 0;
  failed ||= !pass;
  console.log(JSON.stringify({ route, pass, errors, ...result }));
  await page.close();
}

await browser.close();
if (failed) process.exitCode = 1;
