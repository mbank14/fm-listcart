import {useMemo} from 'react'
// interface CartItem{
//     id:string,
//     quantity: number,
//     price: number,
//     image: string,
//     name: string
// }

// interface CartProps{
//     items: CartItem[],
//     onAddItem: (item: CartItem) => void,
//     onRemoveItem: (id: string) => void
// }

export default function Cart (
    // {items, onAddItem, onRemoveItem} : CartProps
){

    const amountItems: Array<{id:string,name:string,quantity:number, price:number}> = [
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
    ]

    const amountPrice = useMemo(() => amountItems.map((item) => item.price * item.quantity).reduce((acc,current) => acc + current, 0))

    return(
        <>
            <section>
                <h4 className="shop__cart__title">Your cart ({amountItems.length})</h4>
                { !amountItems ? (
                        <div className="empty-cart">
                            <img src={"/images/illustration-empty-cart.svg"} alt="empty cart image" />
                            <p className="empty-cart__text">Your added item will appear here</p>
                        </div>
                    ):(
                        <div className="shop__cart__items">
                            <div>
                                <ul>
                                    {amountItems.map((item)=>(
                                        <li key={item.id} >
                                            <div>
                                                <div>
                                                    <strong>{item.name}</strong>
                                                    <p>
                                                        <span className="item__quantity">{item.quantity}x</span>   <span className="item__price">@{item.price}</span>      ${item.quantity*item.price}
                                                    </p>
                                                </div>
                                                <div>
                                                    <button onClick={()=>0}>⚔️</button>
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
                        </div>
                    )
                }
            </section>
        </>
    )
}