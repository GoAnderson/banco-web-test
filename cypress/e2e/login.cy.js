describe('Login', () => {
  it('Login com dados validos deve eprmitir entrada no sistema', () => {
    // Arrange - Preparacao para o test
    cy.visit('http://localhost:4000')

    // Act - Ação do teste
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    // Assert - Verificacao do resultado esperado
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
 
  })

  it('Login com dados invalidos deve apresentar mensagemd e erro', () => {
    // Arrange - Preparacao para o test
    cy.visit('http://localhost:4000')

    // Act - Ação do teste
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('114343')
    cy.contains('button', 'Entrar').click()

    // Assert - Verificacao do resultado esperado
    cy.get('.toast').should('be.visible')

 
  })

})