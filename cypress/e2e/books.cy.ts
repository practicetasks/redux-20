describe('App', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('рендер заголовоки', () => {
        cy.contains('h1', 'Книги').should('be.visible')
    });

    it('должен загрузить книги', () => {
        cy.get('li', {timeout: 3000}).should('have.length', 5);
        cy.contains('li', 'книга1 — автор1').should('be.visible');
    });

    it('должен добавить новую книгу', () => {
        cy.get('input[name="title"]').type('новая книга');
        cy.get('input[name="author"]').type('новый автор');
        cy.contains('button', 'Добавить книгу').click();

        cy.contains('li', 'новая книга — новый автор').should('be.visible');
        cy.get('input[name="title"]').should('have.value', '');
        cy.get('input[name="author"]').should('have.value', '');
    });

    it('должен удалить книгу', () => {
        cy.get('li', {timeout: 3000}).should('have.length', 5);

        cy.get('li').first().within(() => {
            cy.contains('button', 'Удалить').click();
        })

        cy.get('li').should('have.length', 4);
    })
})
