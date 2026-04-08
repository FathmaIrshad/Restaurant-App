import './index.css'
const TabItem = props => {
  const {item, clickTabItem, checkactiveTab} = props
  const onClickTab = () => {
    clickTabItem(item.categoryId)
  }
  const tabStyle = checkactiveTab ? 'tab-button active' : 'tab-button'
  return (
    <div>
      <li className="TabLi">
        <button type="button" onClick={onClickTab} className={tabStyle}>
          {item.category}
        </button>
      </li>
    </div>
  )
}

export default TabItem
