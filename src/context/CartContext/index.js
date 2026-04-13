import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  restaurantName: '',
  setRestaurantName: () => {},
})
export default CartContext
