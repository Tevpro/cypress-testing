/// <reference types="cypress" />

context('SideMenu Testing', () => {
    beforeEach(() => {
        // Emulate an iPhone
        cy.viewport('iphone-6+')

        // Open the application
        cy.visit('http://localhost:8100')
    })

    it('should open side menu and click menu option Favorites', () => {
        // Open the side menu
        cy.get('ion-menu-button')
            .shadow()
            .find('button')
            .click();

        // Count number of items in the side menu
        cy.get('#inbox-list ion-item')
            .as('inbox-list')
            .should('have.length', '6')

        // Click the Favorites menu option
        cy.get('@inbox-list')
            .eq('2')
            .click();
    })
})