import React from 'react';
import './css/colorItem.css'

function ColorItem({color, changle ,setChangle}) {
    return (
        <>
            <div className="listitem">
                <div className="item" style={{backgroundColor: color === changle ? color :'grey'}}
                onClick={() => setChangle(color)}></div>
            </div>
            
        </>
    )
}


export default ColorItem

