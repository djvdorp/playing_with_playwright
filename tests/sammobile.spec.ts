import { test, expect } from '@playwright/test';
test('load single.php, scroll to footer', async ({ page }) => {
  // Go to https://www.sammobile.com/
  await page.goto('https://www.sammobile.com/');
  // Click text=Allow all
  await page.locator('text=Allow all').click();
  // Click .article-item.article-item-flex > a >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.sammobile.com/#google_vignette' }*/),
    page.locator('.article-item.article-item-flex > a').first().click()
  ]);

  try {
  	// Click [aria-label="Close ad"]
  	const locator = page.frameLocator('iframe[name="aswift_2"]').frameLocator('iframe[name="ad_iframe"]').locator('[aria-label="Close ad"]');
	description = await locator.textContent({ timeout: 3000 })
	locator.click()
  } catch {}

  //await expect(page).toHaveURL('https://www.sammobile.com/news/bill-gates-uses-samsung-foldable-instead-of-microsoft-surface-duo/');

  // wait some seconds
  await page.waitForTimeout(5000);

  // await state
  await page.waitForLoadState('domcontentloaded');

  await page.evaluate(async () => {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    for (let i = 0; i < document.body.scrollHeight; i += 100) {
      window.scrollTo(0, i);
      await delay(100);
    }
  });

  // Click #closeAd
  await page.locator('#closeAd').click();

  // Click #text-2 >> text=© 2022 SamMobile
  await page.locator('#text-2 >> text=© 2022 SamMobile').click();

});
