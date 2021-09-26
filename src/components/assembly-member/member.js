import React, { useEffect, useState } from 'react';
import DonetionCart from '../donetionCart/donetionCart';
import MemberIndenty from '../member-identy/memberIndenty';
import './member.css'

const Member = () => {
    const [members,setMembers]= useState([])
    const [cart,setCard]=useState([]);
    useEffect(()=>{
        fetch('./primister.json')
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])

    const handleAddMember = (members)=>{
        // console.log(members.name);
        const memberCart = [...cart, members];
        setCard(memberCart);
    }

    return (
        <div className="member-container">
            <div className="member-container">
                {/* <h3>member: {members.length}</h3> */}
                {
                    members.map(member=><MemberIndenty
                        key={member.id}
                        member={member}
                        handleAddMember ={handleAddMember}
                        ></MemberIndenty>)
                }
            </div>
            <div className="cart-container">
                {/* <h3>Total Member: {cart.length}</h3>
                <h3>Total Donation:</h3> */}
                <DonetionCart cart={cart}></DonetionCart>

            </div>


        </div>
    );
};

export default Member;