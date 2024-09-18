describe('Home of www.globalsqa.com/angularJs-protractor/BankingProject/#/login', () => {
        before(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        
    });
        it('Registrar un costumer', () => {
            cy.get(':nth-child(3) > .btn').click();
            cy.xpath('/html/body/div/div/div[2]/div/div[1]/button[1]').click();
            cy.get(':nth-child(1) > .form-control').type('Jose');
            cy.get(':nth-child(2) > .form-control').type('Dos');
            cy.get(':nth-child(3) > .form-control').type('2222');
            cy.get('form.ng-dirty > .btn').click();
            cy.get('.home').click();
            cy.get('.borderM > :nth-child(1) > .btn').click();
            cy.xpath('//*[@id="userSelect"]').select('Jose Dos');
            cy.get('form.ng-valid > .btn').click();
            cy.get('.borderM > :nth-child(1) > strong');
        //('Crear una cuenta Dollar nueva a Jose Dos', () => {
            cy.get('.home').click();
            cy.get(':nth-child(3) > .btn').click();
            cy.get('[ng-class="btnClass2"]').click();
            cy.xpath('//*[@id="userSelect"]').select('Jose Dos');
            cy.xpath('//*[@id="currency"]').select('Dollar');
            cy.get('form.ng-dirty > button').click();
            cy.get('.home').click();
            cy.get('.borderM > :nth-child(1) > .btn').click();
            cy.xpath('//*[@id="userSelect"]').select('Jose Dos');
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
        
            cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Dollar');
        

        //('Crear una cuenta Pound nueva a Jose Dos', () => {
            cy.get('.home').click();
            cy.get(':nth-child(3) > .btn').click();
            cy.get('[ng-class="btnClass2"]').click();
            cy.xpath('//*[@id="userSelect"]').select('Jose Dos');
            cy.xpath('//*[@id="currency"]').select('Pound');
            cy.get('form.ng-dirty > button').click();
            cy.get('.home').click();
            cy.get('.borderM > :nth-child(1) > .btn').click();
            cy.xpath('//*[@id="userSelect"]').select('Jose Dos');
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
            cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Pound');

        

        //('Crear una cuenta Rupee nueva a Jose Dos', () => {
            cy.get('.home').click();
            cy.get(':nth-child(3) > .btn').click();
            cy.get('[ng-class="btnClass2"]').click();
            cy.xpath('//*[@id="userSelect"]').select('Jose Dos');
            cy.xpath('//*[@id="currency"]').select('Rupee');
            cy.get('form.ng-dirty > button').click();
            cy.get('.home').click();
            cy.get('.borderM > :nth-child(1) > .btn').click();
            cy.xpath('//*[@id="userSelect"]').select('Jose Dos');
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
            cy.get('.borderM>:nth-child(3)>:nth-child(3)').should('contain.text', 'Rupee');

        });       

    });
    