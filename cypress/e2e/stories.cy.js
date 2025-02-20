describe('Check the end to end stories', () => {
  beforeEach(() => {

    cy.visit('http://localhost:5173')
  })

  it('displays 6 user stories', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.user-stories').children().should('have.length', 6)
    cy.get('.user-story').first().should("have.text", 'your_username')
  })

  it('should have the first story as your name', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.user-story').first().should("have.text", 'your_username')
    cy.get('.user-story').first().find('img').should('have.attr', 'src').should('include', 'https://avatar.iran.liara.run/public/girl?username=sim')

  })

  it('should navigate to a new link', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.user-story').eq(2).click()
    cy.url().should('include', '/stories/')

  })

  it('should go to next item along after 5 seconds', () => {
    cy.get('.user-story').eq(1).click()
    cy.url().should('include', '/stories/john_ddddd/ec030bcc-bfcf-49d6-aec2-bc8e99201c00')
    cy.wait(5500)
    cy.url().should('include', '/stories/john_ddddd/5a039dc0-fe98-4689-ae11-b2f2e20ef7c8')
  })

  it('should close the story when click on close', () => {
    cy.get('.user-story').eq(1).click()
    cy.url().should('include', '/stories/john_ddddd/ec030bcc-bfcf-49d6-aec2-bc8e99201c00')
    cy.get('.close').click()

  })


})
