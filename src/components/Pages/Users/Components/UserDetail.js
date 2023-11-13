import React from "react";

function UserDetail({user}){
    return(
        <div key={user.id} className="p-3">
            <p>User: {user.name}</p>
        </div>
    )
}

export default UserDetail;