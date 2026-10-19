describe('Login', () => {
  beforeEach(() => {
    // Arrange - Preparacao para o test
    cy.visit(Cypress.config('baseUrl'))
  })
  
  it('Login com dados validos deve eprmitir entrada no sistema', () => {
    // Act - Ação do teste
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })  
    cy.contains('button', 'Entrar').click()

    // Assert - Verificacao do resultado esperado
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidos deve apresentar mensagemd e erro', () => {
    // Act - Ação do teste
    
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()

    // Assert - Verificacao do resultado esperado
    cy.get('.toast').should('be.visible')

 
  })

})