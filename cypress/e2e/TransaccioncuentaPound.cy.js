describe('Home of www.globalsqa.com/angularJs-protractor/BankingProject/#/login', () => { 
    before(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    });
    const getTodayStartDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}T00:00`;
    };

    const startDate = getTodayStartDate();

    const transaccionesEsperadas = [
        { monto: '1000', tipo: 'Credit' },
        { monto: '804', tipo: 'Credit' },
        { monto: '2984', tipo: 'Credit' },
        { monto: '200', tipo: 'Debit' },
        { monto: '86', tipo: 'Debit' },
        { monto: '1021', tipo: 'Debit' }
    ];

    it('Cuenta Pound realizar un deposito', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.xpath('//*[@id="userSelect"]').select('Hermoine Granger');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1002');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Pound');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('1000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('have.text', 'Deposit Successful');
        cy.get('.home').click();
         

    //('Cuenta Pound realizar un deposito usando las flechas para sumar el monto', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.xpath('//*[@id="userSelect"]').select('Hermoine Granger');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1002');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Pound');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('802');
        cy.get('input[type="number"]').as('inputNumber');
        cy.get('@inputNumber').click();
        for (let i = 0; i < 2; i++) {
            cy.get('@inputNumber').type('{uparrow}');
        }
        cy.get('@inputNumber').should('have.value', '804'); 
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('have.text', 'Deposit Successful');
        cy.get('.home').click();
    
    
    //('Cuenta Pound realizar un deposito usando las flechas para restar el monto', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.xpath('//*[@id="userSelect"]').select('Hermoine Granger');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1002');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Pound');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('2992');
        cy.get('input[type="number"]').as('inputNumber');
        cy.get('@inputNumber').click();
        for (let i = 0; i < 8; i++) {
            cy.get('@inputNumber').type('{downarrow}');
        }
        cy.get('@inputNumber').should('have.value', '2984'); 
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('have.text', 'Deposit Successful');
        cy.get('.home').click();
    
    
    //('Cuenta Pound realizar un debito', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.xpath('//*[@id="userSelect"]').select('Hermoine Granger');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1002');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Pound');
        cy.get('[ng-class="btnClass3"]').click();
        cy.get('.form-control').type('200');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('have.text', 'Transaction successful');
        cy.get('.home').click();
        

    //('Cuenta Pound realizar un debito usando las flechas para sumar el monto', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.xpath('//*[@id="userSelect"]').select('Hermoine Granger');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1002');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Pound');
        cy.get('[ng-class="btnClass3"]').click();
        cy.get('.form-control').type('80');
        cy.get('input[type="number"]').as('inputNumber');
        cy.get('@inputNumber').click();
        for (let i = 0; i < 6; i++) {
            cy.get('@inputNumber').type('{uparrow}');
        }
        cy.get('@inputNumber').should('have.value', '86'); 
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('have.text', 'Transaction successful');
        cy.get('.home').click();
    
    
    //('Cuenta Pound realizar un debito usando las flechas para restar el monto', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.xpath('//*[@id="userSelect"]').select('Hermoine Granger');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1002');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Pound');
        cy.get('[ng-class="btnClass3"]').click();
        cy.get('.form-control').type('1033');
        cy.get('input[type="number"]').as('inputNumber');
        cy.get('@inputNumber').click();
        for (let i = 0; i < 12; i++) {
            cy.get('@inputNumber').type('{downarrow}');
        }
        cy.get('@inputNumber').should('have.value', '1021'); 
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('have.text', 'Transaction successful');
        cy.get('.home').click();
    
    
    //('Verificación de las transacciones anteriores', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click(); 
        cy.xpath('//*[@id="userSelect"]').select('Hermoine Granger');
        cy.get('form.ng-valid > .btn').click();
        cy.get('#accountSelect').select('1002');
        cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Pound');
        cy.get('[ng-class="btnClass1"]').click();

    
    //('validar los montos correspondientes', () => {
        transaccionesEsperadas.forEach((transaccion, index) => {
            cy.get(`tr#anchor${index} td`).eq(1).should('have.text', transaccion.monto);
            cy.get(`tr#anchor${index} td`).eq(2).should('have.text', transaccion.tipo);
        });
    });
});
    