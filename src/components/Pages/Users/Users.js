import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { fetchUsers } from "../../reducer"
import UserList from "./UserList";

function Users({users, fetchUsers}){
    const [ localLoading, setLocalLoading ] = useState(true);
    useEffect(() => {
        users.length === 0 && fetchUsers();
        setLocalLoading(false);
    },[fetchUsers, users])
    console.log( users);
    return (
        <div>
            <h1>Users</h1>
                {localLoading && <p>Loading...</p>}
            <br></br>
            <UserList users={users}/>
        </div>
    )
}
const mapStateToProps = state => ({
    users:state.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError
})
const mapDispatchToProps = {fetchUsers};

export default connect(mapStateToProps,mapDispatchToProps)(Users)