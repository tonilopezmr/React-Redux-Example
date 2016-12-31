'use strict'

const expect = require('expect')
const deepFreeze = require('deep-freeze')

import counterCollection from '../CounterCollection.reducer'

describe('Counter collection should do', () => {

    it('initial state when undefined', () => {
        var stateAfter = [0]

        expect(
            counterCollection(undefined, {})
        ).toEqual(stateAfter)
    })

    it('same state when unknown action', () => {
        var state = [10, 11, 12]

        expect(
            counterCollection(state, {type: 'ANYTHING'})
        ).toEqual(state)
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
        var stateAfter = [11, 12]

        deepFreeze(stateBefore)

        expect(
            counterCollection(stateBefore, {type: 'REMOVE', index: 0})
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

    it('decrement counter from index', () => {
        var stateBefore = [10, 11, 12]
        var stateAfter = [10, 11, 11]

        deepFreeze(stateBefore)

        expect(
            counterCollection(stateBefore, {type: 'DECREMENT', index: 2})
        ).toEqual(stateAfter)
    })
})