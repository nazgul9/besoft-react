const initialState = {
    count: 0
}

const reduce = (state = initialState, action) => {
    if (action.type === "add") {
        return {
            count: state.count + 1
        }
    }

    if (action.type === "minus") {
        return {
            count: state.count - 1
        }
    }

    if (action.type === "umno") {
        return {
            count: state.count * 2
        }
    }

    if (action.type === "deli") {
        return {
            count: state.count / 2
        }
    }
    return state
}

export default reduce;

