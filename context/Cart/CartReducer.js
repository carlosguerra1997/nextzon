import { ADD_EXISTING_ITEM_TO_CART, ADD_NON_EXISTING_ITEM_TO_CART } from "../../types"

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_EXISTING_ITEM_TO_CART:
      return {
        ...state,
        totalPrice: state.totalPrice + (action.payload.product.price * action.payload.quantity),
        totalQuantities: state.totalQuantities + action.payload.quantity,
        cartProducts: state.cartProducts.map(cartProduct => {
          return cartProduct._id === action.payload.product._id ? action.payload.product : cartProduct
        })
      }
    case ADD_NON_EXISTING_ITEM_TO_CART:
      return {
        ...state,
        totalPrice: state.totalPrice + (action.payload.product.price * action.payload.quantity),
        totalQuantities: state.totalQuantities + action.payload.quantity,
        cartProducts: [...state.cartProducts, action.payload.product]
      }
    default:
      return state
  }
}