import React from 'react'

function Footer({item}) {
    return (
        <>
            <span>{item.length} tasks left</span>
            <span>MINDX todoList</span>
        </>
    )
}

export default Footer