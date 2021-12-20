import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen() {
    const navigate = useNavigate();

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    useEffect(() => {
        if(!userInfo) {
            navigate('/signin');
        }
    }, [navigate, userInfo]);

    const [fullName, setFullName] = useState(shippingAddress.fullName || '');
    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        // TO Do: dispatch save shipping address action
        dispatch(saveShippingAddress({fullName, address, city, postalCode, country}));
        navigate('/payment');
    };


    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor='fullname'>
                        Full Name
                    </label>
                    <input type='text'
                            id='fullname'
                            placeholder='Enter Full Name'
                            value={fullName} onChange={(e) => {
                                setFullName(e.target.value)
                            }}
                            required>
                    </input>
                </div>
                <div>
                    <label htmlFor='address'>
                        Address
                    </label>
                    <input type='text'
                            id='address'
                            placeholder='Enter Address'
                            value={address} onChange={(e) => {
                                setAddress(e.target.value)
                            }}
                            required>
                    </input>
                </div>
                <div>
                    <label htmlFor='city'>
                        City
                    </label>
                    <input type='text'
                            id='city'
                            placeholder='Enter City'
                            value={city} onChange={(e) => {
                                setCity(e.target.value)
                            }}
                            required>
                    </input>
                </div>
                <div>
                    <label htmlFor='postalcode'>
                        Postal Code
                    </label>
                    <input type='text'
                            id='postalcode'
                            placeholder='Enter Postal Code'
                            value={postalCode} onChange={(e) => {
                                setPostalCode(e.target.value)
                            }}
                            required>
                    </input>
                </div>
                <div>
                    <label htmlFor='country'>
                        Country
                    </label>
                    <input type='text'
                            id='country'
                            placeholder='Enter Country'
                            value={country} onChange={(e) => {
                                setCountry(e.target.value)
                            }}
                            required>
                    </input>
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'>
                        Checkout
                    </button>
                </div>
            </form>
        </div>
    )
}
