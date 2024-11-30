// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import  Cart from './Cart.tsx'
import './App.css'


// interface MyButton {
//   label: string
// }

// function Hello({label}: MyButton) {
//   return (
//     <>
//       <a href="" className="pt-2 py-3 bg-sky-600 text-white">{label}</a>
//     </>
//   )
// }


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="shop">
        <div className="shop__wrapper">
          <div className="shop__items">
            <h2 className="shop__items__title">Desserts</h2>
            <section className="shop__items__list">
            </section>
          </div>
          <div className="shop__cart">
            <Cart />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
