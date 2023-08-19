describe('angular-nx-tdd', () => {
  beforeEach(() => cy.visit('/'));

  const path = {
    photoCard: '[data-cy="photo-card"]',
    headerPhotosButton: '[data-cy="header-photos-button"]',
    headerFavoritesButton: '[data-cy="header-favorites-button"]',
    removeFavoriteButton: '[data-cy="remove-favorite-button"]',
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

  it(`> should add two images to favorites,
     > navigate to favorites
     > check cards on favorites page
     > reload page and check cards (localStorage persistence)
     > go to photo details page
     > click remove favorite button
     > should be redirect to favorites with only one photo
     `, () => {
    cy.intercept('GET', '**/*/list?**').as('getPhotos');
    cy.wait('@getPhotos');
    cy.wait(1000);
    cy.get(path.photoCard).eq(2).click();
    cy.get(path.photoCard).eq(10).click();
    cy.get(path.headerFavoritesButton).click();
    cy.location().then((location) => {
      expect(location.pathname).to.eq('/favorites');
    });
    cy.get(path.photoCard).then((cards) => {
      console.log(cards);
      expect(cards.length).eq(2);
    });
    cy.reload();
    cy.get(path.photoCard).then((cards) => {
      console.log(cards);
      expect(cards.length).eq(2);
    });
    cy.get(path.photoCard).eq(0).click();
    cy.location().then((location) => {
      expect(location.pathname).to.contain('/photo');
    });
    cy.get(path.removeFavoriteButton).click();
    cy.location().then((location) => {
      expect(location.pathname).to.contain('/favorites');
    });
    cy.get(path.photoCard).then((cards) => {
      console.log(cards);
      expect(cards.length).eq(1);
    });
  });
});
