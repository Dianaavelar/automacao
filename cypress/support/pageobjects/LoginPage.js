import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")
const urlLogin = Cypress.config("loginUrl")


class LoginPage{
    // Acessa o site que sera testado
    acessarSite() {
        cy.visit(url);
    }

    // Clicar no botão que acessa a pagina de login
    abraPaginaLogin() {
        cy.visit(urlLogin);

    }

    // Verificar se o botão tem o texto "Esqueceu senha?"
    visualizarBotaoCadastro() {
        cy.get(loginElements.botaoConect())
            .invoke('attr', 'value')
            .should('eq', 'Conecte-se')
    }
}

export default LoginPage;