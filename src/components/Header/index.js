import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {cartList, restaurantName} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <div className="headerContainer">
          <Link to="/">
            <h1 className="heading">{restaurantName}</h1>
          </Link>
          <div className="cart-summary">
            <p className="orders-title">My Orders</p>
            <Link to="/cart">
              <button
                type="button"
                data-testid="cart"
                className="cart-icon-container"
              >
                <AiOutlineShoppingCart id="cartIcon" />
              </button>
            </Link>
            <p className="cartListCounter">{cartList.length}</p>
            <button type="button" onClick={onClickLogout}>
              Logout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default withRouter(Header)
