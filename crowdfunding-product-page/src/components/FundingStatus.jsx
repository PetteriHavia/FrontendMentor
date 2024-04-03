import React from 'react'

const FundingStatus = () => {
  return (
    <section className="funding-container">
      <div className="container-md">
        <div className="status">
          <div className="status-item">
            <h3>$89,914</h3>
            <p>0f $100,000 backed</p>
          </div>
          <div className="status-item">
            <h3>5,007</h3>
            <p>total backers</p>
          </div>
          <div className="status-item">
            <h3>$56</h3>
            <p>days left</p>
          </div>
        </div>
        <progress value="80" max="100" />
      </div>
    </section>
  )
}

export default FundingStatus