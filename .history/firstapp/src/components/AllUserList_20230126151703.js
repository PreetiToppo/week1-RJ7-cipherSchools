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

let array = allUsers.map((user,index) => (
    <UserDetails key={index} user={user}/>
))
return (
    <div>
        < array/>
    </div>
)
}

export default AllUserList