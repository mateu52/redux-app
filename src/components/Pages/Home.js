import React from "react";
import { connect } from 'react-redux';

const Home = ({users}) => {
    console.log(users);
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
};

const mapStateToProps = state => ({
    users:state.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError
})

export default connect(mapStateToProps)(Home);