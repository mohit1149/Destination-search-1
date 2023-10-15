// Write your code here
// Write your code here
import './index.css'

const DestinationItem = props => {
  const {imageDetails} = props
  const {name, imgUrl} = imageDetails

  return (
    <li className="image-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="paragraph">{name}</p>
    </li>
  )
}
export default DestinationItem
