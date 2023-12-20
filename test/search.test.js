const { search } = require("../src/search")

it('should 3', () => {
    expect(search([2, 3, 4, 5, 6], 5)).toBe(3)
})