describe('User Can Open Register Page', () => {
  it('User can open register page', () => {
    cy.visit('http://localhost:8000/')
    cy.get('.mt-5 > a').click();

  });
});