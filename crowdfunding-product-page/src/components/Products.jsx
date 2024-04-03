import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/app-context'

const Products = () => {
  const { products } = useContext(AppContext)

  return (
    <section className="product-section">
      <div className="container-md">
        <h3>About this project</h3>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
        <div className="grid">
          {products.map((product) => (
            <div key={product.name} className={product.productsLeft === 0 ? "out-of-stock product" : "product"}>
              <div className="flex-header">
                <h3>{product.name}</h3>
                <p>Pledge ${product.amount} or more</p>
              </div>
              <p>{product.description}</p>
              <div className="products-left">
                <h3>{product.productsLeft}<span> left</span></h3>
                <button>Select Reward</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products