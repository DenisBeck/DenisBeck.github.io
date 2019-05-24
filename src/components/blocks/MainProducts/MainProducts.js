import React from 'react';

import classes from './MainProducts.css';
import Card from '../../Card/Card';

const MainHeader = () => (
    <div className={classes.Header}>
        <h2 className={classes.HeaderText}>FEATURED PRODUCTS</h2>
    </div>
)

const MainProducts = (props) => (
    <div>
        <MainHeader /> 
        <div className={classes.MainProducts}>
            { props.products.map(card => (
                <Card 
                    layout="products"
                    buttonText="BUY NOW" 
                    cardText={card.text}
                    image={card.image} 
                    price={card.price}
                />
            ))
        }
    </div>
        
   
    </div>
);

export default MainProducts;