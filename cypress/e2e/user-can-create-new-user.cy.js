describe('user can create new user', () => {

  //before each test case
  beforeEach(() => {
    //arrange
    cy.visit('http://localhost:8000/')
    //reset database by calling php artisan
    cy.exec(
      "cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed"
      );
   
   //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://localhost:8000/user-management/user');
    cy.get('.card-header-action > .btn-icon').click();
   
  });

  //Positive test case
  it('user can create new user', () => { 
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@email.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();
  
    //assert
    cy.get('p').should('be.visible');
    cy.get('p').should('have.text','Data Berhasil Ditambahkan');
    cy.get(".nav-link > .d-sm-none").click();
    cy.get('.text-danger').click();
  })
      // negatif test 
    it('user cannot create new user  because name is required', () => { 
      cy.get('#email').type('baru@email.com');
      cy.get('#password').type('1234567890');
      cy.get('.btn-primary').click();
    
      //assert
      cy.get('.invalid-feedback').should('be.visible');
      cy.get('.invalid-feedback').should('have.class','invalid-feedback');
      cy.get('.invalid-feedback').should('contain','The name field is required');
      cy.get(".nav-link > .d-sm-none").click();
      cy.get('.text-danger').click();   
   /* ==== End Cypress Studio ==== */
  })

})