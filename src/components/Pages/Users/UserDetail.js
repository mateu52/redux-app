import React from "react";

function UserDetail({user}){
    return(
        <div key={user.id} className="p-6">
            <p>User: {user.name}</p>
            <h1 className="text-3xl ">
      Hello world!
    </h1>
        </div>
    )
}

export default UserDetail;