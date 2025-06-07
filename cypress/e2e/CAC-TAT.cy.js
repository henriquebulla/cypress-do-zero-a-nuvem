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

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.selecionarProduto('youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.selecionarProduto('mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.selecionarProdutoPorIndice(1, 'blog')
  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.selecionarTipoDeAtendimento("feedback")
  })

  it('marca cada tipo de atendimento', () => {
    cy.selecionarTipoDeAtendimento("ajuda")
    cy.selecionarTipoDeAtendimento("elogio")
    cy.selecionarTipoDeAtendimento("feedback")
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.selecionarContatoPreferencial('email')
    cy.selecionarContatoPreferencial('phone')
    cy.removerSelecaoUltimoCheckbox()
  })

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.selecionarArquivo('exemplo.json')
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.selecionarArquivoDragAndDrop('exemplo.json')
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.validarPoliticaDePrivacidade()
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('a[href="privacy.html"]')
      .invoke('removeAttr', 'target')
      .click()
    cy.get('h1').should('have.text', 'CAC TAT - Política de Privacidade')
  })
})