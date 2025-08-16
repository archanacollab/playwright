const { test, expect } = require('@playwright/test');
const { readJSON } = require('../Utils/jsonReader');
const { LoginPage } = require('../pages/LoginPage');
const fs = require('fs');
const path = require('path');
const loginData =readJSON('Testdata/Login.json').logindata;

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(loginData[0].username, loginData[0].password);
    await expect(page).toHaveURL(/inventory.html/);
});

test('Login with invalid credentials ', async ({ page }) => {
     const loginPage = new LoginPage(page);
    await loginPage.goto(); 
    await loginPage.login(loginData[1].username, loginData[1].password);
    await expect(page.locator(loginPage.errorButton)).toBeVisible({ timeout: 10000 });

});
