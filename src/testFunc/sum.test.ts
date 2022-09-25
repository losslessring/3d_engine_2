import sum from "./sum"

const result = 4

it('Sum ', () => {
    expect(sum(2)(2)).toStrictEqual(result)
})