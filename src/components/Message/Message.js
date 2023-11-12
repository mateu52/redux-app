import React, { useEffect, useState } from "react";
import { info } from "../../ui/messages";
function Message({ warning, danger}){
    const [mess, setMses] = useState('info')
    // useEffect(() => {
    //     info=== true ? setMses('info'): null,
    //     warning=== true ? setMses(warning): null,
    //     danger=== true ? setMses(danger): null,
    // })
    return (
        <div style={info}>
            <p >{mess}</p>
        </div>
    )
}

export default Message;