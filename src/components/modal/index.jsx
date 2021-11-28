import {useEffect} from "react"
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
  HeroDetails
} from "./styles"

export const Modal = ({showModal, setShowModal, superHero}) => {
  useEffect(() => {}, [superHero])
  return (
    <div>
      {showModal ? (
        <Background onClick={() => setShowModal(false)}>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={superHero?.images.sm} alt="Hero image" />
            <ModalContent>
              <HeroDetails>
                <p>
                  <span>NAME: </span>
                  {superHero.name}
                </p>
                <p>
                  <span>GENDER: </span>
                  {superHero.appearance.gender}
                </p>
                <p>
                  <span>RACE: </span>
                  {superHero.appearance.race}
                </p>
                <p>
                  <span>HEIGHT: </span>
                  {superHero.appearance.height[1]}
                </p>
                <p>
                  <span>WEIGHT: </span>
                  {superHero.appearance.weight[1]}
                </p>
              </HeroDetails>
            </ModalContent>
            <CloseModalButton
              aria-label="Close Modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  )
}
