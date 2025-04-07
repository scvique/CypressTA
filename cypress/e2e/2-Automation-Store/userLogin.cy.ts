describe('Automation Store', () => {

    beforeEach(() =>  {
        cy.visit('https://automationteststore.com/')    
    })

    describe('Login function', () => {
        beforeEach(() =>  {
            cy.get('a').contains('Login or register').click()    
        })

        it.skip('Create a new customer', () => {
            //Go to user registration form
            cy.get('button[title="Continue"]').click()

            //typeing all required info

            //-- Personal details --
            cy.get('#AccountFrm_firstname').type('Nathan')
            cy.get('#AccountFrm_lastname').type('Drake')
            cy.get('#AccountFrm_email').type('uncharted7@gmail.com')

            //-- Address --
            cy.get('#AccountFrm_address_1').type('Street 1')
            cy.get('#AccountFrm_city').type('Cali')
            cy.get('#AccountFrm_country_id').select(47).wait(1000)
            cy.get('#AccountFrm_zone_id').select(31)
            cy.get('#AccountFrm_postcode').type('760001')

            // -- Login details --
            cy.get('#AccountFrm_loginname').type('NathanDrake7')
            cy.get('#AccountFrm_password').type('NathanTheBest')
            cy.get('#AccountFrm_confirm').type('NathanTheBest')

            //-- Newsletter --
            cy.get('#AccountFrm_newsletter0').click()
            cy.get('#AccountFrm_agree').check()

            //-- Confirm --
            cy.get('button[title="Continue"]').click()

            //Confirme the account creation
            cy.get('h1[class="heading1"').should('contain.text', ' Your Account Has Been Created!')
        })
    
        it('Login functionality', () => {
            //Introduce the username
            cy.get('#loginFrm_loginname').type('NathanDrake1')
            cy.get('#loginFrm_password').type('NathanTheBest')

            //Continue to login
            cy.get('button[title="Login"]').click()

            //Confirm the 
            cy.get('h1[class="heading1"]').should('contain.text', 'Nathan')
        })
    })
})