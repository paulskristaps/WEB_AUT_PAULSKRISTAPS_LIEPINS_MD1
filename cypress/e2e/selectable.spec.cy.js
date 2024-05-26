import SelectablePage from '../../selectablePage.js';

describe('Selectable Grid Test', () => {
    before(() => {
        SelectablePage.visit();
    });

    it('should select and validate grid items', () => {
        SelectablePage.clickGridTab();

        const itemsToSelect = ['Two', 'Four', 'Six', 'Eight'];
        SelectablePage.selectGridItems(itemsToSelect);
        SelectablePage.validateSelectedItems(itemsToSelect);

        const itemsNotSelected = ['One', 'Three', 'Five', 'Seven', 'Nine'];
        SelectablePage.validateNotSelectedItems(itemsNotSelected);
    });
});

