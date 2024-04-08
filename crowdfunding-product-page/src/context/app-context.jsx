import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext(null)

const AppContextProvider = ({ children }) => {
  const initialProducts = [
    {
      name: "Bamboo Stand",
      description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      amount: 25,
      productsLeft: 100,
    },
    {
      name: "Black Edition Stand",
      description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      amount: 75,
      productsLeft: 64,
    },
    {
      name: "Mahogany Special Edition",
      description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      amount: 200,
      productsLeft: 0,
    },
  ]
  const [bookmark, setBookmark] = useState(false)
  const [modal, setModal] = useState({ modalA: false, modalB: false })
  const [products, setProducts] = useState(initialProducts)
  const [check, setCheck] = useState(false)
  const [pledgeAmount, setPledgeAmount] = useState(0)
  const [totalMoney, setTotalMoney] = useState(89914)
  const [totalBackers, setTotalBackers] = useState(5007)


  return (
    <AppContext.Provider
      value={{
        bookmark,
        setBookmark,
        modal,
        setModal,
        products,
        setProducts,
        check,
        setCheck,
        pledgeAmount,
        setPledgeAmount,
        totalMoney,
        setTotalMoney,
        totalBackers,
        setTotalBackers
      }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider