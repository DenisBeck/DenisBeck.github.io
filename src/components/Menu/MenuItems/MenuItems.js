import React from 'react';

import classes from './MenuItems.css';
import MenuItem from '../MenuItem/MenuItem';

const MenuItems = (props) => (
    
    <ul className={[classes.MenuItems, props.isColumn ? classes.ColumnItems : ''].join(' ')}>
        {props.items.map(item => {
            return(
                <MenuItem
                    isTopMenu={props.isTopMenu}
                    key={item.id}
                    text={item.text}
                    link={item.link}
                />
            )
        })}
    </ul>
);

export default MenuItems;