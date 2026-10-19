describe('Login', () => {
  it('Login com dados validos deve eprmitir entrada no sistema', () => {
    // Arrange - Preparacao para o test
    cy.visit('http://localhost:4000')

    // Act - Ação do teste
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    // Assert - Verificacao do resultado esperado
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
 
  })
})