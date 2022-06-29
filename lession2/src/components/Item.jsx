import React from 'react'

function Item() {
    const listItem = ['Clean up bedroom','Buy some milk','Jogging','Learn React','Doing Excercies']
    return (
        <>
            {
                listItem.map(item => {
                    return (
                        <div>
                            <input type="checkbox" />
                            <span>{item}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Item