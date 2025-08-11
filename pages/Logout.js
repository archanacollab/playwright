class Logout {
    constructor(page) {
        this.page = page;
        this.Logoutmenu = 'text="Open Menu"';
        this.LogoutButton = '#logout_sidebar_link'; 
    }
    async logout() {
        await this.page.click(this.Logoutmenu);
        await this.page.click(this.LogoutButton);
    }
}

module.exports = { LoginPage };
