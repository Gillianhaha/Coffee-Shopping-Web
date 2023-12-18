import { useState } from 'react';

import Button from './Button';
import './PlaceOrder.css';
import card1Photo from './photos/coffee4.jpg';
import card2Photo from './photos/coffee8.jpg';
import card3Photo from './photos/coffee6.jpg';
import card4Photo from './photos/coffee7.jpg';
import card5Photo from './photos/coffee5.jpg';
import card6Photo from './photos/coffee9.jpg';

function PlaceOrder({ cart, clearCart, updateItem }) {
    
    const cartItems = Object.values(cart);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [cartError, setCartError] = useState('');
    const [billingName, setBillingName] = useState('');
    const [billingPhone, setBillingPhone] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [billingNameError, setBillingNameError] = useState('');
    const [billingPhoneError, setBillingPhoneError] = useState('');
    const [billingAddressError, setBillingAddressError] = useState('');
    const [useSameBillingAddress, setUseSameBillingAddress] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const resetForm = () => {
        clearCart();
        setName('');
        setEmail('');
        setConfirmEmail('');
        setPhone('');
        setAddress('')
        setNameError('');
        setEmailError('');
        setConfirmEmailError('');
        setPhoneError('');
        setAddressError('');
        setBillingName('');
        setBillingPhone('');
        setBillingAddress('');
        setBillingNameError('');
        setBillingPhoneError('');
        setUseSameBillingAddress(false);
        setCartError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name) {
            setNameError('This field is required');
        } else {
            setNameError('');
        }

        if (!email) {
            setEmailError('This field is required');
        } else if (!email.includes('@')) {
            setEmailError('Email must include @');
        } else {
            setEmailError('');
        }

        if (!confirmEmail) {
            setConfirmEmailError('This field is required');
        } else if (email !== confirmEmail) {
            setConfirmEmailError('Email addresses do not match');
        } else {
            setConfirmEmailError('');
        }

        if (!phone) {
            setPhoneError('This field is required');
        } else {
            setPhoneError('');
        }

        if (!address) {
            setAddressError('This field is required');
        } else {
            setAddressError('');
        }

        if (!billingAddress) {
            setBillingAddressError('This field is required');
        } else {
            setBillingAddressError('');
        }

        if (!billingName) {
            setBillingNameError('This field is required');
        } else {
            setBillingNameError('');
        }

        if (!billingPhone) {
            setBillingPhoneError('This field is required');
        } else {
            setBillingPhoneError('');
        }
        if (!Object.keys(cart).length) {
            setCartError('Your Cart is Empty');
        } else {
            setCartError('');
        }
        if (name && email && confirmEmail && phone && address && billingAddress && billingName && billingPhone && email === confirmEmail && Object.keys(cart).length) {
            setShowSuccessMessage(true);
            resetForm();
        }
    }

    const handleEmailChange = (event) => {
        const value = event.target.value;
        const errorMessage = value.includes('@') ? '' : 'Email must include @';
        setEmail(value);
        setEmailError(errorMessage);
    }

    const handleConfirmEmailChange = (event) => {
        const value = event.target.value;
        const errorMessage = email === value ? '' : 'Email addresses do not match';
        setConfirmEmail(value);
        setConfirmEmailError(errorMessage);
    }

    const handleUseShippingAddressChange = (event) => {
        setUseSameBillingAddress(event.target.checked);
        if (event.target.checked) {
            setBillingName(name);
            setBillingPhone(phone);
            setBillingAddress(address);
        } else {
            setBillingName('');
            setBillingPhone('');
            setBillingAddress('');
        }
    };

    return (
        <div className="place-order">
            <div className="cart">
                <h1 className="cart-title">Your Cart:</h1>
                {Object.keys(cart).length === 0 ? (<p className="empty-cart">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart-list">
                            {cartItems.map((item) => (
                                <div className="cart-item" key={item.itemname}>
                                    <img className="cart-pic" src={item.imgurl} alt={`${item.itemname} pic`} />
                                    <p>{item.itemname} - ${item.price.toFixed(2)} each</p>
                                    <p>
                                        Quantity:
                                        <input
                                            className="quantity"
                                            type="number"
                                            value={item.quantity}
                                            data-name={item.itemname}
                                            onChange={(e) => updateItem(item.itemname, parseInt(e.target.value, 10))}
                                        />
                                    </p>
                                    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <p className="cart-total">Total: ${cartTotal}</p>
                        <Button visual="button" type="button" className="clear-cart" onClick={clearCart}>Clear Cart</Button>
                    </>
                )
                }
            </div>
            <form className="place-order-form" action="#/checkout" onSubmit={handleSubmit}>
                <h2 className="form-title">Shipping Information</h2>
                <label htmlFor="ship-name">
                    <span>Name: *required</span>
                    <input type="text" id="ship-name" value={name} onChange={(event) => setName(event.target.value)} />
                    <span className="error name-error">{nameError}</span>
                </label>
                <label htmlFor="ship-email">
                    <span>Email: *required</span>
                    <input type="text" id="ship-email" value={email} onChange={(event) => setEmail(event.target.value)} onBlur={handleEmailChange} />
                    <span className="error email-error">{emailError}</span>
                </label>
                <label htmlFor="confirm-ship-email">
                    <span>Confirm Email: *required</span>
                    <input type="text" id="confirm-ship-email" value={confirmEmail} onChange={(event) => setConfirmEmail(event.target.value)} onBlur={handleConfirmEmailChange} />
                    <span className="error confirm-error">{confirmEmailError}</span>
                </label>
                <label htmlFor="phone">
                    <span>Phone: *required</span>
                    <input type="text" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    <span className="error phone-error">{phoneError}</span>
                </label>
                <label htmlFor="address">
                    <span>Address: *required</span>
                    <input type="text" id="address" value={address} onChange={(event) => setAddress(event.target.value)} />
                    <span className="error address-error">{addressError}</span>
                </label>

                <h2 className="form-title">Billing Information</h2>
                <label htmlFor="use-shipping-address" className="billing-address-checkbox">
                    <span>Same as shipping address</span>
                    <input type="checkbox" id="use-shipping-address" checked={useSameBillingAddress} onChange={handleUseShippingAddressChange} />
                </label>
                <label htmlFor="billing-name">
                    <span>Name: *required</span>
                    <input type="text" id="billing-name" value={billingName} onChange={(event) => setBillingName(event.target.value)} readOnly={useSameBillingAddress} />
                    <span className="error billing-name-error">{billingNameError}</span>
                </label>
                <label htmlFor="billing-phone">
                    <span>Phone: *required</span>
                    <input type="text" id="billing-phone" value={billingPhone} onChange={(event) => setBillingPhone(event.target.value)} readOnly={useSameBillingAddress} />
                    <span className="error billing-phone-error">{billingPhoneError}</span>
                </label>
                <label htmlFor="billing-address">
                    <span>Address: *required</span>
                    <input type="text" id="billing-address" value={billingAddress} onChange={(event) => setBillingAddress(event.target.value)} readOnly={useSameBillingAddress} />
                    <span className="error billing-address-error">{billingAddressError}</span>
                </label>
                <span className="error cart-error">{cartError}</span>
                <Button visual="button" type="submit" className="checkout">Place Order</Button>
                {showSuccessMessage && <p className="success-message">Order Successfully Placed !</p>}
            </form>
        </div>

    );

}

export default PlaceOrder;


