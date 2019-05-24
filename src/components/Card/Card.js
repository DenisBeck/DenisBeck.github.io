import React from 'react';

import Button from '../Button/Button';
import Price from '../Price/Price';

import classes from './Card.css';

const Card = (props) => (
    <div className={[
            classes.CardContainer, 
            props.layout === 'categories' ? classes.CardCategories : '',
            props.layout === 'products' ? classes.CardProducts : ''].join(' ')}>
        <div className={classes.CardImageContainer}>
            <img className={classes.CardImage} src={props.image} alt={props.cardText} />
        </div>
        <div className={[classes.CardDescription, props.layout === 'products' ? classes.CardDescriptionProducts : ''].join(' ')}>
            <div className={classes.CardTitle}>
                {props.cardText}
            </div>
            {props.price !== undefined ? 
                <Price value={props.price} /> : null}
            <Button title={props.buttonText} onButtonClick={props.buttonClick} />
        </div>
        
    </div>
);

export default Card;