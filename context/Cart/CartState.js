import { useReducer } from 'react'
import toast from 'react-hot-toast'

import { ADD_EXISTING_ITEM_TO_CART, ADD_NON_EXISTING_ITEM_TO_CART } from '../../types'

import { CartContext } from './CartContext'
import { CartReducer } from './CartReducer'

export const CartState = ({ children }) => {
  const initialState = {
    cartProducts: [],
    showCart: false,
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

    toast.success(`${quantity} ${product.name} agregados al carrito`)
  }

  return (
    <CartContext.Provider value={{
      cartProducts: state.cartProducts,
      showCart: state.showCart,
      totalPrice: state.totalPrice,
      totalQuantities: state.totalQuantities,
      addToCart
    }}>
      { children }
    </CartContext.Provider>
  )
}