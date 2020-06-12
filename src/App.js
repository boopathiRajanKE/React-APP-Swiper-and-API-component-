import React from "react"
import axios from "axios"
import { transformModal } from "./transform/carousalData"
import { Header } from "./components/Header"
import { ImagesSection } from "./components/ImagesSection"
import { CarousalComponent } from "./components/CarousalComponent"
import "./App.css"

const CarousalContext = React.createContext({})

function App() {
  const [dataResponse, setDataResponse] = React.useState({})
  const [carousalIndex, setCarousalIndex] = React.useState("")

  React.useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/photos"
        )
        console.log({ mounted })
        if (mounted) setDataResponse(transformModal(data))
      } catch (e) {
        setDataResponse({ error: "No Data Returned" })
      }
    })()

    /**
     * @note
     * This return helps to stop response data being populate in component,
     * when the components gets unmounted */

    return () => {
      mounted = false
    }
  }, [])
  console.log({ dataResponse })

  return (
    <CarousalContext.Provider
      value={{ dataResponse, carousalIndex, setCarousalIndex }}
    >
      <div className="App">
        <Header />
        <CarousalComponent />
        <ImagesSection />
      </div>
    </CarousalContext.Provider>
  )
}

export default App
export { App, CarousalContext }
