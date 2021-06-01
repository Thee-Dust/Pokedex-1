describe('Caught Page', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('button').get('button > img').eq(0).click()
      .get('button').get('button > img').eq(1).click()
      .get('button').get('button > img').eq(2).click()
      .get('header > a').eq(1).click()
  })

  it('should show url change to caught pokemon section', () => {
    cy.url().should('eq', 'http://localhost:3000/caught')
  })

  it('should show navbar on load', () => {
    cy.get('header')
      .get('a').eq(0).contains('Home')
      .get('a').eq(1).contains('Show Caught')
      .get('h1').contains('Pokédex')
  })

  it('should show caught pokemon once pokeball is clicked', () => {
    cy.get('.card-display').children().should('have.length', 3)
      .get('button').get('button > img').should('have.attr', 'src', 'data:image/png;base64,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')
  })

  it('should allow user to click pokeball and see favorited pokemon leave caught page', () => {
    cy.get('button').get('button > img').eq(0).click()
      .get('.card-display').children().should('have.length', 2)
      .get('h1').eq(1).contains('ivysaur')
  })
})
