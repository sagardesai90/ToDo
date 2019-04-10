describe('Login using the credentials below, and logout.', function() {
    it('successfully loads', function() {
      cy.visit('/')
      
      //click login
      cy.contains('Login').click()

      //enter a username and pw
      cy.get('.action-email')
      .type('sd93@gmail.com')
      .should('have.value', 'sd93@gmail.com')
    
      cy.get('.action-password')
      .type('12345')
      .should('have.value', '12345')

      cy.get('.password').click()

      cy.get('.logout').click()
    })

  })