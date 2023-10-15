// Write your code here

// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const search1 = searchInput.toLowerCase()
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.includes(search1),
    )
    return (
      <div>
        <h1 className="heading">Destination Search</h1>
        <div className="search-bar">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            className="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image-search"
          />
        </div>
        <div className="background">
          <ul className="background-image">
            {searchResults.map(eachItem => (
              <DestinationItem imageDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
