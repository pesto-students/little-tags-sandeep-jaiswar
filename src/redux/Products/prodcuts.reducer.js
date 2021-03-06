import productTypes from './prodcuts.type';

const INITIAL_STATE = {
    products: [],
    product: {}
}

const productReducer = (state = INITIAL_STATE, action) => {
    console.log("Action from saga", action);
    switch (action.type) {
        case productTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case productTypes.SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}

export default productReducer;