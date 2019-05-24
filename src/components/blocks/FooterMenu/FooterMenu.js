import React from 'react';

import classes from './FooterMenu.css';
import MenuItems from '../../Menu/MenuItems/MenuItems';

const FooterMenu = (props) => (
    <div className={classes.FooterMenuContainer}>
        <ul className={classes.OuterList}>
            {props.footerItems.map(footerItem => {
                return (
                    <li key={footerItem.id} className={classes.InnerItem}>
                        <h2>{footerItem.text}</h2>
                        <MenuItems items={footerItem.innerItems} isColumn={true} />
                    </li>
                );
            })}
        </ul>
    </div>
);

export default FooterMenu;