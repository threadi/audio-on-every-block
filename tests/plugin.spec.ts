import { test, expect } from './fixtures';

// @ts-ignore
test('Plugin active', async ({ page, cli }) => {
    // @ts-ignore
    await page.goto(`${cli.serverUrl}/wp-admin/options-general.php?page=audio_on_every_block`);
    await expect(page).toHaveTitle(/Audio on every Block/);
});