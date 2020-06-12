import * as React from "react"
import { CarousalContext } from "../../App"

function ImagesSection() {
  const { dataResponse = [], carousalIndex } = React.useContext(CarousalContext)

  console.log({ dataResponse })
  console.log({ carousalIndex })
  console.log(dataResponse[carousalIndex] && dataResponse[carousalIndex].item)

  const imageCollection =
    (dataResponse[carousalIndex] && dataResponse[carousalIndex].item) || []

  const renderImages = ({ url = "", title = "" }, index) => (
    <div className="image-wrapper">
      <img key={`image-${index}`} src={url} alt={title} />
    </div>
  )

  return (
    <div className="image-collection-wrapper">
      {imageCollection && imageCollection.map(renderImages)}
    </div>
  )
}

export default ImagesSection
export { ImagesSection }
