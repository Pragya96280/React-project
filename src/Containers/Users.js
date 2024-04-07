import React, {useState} from 'react';
function Users(){
    const [users, setUsers]= useState([
        {name : 'Mohan', age: 25},
        {name : 'Ram', age: 24}

    ])
    return(
    <div>
        <h2> Users </h2>
        <ul>
            {
                users.map((users, index) =>{
                    return <li>{users.name}, {users.age}</li>
                })
            }
        </ul>
    </div>
    )
}
export default Users;