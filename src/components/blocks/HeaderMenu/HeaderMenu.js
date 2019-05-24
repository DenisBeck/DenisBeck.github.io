import React from 'react';

import classes from './HeaderMenu.css';
import MenuItems from '../../Menu/MenuItems/MenuItems';

const HeaderMenu = (props) => (
    <div className={classes.HeaderMenu}>
        <MenuItems isTopMenu={true} items={props.items} />
    </div>
);

export default HeaderMenu;