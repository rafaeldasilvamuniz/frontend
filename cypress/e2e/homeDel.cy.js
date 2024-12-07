/// <reference types="cypress" />

describe("Testes para a exclusão", () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve excluir o contato', () => {
   //cy.visit('https://agenda-contatos-react.vercel.app')
      //cy.get(':nth-child(4) > .sc-gueYoa > .delete')
      cy.get(':nth-child(5) > .sc-gueYoa > .delete')
  })
})


