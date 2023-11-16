import React, { useEffect, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { fetchUsers, resetUsers, getOneUser } from "../../../reducer";
import UserList from "../Components/UserList";
import Message from "../../../Message/Containers/Message";
import { info, warning, danger } from "../../../Message/reducer";

function Users({users, fetchUsers, resetUsers}){
    const [ localLoading, setLocalLoading ] = useState(true);
    const [ elemUser, setElem ] = useState(1);
    const [ hasFetched, setHasFetched ] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(!hasFetched)
        if (!hasFetched && users.length === 0) {
            handleFetch();
            setHasFetched(true)
        }
        setLocalLoading(false);
    },[fetchUsers, users, hasFetched])
    const handleFetch = () => {
        fetchUsers();
        dispatch(info());

    }
    const handleAddUser = () => {
        elemUser === 10 ? setElem(1) : setElem(prevValue => prevValue +1) 
        dispatch(getOneUser(elemUser));
        dispatch(warning());
      };
      const handleReset = () => {
        resetUsers();
        dispatch(danger());
        setHasFetched(true);
      }
    return (
        <div className="ml-4">
            <h1 className="pl-4">Users</h1>
                {localLoading && <p>Loading...</p>}
                <button onClick={handleFetch} className="mr-3">Refresh load</button>
                <button onClick={handleReset} >Reset list</button>
                <button onClick={handleAddUser} className="mr-2 ml-2" >add 1 user</button>
                
            <br></br>
            <Message />
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
    info_Msg: () => dispatch(info()),
    dispatch,
});

export default connect(mapStateToProps,mapDispatchToProps)(Users)