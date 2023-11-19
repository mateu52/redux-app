import React, { useEffect } from "react";
import { connect } from "react-redux";
import { to_zero } from "../reducer";
import styles from './style.css'
function Message({ info, warning, danger, closeMSG}){
    const isVisible = info !== '' || warning !== '' || danger !== '';
    useEffect(() => {
        let timeout;
        if(isVisible) {
            timeout = setTimeout(() => {
                closeMSG();
            },3000)
        }
        return () => {
            clearTimeout(timeout);
        }
        
    },[isVisible, closeMSG])

    const messageStyles = {
        display: isVisible ? 'block' : 'none'
    }

    return (
        <div className="table" style={messageStyles}>
            {
                isVisible && (
                <div className="popup" style={styles}>
                <button className="close" onClick={closeMSG}>X</button>
                    <p className="info" style={{ display: info !== ''? 'block': 'none'}}>{info}</p>
                    <p className="warning" style={{ display: warning !== ''? 'block': 'none'}}>{warning}</p>
                    <p className="danger" style={{ display: danger !== ''? 'block': 'none'}}>{danger}</p>
                </div>
            )}
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