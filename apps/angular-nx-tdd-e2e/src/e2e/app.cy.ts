describe('angular-nx-tdd', () => {
  beforeEach(() => cy.visit('/'));

  const path = {
    photoCard: '[data-cy="photo-card"]',
  };

  it('should scroll when reach the end and load more images', () => {
    cy.intercept('GET', '**/*/list?**').as('getPhotos');
    cy.wait('@getPhotos').then((req) => {
      expect(req.request.query['page']).to.eq('1');
      expect(req.response?.body.length).to.eq(30);
    });
    cy.wait(1000);
    cy.get(path.photoCard).then((cards) => expect(cards.length).to.eq(30));
    cy.scrollTo('bottom');
    cy.wait('@getPhotos').then((req) => {
      expect(req.request.query['page']).to.eq('2');
      expect(req.response?.body.length).to.eq(30);
    });
    cy.get(path.photoCard).then((cards) => expect(cards.length).to.eq(60));
  });
});
