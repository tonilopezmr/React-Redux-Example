'use strict'

const expect = require('expect')
const deepFreeze = require('deep-freeze')

import counterCollection from '../CounterCollection.reducer'

describe('Counter collection should do', () => {

    it('any action should be 0', () => {
        var stateAfter = [0]

        expect(
            counterCollection(undefined, {})
        ).toEqual(stateAfter)
    })

    it('add new counter', () => {
        var stateBefore = []
        var stateAfter = [0]

        deepFreeze(stateBefore)

        expect(
            counterCollection(stateBefore, {type: 'ADD'})
        ).toEqual(stateAfter)
    })

    it('remove counter from index', () => {
        var stateBefore = [10, 11, 12]
        var stateAfter = [10, 12]

        deepFreeze(stateBefore)

        expect(
            counterCollection(stateBefore, {type: 'REMOVE', index: 1})
        ).toEqual(stateAfter)
    })

    it('increment counter from index', () => {
        var stateBefore = [10, 11, 12]
        var stateAfter = [11, 11, 12]

        deepFreeze(stateBefore)

        expect(
            counterCollection(stateBefore, {type: 'INCREMENT', index: 0})
        ).toEqual(stateAfter)
    })
})