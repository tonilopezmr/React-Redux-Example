var expect = require('expect')

import counter from './counter.reducer'

describe('Counter should', () => {

    it('increment count to 1', () => {
        expect(
            counter(0, {type: 'INCREMENT'})
        ).toEqual(1)
    })

    it('decrement count to 1', () => {
        expect(
            counter(2, {type: 'DECREMENT'})
        ).toEqual(1)
    })

    it('something else return the same', () => {
        expect(
            counter(1, {type: 'SOMETHING'})
        ).toEqual(1)
    })

    it('undefined state and empty action return 0', () => {
        expect(
            counter(undefined, {})
        ).toEqual(0)
    })
})