import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { to_zero } from "../reducer";
function Message({ info, warning, danger, closeMSG}){

    useEffect(() => {
        setTimeout(() => {
            closeMSG();
        },100)
    })

    const handleClick = () => {
        return <div>
                <button onClick={closeMSG}>X</button>
                <p className="info">{info}</p>
                <p className="warning">{warning}</p>
                <p className="danger">{danger}</p>
            </div>
    }
    return (
        <div className="table">
            {
                (info || warning || danger) !== null ? handleClick() : <p></p>
            }
        </div>
    )
}

function mapStateToProps(state){
    return{
        info: state.message.info,
        warning: state.message.warning,
        danger: state.message.danger,
    }
}
function mapDispatchToProps(dispatch){
    return {
        closeMSG : () => dispatch(to_zero())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Message);