const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); // navigates to https://www.saucedemo.com
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
});
