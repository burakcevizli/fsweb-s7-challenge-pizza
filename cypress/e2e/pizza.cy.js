
describe("Pizzatesti", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
    it("Birden fazla ek malzeme secilebiliyor mu ?", () => {
      cy.get('[data-cy="biber"]').click().should("be.checked"); // Seçildiğini doğrula
      cy.get('[data-cy="biber"]').click().should("not.be.checked"); // Seçilmediğini doğrula
      cy.get('[data-cy="sogan"]').click().should("be.checked"); // Seçildiğini doğrula
      cy.get('[data-cy="sucuk"]').click().should("be.checked");
      cy.get('[data-cy="peynir"]').click().should("be.checked");
    });
    
    it("Order Page düzgün çalışıyor mu?", () => {
      cy.get('[data-cy="kucuk"]').click().should("be.checked")
      cy.get('[data-cy="buyuk"]').click().should("be.checked")
      cy.get('#exampleSelect').select("Kalın")
      cy.get('[data-cy="nameInput"]').type("Burak CEVİZLİ")
      cy.get('[data-cy = "siparisVer"]').click().should("be.enabled")
    });
})







