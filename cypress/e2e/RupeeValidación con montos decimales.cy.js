describe('Home of www.globalsqa.com/angularJs-protractor/BankingProject/#/login', () => { 
    before(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    });

    
    it('Se valida los decimales en el deposit and withdrawl', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.xpath('//*[@id="userSelect"]').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1006');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Rupee');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('1460.10');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.mensaje-no-encontrado').should('not.exist');
        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(1000)
        cy.get('.form-control').type('65.23');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.mensaje-no-encontrado').should('not.exist');
    });
});
