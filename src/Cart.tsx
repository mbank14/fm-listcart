import {useMemo, useState} from 'react'
interface CartItem{
    id:string,
    quantity: number,
    price: number,
    // image: string,
    name: string
}

// interface CartProps{
//     items: CartItem[],
//     onAddItem: (item: CartItem) => void,
//     onRemoveItem: (id: string) => void
// }

export default function Cart (
    // {items, onAddItem, onRemoveItem} : CartProps
){

    const [items, setItems] = useState<CartItem[]>([
        {
            id: "1",
            name: "sdfsdf",
            quantity:2, 
            price:2
        },
        {
            id: "3",
            name: "sdfsdf",
            quantity:4,
            price:3
        },
        {
            id: "142",
            name: "sdfsdf",
            quantity:3,
            price:9
        }
    ]);
   

    const amountPrice = useMemo(() => items.map((item) => item.price * item.quantity).reduce((acc,current) => acc + current, 0),[items])
    const handleRemoveCartItem = (id:string) =>{
        setItems(prevItem => prevItem.filter((item) => item.id !== id));
    }
    return(
        <>
            <section className="shop__cart__wrapper">
                <h4 className="shop__cart__title">Your cart ({items.length})</h4>
                { !items.length ? (
                        <div className="empty-cart">
                            <img src={"/images/illustration-empty-cart.svg"} alt="empty cart image" />
                            <p className="empty-cart__text">Your added item will appear here</p>
                        </div>
                    ):(
                        <div className="shop__cart__items">
                            <div>
                                <ul className="cart__items__list">
                                    {items.map((item)=>(
                                        <li key={item.id} >
                                            <div className="cart__item__wrapper">
                                                <div className="cart__item__description">
                                                    <strong>{item.name}</strong>
                                                    <p>
                                                        <span className="item__quantity">{item.quantity}x</span>   <span className="item__price" >@${item.price}</span>      ${item.quantity*item.price}
                                                    </p>
                                                </div>
                                                <div className="cart__item__button">
                                                    <button onClick={()=> handleRemoveCartItem(item.id)}>⚔️</button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="shop__cart__items__total">
                                <p className="items__total__text">Total Order</p>
                                <p className="items__total__price">${amountPrice}</p>
                            </div>

                            <div className="shop__cart__items__content">
                                <p className="shop__cart__items__content__text">
                                    This is a <strong>carbon-neutral</strong> delivery
                                </p>
                            </div>

                            <button className="shop__cart__button-confirm">Confirm Order</button>
                        </div>
                    )
                }
            </section>
        </>
    )
}