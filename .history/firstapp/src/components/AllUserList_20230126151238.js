import React from 'react'
import UserDetails from './UserDetails';

const AllUserList = () => {
    let allUsers = [{
        name: "John",
        email: "john@email.com",
        phoneNumber: "1234567890",
    },
    {   name: "ray",
        email: "ray@gmail.com",
        phoneNumber: "1234567890",
},];
return (
    <div>
        <UserDetails />
    </div>
)
}

export default AllUserList