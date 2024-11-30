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

    const amountItems: Array<{id:string,name:string}> = [
        {
            id: "1",
            name: "sdfsdf"
        },
        {
            id: "1",
            name: "sdfsdf"
        },
        {
            id: "1",
            name: "sdfsdf"
        }
    ]

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
                            <div></div>
                            <div className="shop__cart__items__total">
                                <p className="items__total__text">Total Order</p>
                                <p className="items__total__price">$60</p>
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