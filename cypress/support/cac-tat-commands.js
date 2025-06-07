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

Cypress.Commands.add('selecionarProduto', (produto) => {
  cy.get('select[id="product"]')
    .select(produto)
    .should('have.value', produto)
})

Cypress.Commands.add('selecionarProdutoPorIndice', (indice, produto) => {
    cy.get('select[id="product"]')
    .select(indice)
    .should('have.value', produto)
})

Cypress.Commands.add('selecionarProdutoPorIndice', (indice, produto) => {
    cy.get('select[id="product"]')
      .select(indice)
      .should('have.value', produto)
})

Cypress.Commands.add('selecionarTipoDeAtendimento', (tipoAtendimento) => {
    cy.get('[type="radio"]')
      .check(tipoAtendimento)
      .should('be.checked')
})

Cypress.Commands.add('selecionarContatoPreferencial', (tipoContato) => {
    cy.get('[type="checkbox"]')
      .check(tipoContato)
      .should('be.checked')
})

Cypress.Commands.add('removerSelecaoUltimoCheckbox', () => {
  cy.get('[type="checkbox"]')
    .last()
    .uncheck()
    .should('not.be.checked')
})

Cypress.Commands.add('selecionarArquivo', () => {
  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json')
    .should('have.value', 'C:\\fakepath\\example.json')
})

Cypress.Commands.add('selecionarArquivoDragAndDrop', () => {
  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
    .should('have.value', 'C:\\fakepath\\example.json')
})

Cypress.Commands.add('validarPoliticaDePrivacidade', () => {
  cy.get('a[href="privacy.html"]')
    .should('have.attr', 'target', '_blank')
  
})