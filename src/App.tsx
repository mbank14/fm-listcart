import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import  Cart from './Cart.tsx'
import './App.css'

interface Images{
  thumbnail: string,
  mobile: string,
  desktop: string,
  tablet: string,
}

interface ListMenu {
  id:string
  image: Images[],
  name: string,
  category: string,
  price: number
}

// interface ListMenu {
//   menu: Menu[]
// }


function App() {
  // const [count, setCount] = useState(0)
  const [listMenu, setListMenu] = useState<ListMenu[]>([])

  useEffect(() => {
    const getData = async () => {
      try{

        const res = await fetch('./data.json');
        const data = await res.json();
        
        setListMenu(data);

      }catch (err){
        console.log(err);
      }

    }

    getData();
  },[])
  console.log("ini listmenu");
  console.log(listMenu);

  return (
    <>
      <div className="shop">
        <div className="shop__wrapper">
          <section className="shop__items">
            <h2 className="shop__items__title">Desserts</h2>
            <ul className="shop__items__list">
              {listMenu.map((item)=> (
                <li key={item.id}>
                  <div>
                    <div className="item__list__image">
                      <img src={item.image.desktop} alt="" />
                    </div>
                    <div className="item__list__button">
                      <button>add to cart</button>
                    </div>
                    <div className="item__list__description">
                      <p className="item__list__description__category">{item.category}</p>
                      <p className="item__list__description__name">{item.name}</p>
                      <p className="item__list__description__price">${item.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <div className="shop__cart">
            <Cart />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
