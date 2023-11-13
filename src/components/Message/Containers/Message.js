import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
function Message({ info, warning, danger}){

    const handleClick = () => {
        return <div>
                <button>X</button>
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

export default connect(mapStateToProps, null)(Message);