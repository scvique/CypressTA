export class ProductPage{

    private readonly productItem = 'a[data-id="50"]';

    addToCart(){
        cy.get(this.productItem).first().click();
    }

}