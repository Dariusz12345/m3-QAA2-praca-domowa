class LoginPage {
    visit() {
      cy.visit('https://www.edu.goit.global/account/login'); // Otwórz stronę logowania
    }
  
    fillEmail(email) {
      cy.get('input[name="email"]').type(email); // Znajdź pole email i wpisz dane
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type(password); // Znajdź pole hasło i wpisz dane
    }
  
    clickLogin() {
      cy.get('button[type="submit"]').click(); // Kliknij przycisk Log In
    }
  }
  
  export default LoginPage;
  