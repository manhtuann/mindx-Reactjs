import React, { useState } from 'react'
import '../css/item.css'

function Item({ data,item }) {

    const [ischecked, setIsChecked] = useState(
        new Array(item.length).fill(false)
    )
    console.log(ischecked);
    const handleOnChange = (position) => {
        const updatedChecked = ischecked.map((item, index) =>
            index === position ? !item : item
        );
        setIsChecked(updatedChecked);
        
    }
    return (
        <>
            {
                item.map((item, index) => {
                    return (
                        <div key={index}  >
                            <input
                                type="checkbox"
                                id={'custom-check' - { index }}
                                onChange={() => handleOnChange(index)}
                                checked={ischecked[index]}
                            />
                            <div className='item'>
                                <span className={ischecked[index] ? 'text' : ''}>{item}</span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Item