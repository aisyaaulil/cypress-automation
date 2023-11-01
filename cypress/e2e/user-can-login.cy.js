describe('user can login to system', () => {

  //positive test case 1
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://localhost:8000/')

    //act
    //untuk berinteraksi, select element html yang dibutuhkan
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();

    //assert
    //lakukan assertion sesuai test case
    cy.get('.nav-link > .d-sm-none').should('have.text','Hi, SuperAdmin');
  })

  //negative test case aisyah
  it.only('user forgot password', () => {
    //arrange
    cy.visit('http://localhost:8000/')
    //act
    cy.get('.text-small').click();
    cy.get('#email').type('superadmin@gmail.com');
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should('contain.text','Please wait before retrying.');
  })
   
 //negative test case 1
  it('user cannot login with valid username and invalid password', () => {
  //arrange
    cy.visit('http://localhost:8000/')
  //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password-salah');
    cy.get('.btn').click();
  //assert
  cy.get('.invalid-feedback').should('have.text','These credentials do not match our records.');
  });
  
   //negative test case 2
   it('user cannot login with invalid username and valid password', () => {
    //arrange
      cy.visit('http://localhost:8000/')
    //act
      cy.get(':nth-child(2) > .form-control').type('superadminsalah@gmail.com');
      cy.get(':nth-child(3) > .form-control').type('password');
      cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should('have.text','These credentials do not match our records.');
    });

    //negative test case 3
   it('user cannot login with empty username and valid password', () => {
    //arrange
      cy.visit('http://localhost:8000/')
    //act
    // cy.get(':nth-child(2) > .form-control').type('');
      cy.get(':nth-child(3) > .form-control').type('password');
      cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should('have.text','The email field is required.');
    });

      //negative test case 4
    it('user cannot login with valid username and empty password', () => {
      //arrange
        cy.visit('http://localhost:8000/')
      //act
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
        //cy.get(':nth-child(3) > .form-control').type('password');
        cy.get('.btn').click();
      //assert
      cy.get('.invalid-feedback').should('have.text','The password field is required.');
      });
})