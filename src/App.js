import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Menu from './components/Menu'
import NotFound from './components/NotFound'
import CartContext from './context/CartContext'
import Cart from './components/Cart'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {cartList: [], restaurantName: ''}

  addCartItem = eachDish => {
    const {cartList} = this.state
    const productObject = cartList.find(
      item => item.dish_id === eachDish.dish_id,
    )
    if (productObject !== undefined) {
      // We found it! Now let's create a NEW list where ONLY this item is updated
      const updatedCartList = cartList.map(eachItem => {
        if (eachItem.dish_id === eachDish.dish_id) {
          // 1. Calculate new quantity
          const newQuantity = eachItem.quantity + 1
          // 2. Return the updated item
          return {...eachItem, quantity: newQuantity}
        }
        // 3. Return all other items exactly as they are
        return eachItem
      })
      this.setState({cartList: updatedCartList})
    } else {
      // If it's a brand new item, just add it to the end
      this.setState(prevState => ({
        cartList: [...prevState.cartList, eachDish],
      }))
    }
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  removeCartItem = eachItem => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.dish_id !== eachItem.dish_id,
    )
    this.setState({cartList: updatedCartList})
  }

  incrementCartItemQuantity = eachItem => {
    const {cartList} = this.state
    const incrementedCartList = cartList.map(eachCartItem => {
      if (eachCartItem.dish_id === eachItem.dish_id) {
        return {...eachCartItem, quantity: eachCartItem.quantity + 1}
      }
      return eachCartItem
    })
    this.setState({cartList: incrementedCartList})
  }

  decrementCartItemQuantity = eachItem => {
    const {cartList} = this.state
    const itemFound = cartList.find(
      eachCartItem => eachCartItem.dish_id === eachItem.dish_id,
    )
    let decrementedCartList
    if (itemFound !== undefined) {
      if (itemFound.quantity === 1) {
        decrementedCartList = cartList.filter(
          individualItem => individualItem.dish_id !== itemFound.dish_id,
        )
      } else {
        decrementedCartList = cartList.map(eachCartItem => {
          if (eachCartItem.dish_id === eachItem.dish_id) {
            return {...eachCartItem, quantity: eachCartItem.quantity - 1}
          }
          return eachCartItem
        })
      }
      console.log(decrementedCartList.length)
      this.setState({cartList: decrementedCartList})
    }
  }

  setRestaurantName = name => {
    const {restaurantName} = this.state
    this.setState({restaurantName: name})
  }

  render() {
    const {cartList, restaurantName} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          restaurantName,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          setRestaurantName: this.setRestaurantName,
        }}
      >
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Menu} />
              <ProtectedRoute exact path="/cart" component={Cart} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </BrowserRouter>
        </div>
      </CartContext.Provider>
    )
  }
}

export default App
