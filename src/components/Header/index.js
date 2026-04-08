import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'
import CartContext from '../../context/CartContext'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const {heading} = props

      return (
        <div className="headerContainer">
          <h1 className="heading">{heading}</h1>
          <div className="cart-summary">
            <p className="orders-title">My Orders</p>
            <AiOutlineShoppingCart id="cartIcon" />
            <p className="cartListCounter">{cartList.length}</p>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default Header
