import React, { useContext, useState } from 'react'
import closeIcon from '../assets/images/icon-close-modal.svg'
import { AppContext } from '../context/app-context'

const ChooseVersioModal = () => {
  const { products, modal, setModal, pledgeAmount, setPledgeAmount } = useContext(AppContext)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  const handleCheckInput = (e) => {
    const numbersRegex = /^[0-9]*$/;
    if (e.target.value === '' || numbersRegex.test(e.target.value)) {
      setPledgeAmount(Number(e.target.value))
    }
  }

  return (
    <div className="modal">
      <div className="overlay-bg"></div>
      <div className="container-md">
        <div className="modal-header">
          <h3>Back this project</h3>
          <img src={closeIcon} alt="close modal" onClick={() => setModal(!modal)} />
        </div>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <div className="grid">
          <div className="grid">
            <div className={selectedOption === "no_reward" ? "selected-product product"
              : selectedOption === "no_reward" ? "product selected-product"
                : "product"}>
              <input
                type="radio"
                name="product_option"
                value="no_reward"
                checked={selectedOption === "no_reward"}
                onChange={() => handleOptionChange("no_reward")}
              />
              <div className="grid">
                <div className="flex-header">
                  <h3>Pledge with no reward</h3>
                </div>
                <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
              </div>
            </div>
          </div>
          {products.map((product) => (
            <div key={product.name} className={product.productsLeft === 0 ? "out-of-stock product"
              : selectedOption === product.name ? "product selected-product"
                : "product"}>
              <input
                type="radio"
                name="product_option"
                value={product.name}
                checked={selectedOption === product.name}
                onChange={() => handleOptionChange(product.name)}
              />
              <div className="grid">
                <div className="flex-header">
                  <div className="flex-header">
                    <h3>{product.name}</h3>
                    <strong>Pledge ${product.amount} or more</strong>
                  </div>
                  <h3 className="products-left">{product.productsLeft}<span> left</span></h3>
                </div>
                <p>{product.description}</p>
                {selectedOption === product.name ?
                  <div className="pledge">
                    <p>Enter your pledge</p>
                    <div className="flex-header">
                      <div className="inputBox">
                        <h3>$</h3>
                        <input type="text" placeholder={product.amount} onChange={handleCheckInput} value={pledgeAmount} />
                      </div>
                      <button>Continue</button>
                    </div>
                  </div>
                  : null
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseVersioModal