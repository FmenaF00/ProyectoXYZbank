describe('Home of www.globalsqa.com/angularJs-protractor/BankingProject/#/login', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })
    it('Elimacion de un cliente', () => {
      cy.get(':nth-child(3) > .btn').click()
      cy.get('[ng-class="btnClass3"]').click()
      cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text', 'Hermoine')
      cy.get(':nth-child(1) > :nth-child(5) > button').click()
      cy.get('.form-control').type('Hermoine')
      cy.get('tbody > :nth-child(1) > :nth-child(1)').should('not.exist')
    })
  })
