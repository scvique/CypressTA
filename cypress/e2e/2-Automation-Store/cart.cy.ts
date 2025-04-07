import { CartPage } from "./pages/cart.page"
import { ProductPage } from "./pages/product.page"

let cartPage = new CartPage();
let productPage = new ProductPage();

describe('Automation Store', () => {

    beforeEach(() =>  {
        cy.visit('https://automationteststore.com/')    
    })

    describe('Cart', () => {
        beforeEach('Adding products', () => {
            //Adding products to the cart
            productPage.addToCart();
            cy.get('a[data-id="52"]').first().click()

            //Going to the cart
            cy.get('ul[class="nav topcart pull-left"]').click()
        })

        it('Product added successfully to the cart', () => {
            //Verify if the 2 products are added to the cart
            cartPage.getTableRow().should('have.length', 3);
        })
    
        it('Product deleted successfully from the cart', () => {
            //Deleting products from the cart
            cy.get('a[href="https://automationteststore.com/index.php?rt=checkout/cart&remove=50"]').click()            
            cy.get('a[href="https://automationteststore.com/index.php?rt=checkout/cart&remove=52"]').click() 

            //Verify that the table is empty
            cy.get('div[class="contentpanel"').should('contain.text', 'Your shopping cart is empty!')
        })
    })
})