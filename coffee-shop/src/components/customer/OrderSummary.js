import React from 'react';

const OrderSummary = ({ cartItems, total, handleSubmit }) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
            <button type="submit" onClick={handleSubmit}>
                Place Order
            </button>
        </div>
    );
};

export default OrderSummary;
