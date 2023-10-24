/* global Given, When, Then */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


Given("acesso o site ultima", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.abraPaginaLogin();
})

Then("devo visualizar botao de conecte-se", () => {
    loginPage.visualizarBotaoCadastro();
})