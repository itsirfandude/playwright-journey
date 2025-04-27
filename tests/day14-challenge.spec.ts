import { test, expect } from "@playwright/test";
import { PLoginPage } from "../pages/PLoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

test.describe("E2E Flow: Login → Add to Cart → Logout", () => {
  let loginPage: PLoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new PLoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
  });

  test("Complete shopping flow", async ({ page }) => {
    // Login
    await loginPage.login("standard_user", "secret_sauce");

    // Add product to cart
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.addSecondProductToCart();
    // Check cart count
    const cartBadge = await inventoryPage.getCartCount();
    await expect(cartBadge).toHaveText("2");

    // Go to cart page
    await inventoryPage.goToCart();

    // Check cart item exists
    const cartItems = await cartPage.getCartItems();
    await expect(cartItems).toHaveCount(2);

    // Logout
    await cartPage.logout();

    // Verify redirected back to login page
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });
});
