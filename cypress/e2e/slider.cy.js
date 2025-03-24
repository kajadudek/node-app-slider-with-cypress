describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Gallery Navigation Test', function () {
  it('Checks change of slides while navigating', function () {
    cy.visit('http://localhost:3000');
    let initialSlide;
    cy.get('.swiper-slide-active').then(($slide) => {
      initialSlide = $slide.text();
    });
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should(($slide) => {
      expect($slide.text()).not.to.eq(initialSlide);
    });
    let nextSlide;
    cy.get('.swiper-slide-active').then(($slide) => {
      nextSlide = $slide.text();
    });
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should(($slide) => {
      expect($slide.text()).not.to.eq(nextSlide);
      expect($slide.text()).to.eq(initialSlide);
    });
  });
});