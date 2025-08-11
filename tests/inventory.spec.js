const { test, expect } = require('@playwright/test');
const { readJSON } = require('../Utils/jsonReader');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const fs = require('fs');
const path = require('path');

const loginData = readJSON('Testdata/Login.json').logindata;
const inventoryData = readJSON('Testdata/Inventory.json').itemdata;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});
test('add item', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await page.goto('/inventory.html');
    for (const item of inventoryData) {
        await inventoryPage.addToCart(item);
    }
 });

    test('Verify items added to cart', async () => {
        const cartCount = await page.locator('.shopping_cart_badge').textContent();
        expect(cartCount).toBe(String(inventoryData.length));
   
});
