import * as React from "react"
import Swiper from "react-id-swiper"
import { CarousalContext } from "../../App"

const CenteredSlidesAutoSlidesPerView = () => {
  const { dataResponse, setCarousalIndex } = React.useContext(CarousalContext)
  const swiperRef = React.useRef(null)

  const onSlideChange = (isInit) => {
    setTimeout(() => {
      const sliderIndex =
        document.querySelector(".swiper-slide.swiper-slide-active") &&
        document
          .querySelector(".swiper-slide.swiper-slide-active")
          .getAttribute("itemIndex")
      setCarousalIndex(parseInt(sliderIndex))
    }, 0)
  }

  const params = {
    slidesPerView: 3,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    lazy: true,
    slidesPerGroup: 1,
    spaceBetween: 40,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    on: {
      init: onSlideChange(true),
      slideChange: onSlideChange,
    },
    getSwiper: (data) => {
      console.log(data)
    },
  }

  const renderCarousalCard = (item, index) => {
    const { albumImage = "", albumTitle = "" } = item
    return (
      <div
        key={`carousal-card-${index}`}
        className="carousal-card"
        itemIndex={index}
      >
        <img src={albumImage} className="carousal-img-card" alt={albumTitle} />
        <div className="card-text">{albumTitle}</div>
      </div>
    )
  }
  return (
    <Swiper forwardRef={swiperRef} {...params}>
      {dataResponse.map(renderCarousalCard)}
    </Swiper>
  )
}

function CarousalComponent() {
  const { dataResponse } = React.useContext(CarousalContext)
  return dataResponse && dataResponse.length > 0 ? (
    <div className="carousal-wrapper">
      <CenteredSlidesAutoSlidesPerView />
    </div>
  ) : (
    <span></span>
  )
}

export default CarousalComponent
export { CarousalComponent }
