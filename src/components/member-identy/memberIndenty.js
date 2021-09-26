import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser } from '@fortawesome/free-solid-svg-icons';

import './memberIndenty.css'

const MemberIndenty = (props) => {
    // console.log(props.member.name);
    const {name, country, countryCode, declared, id, Currency,Donetion,img}=props.member;
    const element = <FontAwesomeIcon icon={faUser} />

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
            </div>
        </div>
    );
};

export default MemberIndenty;