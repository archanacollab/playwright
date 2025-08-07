const { test, expect } = require('@playwright/test');
const { readJSON } = require('../Utils/jsonReader');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const fs = require('fs');
const path = require('path');

const loginData = readJSON('Testdata/Login.json').logindata;
const inventoryData = readJSON('Testdata/Inventory.json').itemdata;


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