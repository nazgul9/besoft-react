const initialState = {
    itemCart: [],
    totalPrice: 0,
}

const cart = (state = initialState, actions) => {
    if (actions.type === "ADD_TO_CART_PRODUCT") {
        const item = {
            count: 1,
            product: actions.product,
            lineTotalPrice: actions.product.price
        }

        const itemCart = [...state.itemCart, item]

        return {
            itemCart,
            totalPrice: itemCart.map((ans, item) => ans+item.lineTotalPrice, 0)
        }
    }
    return state
}

export default cart;