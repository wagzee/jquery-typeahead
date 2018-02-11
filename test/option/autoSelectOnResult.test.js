const $ = require("jquery");
const Typeahead = require('../../src/jquery.typeahead');

let source = {
    groupName: {
        data: ['one', 'two', 'tree']
    },
};

describe('Typeahead autoSelectOnResult option Tests - autoSelection on matching result', () => {
    const defaultOptions = {
        minLength: 1,
        order: "asc",
        searchOnFocus: false,
        source,
    };
    let myTypeaheadWithAutoSelect;
    let myTypeaheadNoAutoSelect;

    beforeAll(() => {
        document.body.innerHTML = '<input class="js-typeahead"><input class="js-typehead-noAutoSelect">';
        myTypeaheadWithAutoSelect = $.typeahead(Object.assign({}, defaultOptions, {
            input: '.js-typeahead',
            autoSelectOnResult: true,
        }));
        myTypeaheadNoAutoSelect = $.typeahead(Object.assign({}, defaultOptions, {
            input: '.js-typehead-noAutoSelect',
        }));
    });
    it('default config should be false', () => {
        expect(myTypeaheadNoAutoSelect.options.autoSelectOnResult).toBeFalsy();
    });
    it('AutoSelect: First item should be selected on match', () => {
        myTypeaheadWithAutoSelect.node.val('on').trigger('input');
        expect(myTypeaheadWithAutoSelect.resultContainer.find('li:eq(0)').hasClass('active')).toBeTruthy();
    });
    it('No AutoSelect: shouldn\'t be selected item without any key press', () => {
        myTypeaheadNoAutoSelect.node.val('on').trigger('input');
        myTypeaheadNoAutoSelect.resultContainer
            .find('li')
            .each((index, item) => {
                expect($(item).hasClass('active')).toBeFalsy();
            });
    });
});

describe('Typeahead autoSelectOnResult option Tests - common functionality test', () => {

});