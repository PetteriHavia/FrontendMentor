import Hero from "./components/Hero"
import Form from "./components/Form"
import AppContextProvider from "./context/app-context"

function App() {
  return (
    <AppContextProvider>
      <div className="layout">
        <Hero />
        <Form />
      </div>
    </AppContextProvider>
  )
}

export default App
