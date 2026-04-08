import Header from '../Header'
import './index.css'
import {Component} from 'react'
import DishItem from '../DishItem'
import TabItem from '../TabItem'

class Menu extends Component {
  state = {menuList: [], activeTabId: '', heading: ''}

  componentDidMount() {
    this.getDishes()
  }
  getDishes = async () => {
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const heading = data[0].restaurant_name
      const updatedData = data[0].table_menu_list.map(eachItem => ({
        category: eachItem.menu_category,
        categoryId: eachItem.menu_category_id,
        dishes: eachItem.category_dishes,
      }))
      this.setState({
        heading: heading,
        menuList: updatedData,
        activeTabId: updatedData[0].categoryId,
      })
    }
  }
  clickTabItem = categoryId => {
    const {activeTabId} = this.state
    this.setState({activeTabId: categoryId})
  }
  render() {
    const {menuList, activeTabId, heading} = this.state
    const MenuItem = menuList.find(
      eachItem => eachItem.categoryId === activeTabId,
    )
    return (
      <div className="RestaurantPageContainer">
        <Header heading={heading} />
        <ul className="tabListContainer">
          {menuList.map(item => (
            <TabItem
              item={item}
              key={item.categoryId}
              clickTabItem={this.clickTabItem}
              checkactiveTab={activeTabId === item.categoryId}
            />
          ))}
        </ul>
        {MenuItem ? (
          <ul className="DishContainer">
            {MenuItem.dishes.map(eachDish => (
              <DishItem eachDish={eachDish} key={eachDish.dish_id} />
            ))}
          </ul>
        ) : (
          <p className="loading-para">Loading...</p>
        )}
      </div>
    )
  }
}
export default Menu
