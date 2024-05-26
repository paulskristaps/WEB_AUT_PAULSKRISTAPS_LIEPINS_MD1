class SelectablePage {

    visit() {
        cy.visit('https://demoqa.com/selectable');
    }

    clickGridTab() {
        cy.contains('a', 'Grid').click();
    }

    selectGridItems(items) {
        items.forEach(item => {
            cy.contains('li', item).click();
        });
    }

    validateSelectedItems(items) {
        items.forEach(item => {
            cy.get('[class="list-group-item active list-group-item-action"]').contains(item);
        });
    }

    validateNotSelectedItems(items) {
        items.forEach(item => {
            cy.get('[class="list-group-item active list-group-item-action"]').contains(item).should("not.exist");
        });
    }
}

export default new SelectablePage();