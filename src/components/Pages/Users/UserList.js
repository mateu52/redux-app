import React from "react";
import UserDetail from "./UserDetail";

function UserList({users}){
    console.log("hej")
    return(
        <div>
            {users && users.map((user) => {
                return(
                <UserDetail user={user} />
            )
            })}
        </div>
    )
}

export default UserList;