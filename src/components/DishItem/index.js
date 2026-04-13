import {useState} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const DishItem = props => {
  const [quantity, changeQuantity] = useState(0)
  return (
    <CartContext.Consumer>
      {value => {
        const {cartList, addCartItem} = value
        const {eachDish} = props
        const {
          dish_name: dishName,
          dish_currency: curr,
          dish_price: price,
          dish_description: desc,
          dish_calories: calories,
          dish_Availability: availibility,
          dish_image: img,
          dish_Type: type,
          addonCat: addOn,
          dish_id: dishId,
        } = eachDish
        const onIncrementItemQuantity = () => {
          const newQuantity = quantity + 1
          changeQuantity(newQuantity)
        }
        const onDecrementItemQuantity = () => {
          if (quantity > 0) {
            const newQuantity = quantity - 1
            changeQuantity(newQuantity)
          }
        }
        const onClickAddToCart = () => {
          addCartItem({...eachDish, quantity})
        }

        return (
          <li className="row  DishItemLi">
            <div className="col-8 d-flex mr-auto">
              <div className="me-3">
                {type === 1 ? (
                  <img
                    src="https://res.cloudinary.com/domacne8q/image/upload/v1774680878/Border_1_ihr8sl.png"
                    height="25px"
                    width="25px"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/domacne8q/image/upload/v1774680878/Border_ugdk1g.png"
                    height="25px"
                    width="25px"
                  />
                )}
              </div>
              <div className="dish-details-container">
                <h3 className="fw-bold">{dishName}</h3>
                <p className="dish-price">{`${curr}${price}`}</p>
                <p className="desc">{desc}</p>
                {availibility ? (
                  <div className="QuantityButton">
                    <button
                      type="button"
                      className="btn-qtyChange"
                      onClick={() => onDecrementItemQuantity(eachDish)}
                    >
                      -
                    </button>
                    <p className="quantity-text">{quantity}</p>
                    <button
                      type="button"
                      className="btn-qtyChange"
                      onClick={() => onIncrementItemQuantity(eachDish)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <p className="not-available">Not available</p>
                )}
                {availibility === true && quantity > 0 && (
                  <button type="button" onClick={onClickAddToCart}>
                    ADD TO CART
                  </button>
                )}
                {addOn.length > 0 ? (
                  <p className="customizationMsg">Customizations available</p>
                ) : null}
              </div>
            </div>
            <div className="right-content-container col-4 d-flex">
              <div className="col-6">
                <p className="calorie">{calories} calories</p>
              </div>
              <div className="col-6">
                <img src={img} className="dishPicture" />
              </div>
            </div>
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

export default DishItem
