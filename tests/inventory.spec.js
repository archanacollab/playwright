const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const fs = require('fs');
const path = require('path');

const loginDataPath = path.join(__dirname, '../Testdata/Login.json');
const loginData = JSON.parse(fs.readFileSync(loginDataPath, 'utf-8')).logindata;
const inventoryDataPath = path.join(__dirname, '../Testdata/inventory.json');
const inventoryData = JSON.parse(fs.readFileSync(inventoryDataPath, 'utf-8')).itemdata;

test('Login with valid credentials and add item', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(loginData[0].username, loginData[0].password);
    await expect(page).toHaveURL(/inventory.html/);
    const inventoryPage = new InventoryPage(page);
    for (const item of inventoryData) {
    await inventoryPage.addToCart(item);
    }
});