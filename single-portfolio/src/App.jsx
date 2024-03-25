import Header from './components/Header'
import PatternsGrid from './components/PatternsGrid'
import About from './components/About'
import Work from './components/Work'
import End from './components/End'

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <PatternsGrid />
        <About />
      </div>
      <div className="work-container">
        <Work />
      </div>
      <div className="wrapper">
        <End />
        <Header />
      </div>
    </>
  )
}

export default App
