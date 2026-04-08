import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Menu from './components/Menu'
import NotFound from './components/NotFound'
import CartContext from './context/CartContext'
import Cart from './components/Cart'

class App extends Component {
  state = {cartList: []}

  addCartItem = eachDish => {
    const {cartList} = this.state

    // const productObject = cartList.find(
    //   item => item.dish_id === eachDish.dish_id,
    // )
    // if (productObject !== undefined) {
    //   //We found it! Now let's create a NEW list where ONLY this item is updated
    //   const updatedCartList = cartList.map(eachItem => {
    //     if (eachItem.dish_id === eachDish.dish_id) {
    //       // 1. Calculate new quantity
    //       const newQuantity = eachItem.quantity + 1
    //       // 2. Return the updated item
    //       return {...eachItem, quantity: newQuantity}
    //     }
    //     // 3. Return all other items exactly as they are
    //     return eachItem
    //   })
    //   this.setState({cartList: updatedCartList})
    // } else {
    //   // If it's a brand new item, just add it to the end
    //   this.setState(prevState => ({
    //     cartList: [...prevState.cartList, eachDish],
    //   }))
    // }

    this.setState(
      prevState => ({
        cartList: [...prevState.cartList, eachDish],
      }),
      () => console.log(this.state.cartList),
    )
  }

  removeCartItem = eachDish => {
    const {cartList} = this.state
    const itemFoundIndex = cartList.findIndex(
      eachItem => eachItem.dish_id === eachDish.dish_id,
    )
    //In React, you must never mutate (change) the original state directly. Since splice modifies the array it's called on, using it on this.state.cartList can lead to bugs where your UI doesn't update, or your "Undo" features break.

    if (itemFoundIndex !== -1) {
      const updatedList = [...cartList]
      updatedList.splice(itemFoundIndex, 1)
      this.setState({cartList: updatedList}, console.log(cartList))
    }
  }
  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
        }}
      >
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route exact path="/cart" component={Cart} />
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
