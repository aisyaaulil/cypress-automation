describe('User Can Edit User', () => {
  //after each

  //before each test case
  beforeEach(() => {
    //reset database by calling php artisan
    cy.exec(
      'cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed'
      );
    //arrange
    cy.visit('http://localhost:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://localhost:8000/user-management/user');
    //cy.get('.card-header-action > .btn-icon').click();
  });

  //positive test case
  it('User can edit user baru', () => {
    cy.get('.table td').contains('userbaru').parent().find('a').contains('Edit').click();
    cy.get('#name').clear();
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user edited').should('have.text', 'user edited');
    cy.get('.alert').should('be.visible')
      .and('have.class', 'alert-success')
      .and('contain', 'User Berhasil Diupdate');
  });
})