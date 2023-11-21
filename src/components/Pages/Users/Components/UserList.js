import React from "react";
import UserDetail from "./UserDetail";

function UserList({users}){
    console.log(users)
    return(
        <div className="bg-green-200 w-300">
            {users && users.map((user) => {
                return(
                <UserDetail user={user} />
            )
            })}
        </div>
    )
}

export default UserList;