describe('Home of www.globalsqa.com/angularJs-protractor/BankingProject/#/login', () => { 
    before(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    });

    
    it('Se valida los decimales en el deposit and withdrawl', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.xpath('//*[@id="userSelect"]').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1004');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Dollar');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('14560.89');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.mensaje-no-encontrado').should('not.exist');
        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(1000)
        cy.get('.form-control').type('5.90');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.mensaje-no-encontrado').should('not.exist');
    });
});
