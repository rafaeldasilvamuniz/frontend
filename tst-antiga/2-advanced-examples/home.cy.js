

describe('Testes home', () => {
  it('Renderização', () => {
    cy.visit('https://ebac-jobs-eZe.vercel.app/')
    cy.get('.ListaVagas').should('have.length',4)
  })
})
