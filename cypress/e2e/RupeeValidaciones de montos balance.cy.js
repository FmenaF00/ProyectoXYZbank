describe('Home of www.globalsqa.com/angularJs-protractor/BankingProject/#/login', () => { 
    before(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    });

    
    it('Se valida el balance de los depositos y debitos de saldos', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.xpath('//*[@id="userSelect"]').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1006');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Rupee');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('100500');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('have.text', 'Deposit Successful');
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text', '100500')///html/body/div/div/div[2]/div/div[2]/strong[2]
        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(1000)
        cy.get('.form-control').type('50000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('have.text', 'Transaction successful');
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text', '50500')
    });
});
    