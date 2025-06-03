Cypress.Commands.add('informarNome', (nome) => {
    cy.get('input[id="firstName"]')
      .type(nome)
      .should('have.value', nome)
})

Cypress.Commands.add('informarSobrenome', (sobrenome) => {
    cy.get('input[id="lastName"]')
      .type(sobrenome)
      .should('have.value', sobrenome)
})

Cypress.Commands.add('informarEmail', (email) => {
    cy.get('input[id="email"]')
      .type(email)
      .should('have.value', email)
})

Cypress.Commands.add('preencherCampoAjuda', (mensagem) => {
    cy.get('textarea[id="open-text-area"]')
      .type(mensagem, { delay: 0 })
      .should('have.value', mensagem)
})

Cypress.Commands.add('informarTelefone', (telefone) => {
    cy.get('input[id="phone"]')
      .type(telefone)
})

Cypress.Commands.add('clicarBotaoEnviar', () => {
    cy.get('button[type="submit"]')
      .click()
})

Cypress.Commands.add('validarMensagemSucesso', (mensagem) => {
    cy.get('.success')
      .should('be.visible')
      .contains(mensagem)
})

Cypress.Commands.add('validarMensagemErro', (mensagem) => {
    cy.get('.error')
      .should('be.visible')
      .contains(mensagem)
})

Cypress.Commands.add('clicarCheckboxTelefone', () => {
    cy.get('#phone-checkbox')
      .click()
})

Cypress.Commands.add('limparCampoNomeSobrenomeEmail', () => {
    cy.get('input[id="firstName"]')
      .clear()
    
    cy.get('input[id="lastName"]')
      .clear()
    
    cy.get('input[id="email"]')
      .clear()
})

