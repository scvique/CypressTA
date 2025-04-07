export class CartPage {

    private readonly tableRowItem = 'div[class="container-fluid cart-info product-list"] table tbody tr';

    getTableRow(){
        return cy.get(this.tableRowItem);
    }

}