import { useContext } from 'react'
import CheckIcon from '../assets/images/icon-check.svg'
import { AppContext } from '../context/app-context'

const ThankYouModal = () => {

  const { modal, setModal } = useContext(AppContext)

  const handleModal = () => {
    setModal({ ...modal, modalB: !modal.modalB })
  }

  return (
    <div className="modal">
      <div className="overlay-bg"></div>
      <div className="container-sm">
        <img src={CheckIcon} alt="confirmation icon" />
        <h3>Thanks for your support!</h3>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <button onClick={handleModal}>Got it!</button>
      </div>
    </div>
  )
}

export default ThankYouModal