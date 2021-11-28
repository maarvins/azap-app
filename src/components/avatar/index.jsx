import {useState} from "react"

import {AvatarStyle} from "./styles"
import {ImageStyle} from "./styles"

import {Modal} from "../modal"

export function Avatar({name, image, superHero}) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <AvatarStyle>
      <div className="card-content">
        <ImageStyle>
          <img
            src={image}
            alt="icone heroi"
            style={{borderRadius: "15px"}}
            onClick={openModal}
          />
          <h2>{name}</h2>
        </ImageStyle>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        superHero={superHero}
      />
    </AvatarStyle>
  )
}
