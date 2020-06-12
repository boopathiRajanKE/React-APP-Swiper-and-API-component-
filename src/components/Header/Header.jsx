import * as React from "react"
import Headroom from "react-headroom"

function Header() {
  return (
    <Headroom>
      <header>
        <div className="header-wrapper">
          <div className="profile-wrapper">
            <img
              className="picture-element"
              src="https://via.placeholder.com/150/92c952"
              alt="profile"
            />
          </div>
          <div className="content-wrapper">
            <div className="name-element">Melanie Tan</div>
            <div className="profession-element">
              professional Food Photographer
            </div>
            <div className="extras-block">
              <div className="city-element">Bagkok</div>
              <div className="mail-element">melanietan99@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="pancake-switch-element"></div>
      </header>
    </Headroom>
  )
}

export default Header
export { Header }
