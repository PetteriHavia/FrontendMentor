import { useContext } from 'react'
import bookmarkIcon from '../assets/images/icon-bookmark.svg'
import { AppContext } from '../context/app-context'
import masterCraftLogo from '../assets/images/logo-mastercraft.svg'
import FundingStatus from './FundingStatus'
import Products from './Products'
import Modal from './Modal'
import ThankYouModal from './ThankYouModal'

const Form = () => {

  const { bookmark, setBookmark, modal, setModal } = useContext(AppContext)

  return (
    <>
      <section className="form-container">
        <div className="form-select container-md">
          <img src={masterCraftLogo} alt="mastercraft logo" />
          <div className="form-header">
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          </div>
          <div className="form-action-bar">
            <button className="primary-button" onClick={() => setModal({ ...modal, modalA: !modal.modalA })}>Back this project</button>
            <div className={`bookmark ${bookmark ? "active" : ""}`} onClick={() => setBookmark(!bookmark)}>
              <img src={bookmarkIcon} alt="bookmark icon" />
              <h3>{bookmark ? "Bookmarked" : "Bookmark"}</h3>
            </div>
          </div>
        </div>
        <FundingStatus />
        <Products />
      </section>
      {modal.modalA ? <Modal /> : null}
      {modal.modalB ? <ThankYouModal /> : null}
    </>
  )
}

export default Form