describe('Home of www.globalsqa.com/angularJs-protractor/BankingProject/#/login', () => {
    before(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })
  it('Verificar mensajes de error - campo faltante nombre, apellido y codigo postal', () => {
    cy.get(':nth-child(3) > .btn').click();
    cy.get('[ng-class="btnClass1"]').click();
    cy.get(':nth-child(1) > .form-control').should('exist');
    cy.get(':nth-child(2) > .form-control').should('exist');
    cy.get(':nth-child(3) > .form-control').should('exist');
    
    //Se valida mensaje de error en el campo nombre.
    cy.get('form.ng-pristine > .btn').click();
    cy.get('input[ng-model="fName"]')   //input[ng-model="fName"]
      .should('have.class', 'ng-invalid-required')
      .and('be.empty');
    
      //Se valida campo de error en el campo apellido.
    cy.get(':nth-child(1) > .form-control').type('Carlos');
    cy.get('.ng-invalid.ng-dirty > .btn').click();
    cy.get('input[ng-model="lName"]')   //input[ng-model="lName"]
      .should('have.class', 'ng-invalid-required')
      .and('be.empty');
    
      //Se valida campo de error en el campo codigo postal
    cy.get(':nth-child(2) > .form-control').type('Corrales');
    cy.get('.ng-invalid.ng-dirty > .btn').click();
    cy.get('input[ng-model="postCd"]')   //input[ng-model="postCd"]
      .should('have.class', 'ng-invalid-required')
      .and('be.empty');
    
      //Se registra el cliente
    cy.get(':nth-child(3) > .form-control').type('786787');
    cy.get('form.ng-dirty > .btn').click();
  
  //('verificación del cliente creado', () => {
    cy.get('.home').click();
    cy.get('.borderM > :nth-child(1) > .btn').click();
    cy.xpath('//*[@id="userSelect"]').select('Carlos Corrales');
    cy.get('form.ng-valid > .btn').click();
    cy.get('.borderM > :nth-child(1) > strong').should('contain.text','Carlos Corrales');

  });
});