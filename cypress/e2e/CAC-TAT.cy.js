require('../support/cac-tat-commands');

describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('../src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.informarNome('João')
    cy.informarSobrenome('Almeida')
    cy.informarEmail('joaoalmeida@gmail.com')
    cy.preencherCampoAjuda('Preciso de ajuda com o meu pedido')
    cy.clicarBotaoEnviar()
    cy.validarMensagemSucesso('Mensagem enviada com sucesso.')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.informarNome('João')
    cy.informarSobrenome('Almeida')
    cy.informarEmail('joaoalmeidagmail.com')
    cy.preencherCampoAjuda('Preciso de ajuda com o meu pedido')
    cy.clicarBotaoEnviar()
    cy.validarMensagemErro('Valide os campos obrigatórios!')

  })

  it('campo telefone continua vazio quando preenchido com valor não numérico', () => {
    cy.informarTelefone('abcdefghij').should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>{
    cy.informarNome('João')
    cy.informarSobrenome('Almeida')
    cy.informarEmail('joaoalmeida@gmail.com')
    cy.preencherCampoAjuda('Preciso de ajuda com o meu pedido')
    cy.clicarCheckboxTelefone()
    cy.clicarBotaoEnviar()
    cy.validarMensagemErro('Valide os campos obrigatórios!')

  })

  it('preenche e limpa os campos nome, sobrenome e email', () =>{
    cy.informarNome('João')
    cy.informarSobrenome('Almeida')
    cy.informarEmail('joaoalmeida@gmail.com')
    cy.preencherCampoAjuda('Preciso de ajuda com o meu pedido')
    cy.limparCampoNomeSobrenomeEmail()
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () =>  {
    cy.clicarBotaoEnviar()
    cy.validarMensagemErro('Valide os campos obrigatórios!')
  })

})