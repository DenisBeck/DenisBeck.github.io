import React from 'react';

import classes from './HeaderTop.css';
import logo from '../../../assets/images/Aditii.png';
import basket from '../../../assets/images/Shape_2.png';
import Price from '../../Price/Price';

const Logo = () => (
    <div>
        <img src={logo} alt="logo" />
    </div>
);

const SearchInput = () => (
    <div className={classes.SearchInput}>
        <input type="search" />
    </div>
);

const Basket = () => (
    <div className={classes.Basket}>
        <img src={basket} alt="basket" />
    </div>
);

const HeaderTop = (props) => (
    <div className={classes.HeaderTop}>
        <Logo />
        <SearchInput />
        <div className={classes.BasketData}> 
            <Basket />
            <Price value="300" />
        </div>
    </div>
);

export default HeaderTop;