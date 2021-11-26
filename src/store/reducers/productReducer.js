const SET_PRODUCTS = 'SET_PRODUCTS'

const defaultState = {
    products: [],
    isFetching: true
}

export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            }
        default:
            return state
    }
}

export const setProducts = (items) => ({type: SET_PRODUCTS, payload: items})