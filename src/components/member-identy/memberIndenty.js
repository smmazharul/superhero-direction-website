import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone , faUser } from '@fortawesome/free-solid-svg-icons';


import './memberIndenty.css'

const MemberIndenty = (props) => {
    const {name, country, countryCode, declared, id, Currency,Donetion,img}=props.member;
    const element = <FontAwesomeIcon icon={faUser} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const twitter= <FontAwesomeIcon icon={faPhone} />
    return (
        <div className="cards">
            <div className="card">
                <img src={img} alt="primister name" />
                <h1>Name: {name}</h1>
                <h3>Country: <span>{country}</span></h3>
                <h3> ID: <span>{id}</span></h3>
                <h3>Declared: <span>{declared}</span></h3>
                <h3>Currency: <span>{Currency}</span></h3>
                <h3>Country Code: <span>{countryCode}</span></h3>
                <h3>Donation: <span>${Donetion} M</span></h3>
                <button onClick={() =>props.handleAddMember(props.member)}
                className="btn-member"><span className="user-icon">{element}</span> Select Member</button>
                <div className="card-bottom-icons">
                <h2>{email} {twitter}</h2>
                </div>

            </div>
        </div>
    );
};

export default MemberIndenty;