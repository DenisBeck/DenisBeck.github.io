import React from 'react';

import classes from './MenuItem.css';

const MenuItem = (props) => (
    <li className={[classes.MenuItem, props.isTopMenu ? classes.TopMenu : ''].join(' ')}>
        <a className={classes.MenuItemLink} href={props.link}>{props.text}</a>
    </li>
);

export default MenuItem;