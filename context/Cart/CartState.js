import { useReducer } from 'react'

import { 
  ADD_EXISTING_ITEM_TO_CART, 
  ADD_NON_EXISTING_ITEM_TO_CART, 
  CLEAR_CART, 
  DELETE_ITEM_FROM_CART 
} from '../../types'

import { CartContext } from './CartContext'
import { CartReducer } from './CartReducer'

export const CartState = ({ children }) => {
  const initialState = {
    cartProducts: [],
    totalPrice: 0,
    totalQuantities: 0
  }

  const [ state, dispatch ] = useReducer(CartReducer, initialState)

  const addToCart = (product, quantity) => {
    const checkProductInCart = state.cartProducts.find(item => item._id === product._id)
    if (checkProductInCart) {
      product.quantity = checkProductInCart.quantity += quantity
      dispatch({ type: ADD_EXISTING_ITEM_TO_CART, payload: { product, quantity } })
    } else {
      product.quantity = quantity
      dispatch({ type: ADD_NON_EXISTING_ITEM_TO_CART, payload: { product, quantity } })
    }
  }

  const deleteFromCart = (product) => {
    dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload: product
    })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  return (
    <CartContext.Provider value={{
      cartProducts: state.cartProducts,
      totalPrice: state.totalPrice,
      totalQuantities: state.totalQuantities,
      addToCart,
      clearCart,
      deleteFromCart
    }}>
      { children }
    </CartContext.Provider>
  )
}
