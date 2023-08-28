import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/usersSlice';


const UserData = () => { 
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            id: uuid(),
            name: name,
            email: email,
        };

        dispatch(addUser(newUser));

        setName("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                placeholder='Enter Your Name'
                value={name}
                onChange={(event) => {setName(event.target.value);}
                } />

            <label>email</label>
            <input
                placeholder='Enter Your Mail'
                value={email}
                onChange={(event) => {setEmail(event.target.value);}
                } />

            <input type='submit' />
        </form>
    )
}

export default UserData;