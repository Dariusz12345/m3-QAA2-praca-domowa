class HomePage {
    openUserMenu() {
      cy.get('.user-menu-button').should('be.visible').click(); // Otwórz menu
    }
  
    clickLogout() {
      cy.contains('Log out').click(); // Znajdź przycisk Log out i kliknij
    }
  }
  
  export default HomePage;
  