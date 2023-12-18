import { useState, useEffect } from 'react';
import './Shop.css';
import Button from './Button';

import card1Photo from './photos/coffee4.jpg';
import card2Photo from './photos/coffee8.jpg';
import card3Photo from './photos/coffee6.jpg';
import card4Photo from './photos/coffee7.jpg';
import card5Photo from './photos/coffee5.jpg';
import card6Photo from './photos/coffee9.jpg';

function Shop({ setPage, addShopItem, cart }) {
    const [totalQuantity, setTotalQuantity] = useState(0);
    
    useEffect(() => {
        const quantitySum = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
        setTotalQuantity(quantitySum);
      }, [cart]);
    
        return (
            <>
                <div className="cards">
                    <div className="card card1">
                        <img
                            className="card-pic"
                            alt="A cup of coffee with a croissant is perfectly match."
                            src={card1Photo}
                        />
                        <h2 className="card-title">Coffee w/ Croissant</h2>
                        <p className="card-price">$8.99</p>
                        <li className="card-link" aria-label="leads to the place order page of product one">
                            <a href="cart.html"
                                onClick={(e) => {
                                    e.preventDefault();
                                    addShopItem({ itemname: 'Coffee w/ Croissant', price: 8.99, imgurl: card1Photo });
                                }}
                            >Add to Cart</a>
                        </li>
                    </div>
                    <div className="card card2">
                        <img
                            className="card-pic"
                            alt="Donut can makes the coffee taste better."
                            src={card2Photo}
                        />
                        <h2 className="card-title">Coffee w/ Doughnut</h2>
                        <p className="card-price">$8.49</p>
                        <li className="card-link" aria-label="leads to the place order page of product two">
                            <a href="placeOrder.html"
                                onClick={(e) => {
                                    e.preventDefault();
                                    addShopItem({ itemname: 'Coffee w/ Doughnut', price: 8.49, imgurl: card2Photo })
                                }}
                            >Add to Cart</a>
                        </li>
                    </div>
                    <div className="card card3">
                        <img
                            className="card-pic"
                            alt="Macaron is sweet, needs a little bitter. "
                            src={card3Photo}
                        />
                        <h2 className="card-title">Coffee w/ Macaron</h2>
                        <p className="card-price">$8.49</p>
                        <li className="card-link" aria-label="leads to the place order page of product three">
                            <a href="placeOrder.html"
                                onClick={(e) => {
                                    e.preventDefault();
                                    addShopItem({ itemname: 'Coffee w/ Macaron', price: 8.49, imgurl: card3Photo })
                                }}
                            >Add to Cart</a>
                        </li>
                    </div>
                    <div className="card card4">
                        <img
                            className="card-pic"
                            alt="Our beans are all carefullyprocessed."
                            src={card4Photo}
                        />
                        <h2 className="card-title">Coffee Bean</h2>
                        <p className="card-price">$18.99</p>
                        <li className="card-link" aria-label="leads to the place order page of product four">
                            <a href="placeOrder.html"
                                onClick={(e) => {
                                    e.preventDefault();
                                    addShopItem({ itemname: 'Coffee Bean', price: 18.99, imgurl: card4Photo })
                                }}
                            >Add to Cart</a>
                        </li>
                    </div>
                    <div className="card card5">
                        <img
                            className="card-pic"
                            alt="Our coffee all comes with elaborately selected cups, tastes great."
                            src={card5Photo}
                        />
                        <h2 className="card-title">Coffee</h2>
                        <p className="card-price">$4.99</p>
                        <li className="card-link" aria-label="leads to the place order page of product five">
                            <a href="placeOrder.html"
                                onClick={(e) => {
                                    e.preventDefault();
                                    addShopItem({ itemname: 'Coffee', price: 4.99, imgurl: card5Photo })
                                }}
                            >Add to Cart</a>
                        </li>
                    </div>
                    <div className="card card6">
                        <img
                            className="card-pic"
                            alt="Good taste requires quality tools."
                            src={card6Photo}
                        />
                        <h2 className="card-title">Coffee Tools</h2>
                        <p className="card-price">$38.99</p>
                        <li className="card-link" aria-label="leads to the place order page of product six">
                            <a href="placeOrder.html"
                                onClick={(e) => {
                                    e.preventDefault();
                                    addShopItem({ itemname: 'Coffee Tools', price: 38.99, imgurl: card6Photo })
                                }}
                            >Add to Cart</a>
                        </li>
                    </div>
                </div>
                <Button
                    className='view-cart-button'
                    onClick={() => setPage('PlaceOrder')}
                    aria-label='Click this button can lead you to the cart.'
                >
                    View Cart {totalQuantity > 0 && `(${totalQuantity})`}
                </Button>
            </>

        );
    }

    export default Shop;