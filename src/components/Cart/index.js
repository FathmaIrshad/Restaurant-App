import Header from '../Header'
import CartContext from '../../context/CartContext'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {
        cartList,
        removeCartItem,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const onClickRemoveAll = () => {
        removeAllCartItems()
      }
      const onClickRemoveItem = eachItem => {
        removeCartItem(eachItem)
      }

      return (
        <div>
          <Header />
          <h1>Cart</h1>
          {cartList.length === 0 ? (
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png" />
          ) : (
            <div>
              <button type="button" onClick={onClickRemoveAll}>
                Remove All
              </button>
              <ul>
                {cartList.map(eachItem => (
                  <li key={eachItem.dish_id}>
                    <p>{eachItem.dish_name}</p>
                    <img src={eachItem.dish_image} alt={eachItem.dish_name} />
                    <p>{`${eachItem.dish_currency} ${eachItem.dish_price}`}</p>

                    <button
                      type="button"
                      onClick={() => decrementCartItemQuantity(eachItem)}
                    >
                      -
                    </button>

                    <p>{eachItem.quantity}</p>

                    <button
                      type="button"
                      onClick={() => incrementCartItemQuantity(eachItem)}
                    >
                      +
                    </button>

                    {eachItem.quantity > 0 && (
                      <button
                        type="button"
                        onClick={() => onClickRemoveItem(eachItem)}
                      >
                        Remove
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
