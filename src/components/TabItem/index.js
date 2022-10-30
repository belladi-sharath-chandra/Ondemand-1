import './index.css'

const TabItem = props => {
  const {tabDetails, updateId, isActive} = props
  const {displayText, tabId} = tabDetails

  const changeTabList = () => {
    updateId(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={changeTabList}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
