const { sum } = require("../src/sum")

it('should get avg 3.5', () => {
    expect(sum([1, 2, 3, 4, 5, 6])).toEqual({ max: 6, min: 1, sum: 21, avg: 3.5 })
})
it('should get avg 4.3', () => {
    expect(sum([2, 3, 4, 1, 6, 3, 4, 6, 2, 12])).toEqual({ max: 12, min: 1, sum: 43, avg: 4.3 })
})
it('should get avg 4', () => {
    expect(sum([2, 3, 4, 5, 6])).toEqual({ max: 6, min: 2, sum: 20, avg: 4 })
})




