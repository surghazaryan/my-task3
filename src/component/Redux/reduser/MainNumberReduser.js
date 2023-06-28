import React from 'react'

const initalState = {
    count: 1
}

export default function MainNumberReduser(state = initalState, action) {
    switch (action.type) {
        case "minus":
            return { count: state.count != 1 ? state.count - 1 : state.count = 1 }

        case "plus":
            return { count: state.count + 1 }

        default:
            return state
    }
}
