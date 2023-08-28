import React from "react";
import { useSelector } from "react-redux";


const UserList = () => {
    const state = useSelector((state) => {
        return state.userReducer;
    }); 

    console.log(state);
   
    return (
        <div>
            <h1>User List</h1>
        </div>
    )
};

export default UserList;