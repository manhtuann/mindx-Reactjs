import React, { useState, useEffect } from 'react'
import '../css/item.css'

function Item({ data, item }) {

    // const [ischecked, setIsChecked] = useState(
    //     new Array(item.length).fill(false)
    // )

    // useEffect(() => {
    //     if (item.length > ischecked.length) {
    //         const old = [...ischecked];

    //         for (let i = ischecked.length; i < item.length; i++) {
    //             old.push(false);
    //         }
    //         setIsChecked(old);
    //     }
    // }, [ischecked, ischecked.length, item.length])


    const [ischecked, setIsChecked] = useState({});

    console.log(ischecked);
    const handleOnChange = (position) => {
        setIsChecked({
            ...ischecked,
            [position]: !ischecked[position],
        });
    };

    // const handleOnChange = (position) => {
    //     const updatedChecked = ischecked.map((item, index) =>
    //         index === position ? !item : item
    //     );
    //     setIsChecked(updatedChecked);

    // }
    return (
        <>
            {
                item.map((item, index) => {
                    return (
                        <div key={index}  >
                            <input
                                type="checkbox"
                                
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