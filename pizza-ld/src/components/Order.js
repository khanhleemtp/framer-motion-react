import React from 'react'

function Order({ pizza }) {
    return (
        <div className="container order">
            <h2>Thank you for your order :D </h2>
            <p>You ordered a {pizza.base} pizza with: </p>
            {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
        </div>
    )
}

export default Order
