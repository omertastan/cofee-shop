import React from 'react';

const MenuItem = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
        </div>
    );
};

export default MenuItem;
