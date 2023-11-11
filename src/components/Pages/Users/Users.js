import React, { useEffect, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { fetchUsers, resetUsers, getOneUser } from "../../reducer";
import UserList from "./UserList";

function Users({users, fetchUsers, resetUsers}){
    const [ localLoading, setLocalLoading ] = useState(true);
    const [ elemUser, setElem ] = useState(1)
    const dispatch = useDispatch();
    useEffect(() => {
        !users && fetchUsers();
        //fetchUsers();
        setLocalLoading(false);
    },[fetchUsers, users])
    const handleAddUser = () => {
        elemUser === 10 ? setElem(1) : setElem(prevValue => prevValue +1) 
        dispatch(getOneUser(elemUser));
      };
    return (
        <div className="ml-4">
            <h1 className="pl-4">Users</h1>
                {localLoading && <p>Loading...</p>}
                <button onClick={fetchUsers} className="mr-3">Refresh load</button>
                <button onClick={resetUsers} >Reset list</button>
                <button onClick={handleAddUser} className="mr-2 ml-2" >add 1 user</button>
                
            <br></br>
            <br></br>
            <UserList users={users}/>
        </div>
    )
}
const mapStateToProps = state => ({
    users:state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError
})
const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    resetUsers: () => dispatch(resetUsers()),
    dispatch,
});

export default connect(mapStateToProps,mapDispatchToProps)(Users)