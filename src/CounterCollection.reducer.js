const add = (list) => {
    return [...list, 0]
}

const remove = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ]
}

const increment = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ]
}

const decrement = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] - 1,
        ...list.slice(index + 1)
    ]
}

const counterCollection = (state = [0], action) => {
    switch(action.type) {
        case 'ADD':
            return add(state)
            break
        case 'REMOVE':
            return remove(state, action.index)
            break
        case 'INCREMENT':
            return increment(state, action.index)
        case 'DECREMENT':
            return decrement(state, action.index)
        default:
         return state
    }
}

export default counterCollection