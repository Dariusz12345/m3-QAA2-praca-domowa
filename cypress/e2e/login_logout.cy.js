import LoginPage from '../pages/Login';
import HomePage from '../pages/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Login and Logout Tests with Page Object Pattern', () => {
  it('Test 1: Login with user888@gmail.com and logout', () => {
    // Otwórz stronę logowania
    loginPage.visit();

    // Wpisz dane logowania
    loginPage.fillEmail('user888@gmail.com');
    loginPage.fillPassword('1234567890');
    loginPage.clickLogin();

    // Otwórz menu i wyloguj się
    homePage.openUserMenu();
    homePage.clickLogout();

    // Upewnij się, że wróciło do strony logowania
    cy.url().should('include', '/account/login');
  });

  it('Test 2: Login with testowyqa@qa.team and logout', () => {
    // Otwórz stronę logowania
    loginPage.visit();

    // Wpisz dane logowania
    loginPage.fillEmail('testowyqa@qa.team');
    loginPage.fillPassword('QA!automation-1');
    loginPage.clickLogin();

    // Otwórz menu i wyloguj się
    homePage.openUserMenu();
    homePage.clickLogout();

    // Upewnij się, że wróciło do strony logowania
    cy.url().should('include', '/account/login');
  });
});
