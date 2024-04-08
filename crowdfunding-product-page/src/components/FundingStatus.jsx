import { useContext } from 'react'
import { AppContext } from '../context/app-context'

const FundingStatus = () => {

  const { totalBackers, totalMoney } = useContext(AppContext)


  const formatNumber = (number) => {
    return number.toLocaleString('en-US')
  }

  return (
    <section className="funding-container">
      <div className="container-md">
        <div className="status">
          <div className="status-item">
            <h3>${formatNumber(totalMoney)}</h3>
            <p>0f $100,000 backed</p>
          </div>
          <div className="status-item">
            <h3>{formatNumber(totalBackers)}</h3>
            <p>total backers</p>
          </div>
          <div className="status-item">
            <h3>56</h3>
            <p>days left</p>
          </div>
        </div>
        <progress value={totalMoney} max="100000" />
      </div>
    </section>
  )
}

export default FundingStatus