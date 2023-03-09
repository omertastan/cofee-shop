import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
    return (
        <div>
            <h2>Menu</h2>
            {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Menu;
