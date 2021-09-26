import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './donetionCart.css'
import {  faDonate,faUsers } from '@fortawesome/free-solid-svg-icons';

const DonetionCart = (props) => {
    const element= <FontAwesomeIcon icon={faUsers } />
    const donation= <FontAwesomeIcon icon={faDonate } />

    // console.log(props.cart);
    const {cart}=props;
    let total =0;
    for (const member of cart ){
        total= total + member.Donetion;

    }

    return (
        <div>

                <h3>{element} Total Members: {props.cart.length}</h3>
                <h3>{donation} Total Donation:${total} <span>M</span></h3>
                <ul>

                    {
                        cart.map(name=> <p><img src={name.img} alt="" /> <span className="name"> {name.name}</span></p> )
                    }


                </ul>


        </div>
    );
};

export default DonetionCart;