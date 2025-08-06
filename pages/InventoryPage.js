class InventoryPage {
    constructor(page) {
        this.page = page;
    }

    async addToCart(itemname)
    {
         this.cart = `//div[text()='${itemname}']/ancestor::div[@class="inventory_item"]//button`;
        await this.page.locator(this.cart).click();
    }
   
}

module.exports = { InventoryPage };
