import { useContext } from 'react'
import bookmarkIcon from '../assets/images/icon-bookmark.svg'
import { AppContext } from '../context/app-context'
import masterCraftLogo from '../assets/images/logo-mastercraft.svg'
import FundingStatus from './FundingStatus'
import Products from './Products'
import ChooseVersioModal from './ChooseVersioModal'

const Form = () => {

  const { bookmark, setBookmark, popUp, setPopUp, modal, setModal } = useContext(AppContext)

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
            <button className="primary-button" onClick={() => setModal(!modal)}>Back this project</button>
            <div className="bookmark" onClick={() => setBookmark(!bookmark)}>
              <img src={bookmarkIcon} alt="bookmark icon" />
              <h3>{bookmark ? "Bookmarked" : "Bookmark"}</h3>
            </div>
          </div>
        </div>
        <FundingStatus />
        <Products />
      </section>
      {modal ? <ChooseVersioModal /> : null}
    </>
  )
}

export default Form