import React, { Component } from 'react';
import './App.css';

import HeaderTop from './components/blocks/HeaderTop/HeaderTop';
import HeaderMenu from './components/blocks/HeaderMenu/HeaderMenu';
import HeaderMain from './components/blocks/HeaderMain/HeaderMain';

import banner from './assets/images/Layer_1.png';
import image from './assets/images/beautiful-place.jpg';
import MainCategories from './components/blocks/MainCategories/MainCategories';
import MainProducts from './components/blocks/MainProducts/MainProducts';
import FooterMenu from './components/blocks/FooterMenu/FooterMenu';
import Footer from './components/blocks/Footer/Footer';

export default class App extends Component {
  state = {
    items: [
      { id: 1, text: 'HOME', link: '#' },
      { id: 2, text: 'SALE', link: '#' },
      { id: 3, text: 'HANDBAGS', link: '#' },
      { id: 4, text: 'WALLETS', link: '#' },
      { id: 5, text: 'ACCESSORIES', link: '#' },
      { id: 6, text: 'MENS STORE', link: '#' },
      { id: 7, text: 'SHOES', link: '#' },
      { id: 8, text: 'VINTAGE', link: '#' },
      { id: 9, text: 'SERVICES', link: '#' },
      { id: 10, text: 'CONTACT US', link: '#' }
    ],
    footerItems: [
      {
        id: 1, text: 'FEATURED SALE', innerItems: [
          { id: 101, text: 'Alexis Hudson', link: '#' },
          { id: 102, text: 'American Apparel', link: '#' },
          { id: 103, text: 'Ben Sherman', link: '#' },
          { id: 104, text: 'Big Buddha', link: '#' },
          { id: 105, text: 'Chanel', link: '#' },
          { id: 106, text: 'Christian Audigier', link: '#' },
          { id: 107, text: 'Coach', link: '#' },
          { id: 108, text: 'Cole Haan', link: '#' }
        ]
      },
      {
        id: 2, text: 'MENS STORE', innerItems: [
          { id: 101, text: 'Alexis Hudson', link: '#' },
          { id: 102, text: 'American Apparel', link: '#' },
          { id: 103, text: 'Ben Sherman', link: '#' },
          { id: 104, text: 'Big Buddha', link: '#' },
          { id: 105, text: 'Chanel', link: '#' },
          { id: 106, text: 'Christian Audigier', link: '#' },
          { id: 107, text: 'Coach', link: '#' },
          { id: 108, text: 'Cole Haan', link: '#' }
        ]
      },
      {
        id: 3, text: 'WOMENS STORE', innerItems: [
          { id: 301, text: 'Alexis Hudson', link: '#' },
          { id: 302, text: 'American Apparel', link: '#' },
          { id: 303, text: 'Ben Sherman', link: '#' },
          { id: 304, text: 'Big Buddha', link: '#' },
          { id: 305, text: 'Chanel', link: '#' },
          { id: 306, text: 'Christian Audigier', link: '#' },
          { id: 307, text: 'Coach', link: '#' },
          { id: 308, text: 'Cole Haan', link: '#' }
        ]
      },
      {
        id: 4, text: 'QUICK LINKS', innerItems: [
          { id: 401, text: 'Alexis Hudson', link: '#' },
          { id: 402, text: 'American Apparel', link: '#' },
          { id: 403, text: 'Ben Sherman', link: '#' },
          { id: 404, text: 'Big Buddha', link: '#' },
          { id: 405, text: 'Chanel', link: '#' },
          { id: 406, text: 'Christian Audigier', link: '#' },
          { id: 407, text: 'Coach', link: '#' },
          { id: 408, text: 'Cole Haan', link: '#' }
        ]
      }
    ],
    sliderItems: [
      { 
        id: 1, 
        title: 'Cowhide Standard Crew1', 
        text: 'White coloured, short-sleeved, printed T-shirt for men by Levi\'s. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. ',
        imgSrc: banner,
        isActive: true
      },
      { 
        id: 2, 
        title: 'Cowhide Standard Crew2', 
        text: 'White coloured, short-sleeved, printed T-shirt for men by Levi\'s. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. ',
        imgSrc: banner,
        isActive: false
      },
      { 
        id: 3, 
        title: 'Cowhide Standard Crew3', 
        text: 'White coloured, short-sleeved, printed T-shirt for men by Levi\'s. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. ',
        imgSrc: banner,
        isActive: false
      },
      { 
        id: 4, 
        title: 'Cowhide Standard Crew4', 
        text: 'White coloured, short-sleeved, printed T-shirt for men by Levi\'s. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. ',
        imgSrc: banner,
        isActive: false
      },
      { 
        id: 5, 
        title: 'Cowhide Standard Crew5', 
        text: 'White coloured, short-sleeved, printed T-shirt for men by Levi\'s. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. ',
        imgSrc: banner,
        isActive: false
      }
    ],
    categories: [
      { image, text: 'BRANDED SHOES' },
      { image, text: 'BRANDED TSHIRTS' },
      { image, text: 'BRANDED CARGOS' }
    ],
    products: [
      { image, text: 'BRANDED SHOES', price: 300 },
      { image, text: 'BRANDED TSHIRTS', price: 300 },
      { image, text: 'BRANDED CARGOS', price: 300 },
      { image, text: 'BRANDED SHOES', price: 300 },
      { image, text: 'BRANDED TSHIRTS', price: 300 },
      { image, text: 'BRANDED CARGOS', price: 300 }
    ]
  }

  handleButtonClick = () => {
    console.log('buttonClick');
  }

  handleSliderItemClick = (id) => {
    const updatedItems = this.state.sliderItems.map(item =>{
      if(id === item.id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    })
    this.setState({
      sliderItems: updatedItems
    });
  }

  render() {
    return (
      <div>
        <HeaderTop />
        <HeaderMenu items={this.state.items} />
        <HeaderMain handleSliderItemClick={this.handleSliderItemClick} sliderItems={this.state.sliderItems} />
        <MainCategories categories={this.state.categories} />
        <MainProducts products={this.state.products} />
        <FooterMenu footerItems={this.state.footerItems}/>
        <Footer />
      </div>
    );
  }
}
