describe('Home of www.globalsqa.com/angularJs-protractor/BankingProject/#/login', () => {
    before(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    });
    it('Verificacion de alertas en open account', () => {
      cy.get(':nth-child(3) > .btn').click();
      cy.get('[ng-class="btnClass2"]').click();
      cy.get('form.ng-pristine > button').click();
      cy.get('#userSelect')
        .should('have.class', 'ng-invalid-required');
      cy.get('#userSelect').select('Hermoine Granger');
      cy.get('.ng-invalid.ng-dirty > button').click();
      cy.get('#currency')
        .should('have.class', 'ng-invalid-required');
      cy.get('#currency').select('Dollar');
      cy.get('form.ng-dirty > button').click();
      cy.get('.home').click();
    
      //Consultar la cuenta del cliente
    //('Verificación de la cuenta del cliente', () => {
      cy.get('.borderM > :nth-child(1) > .btn').click();
      cy.xpath('//*[@id="userSelect"]').select('Hermoine Granger');
      cy.get('form.ng-valid > .btn').click();
      cy.get('#accountSelect').find('option').then($options => {
          // Extraer los valores numéricos de las opciones, eliminando el prefijo "number:"
          const values = Array.from($options)
          .map(option => {
              const value = option.value;
              const numericValue = parseFloat(value.replace('number:', '')); // Extraer el valor numérico
              return isNaN(numericValue) ? null : numericValue;
          })
          .filter(value => value !== null); // Filtrar valores nulos
          
          // Verificar los valores extraídos
          cy.log('Valores extraídos:', values);
          
          // Encontrar el valor máximo si hay valores válidos
          if (values.length > 0) {
          const maxValue = Math.max(...values);
          
          // Verificar el valor máximo calculado
          cy.log('Valor máximo:', maxValue);
          
          // Seleccionar el valor máximo en el dropdown
          cy.get('#accountSelect').select(`number:${maxValue}`).should('have.value', `number:${maxValue}`);
          } else {
          // Manejar el caso en que no hay valores válidos
          cy.log('No se encontraron valores válidos en el dropdown');
          }
      });
            //cy.wait(2000)  
      cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Dollar');

    

       //validando el boton de logout
    //('oprimiendo el boton de logout', () => {
        cy.get('.logout').click();
    });
});
