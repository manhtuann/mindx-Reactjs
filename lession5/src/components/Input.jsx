import React from 'react'

function Input({data,setData,setItem}) {


    function handleChange(e){
        setData( e.target.value)
    }
    function checkEnter(e){
        let keycode = (e.keycode ? e.keycode : e.which)
        if(keycode == '13'){
            setItem(prev => [...prev,data])
            setData('')
        }
    }

    return (
        <div>
            <input 
                type="text"  
                placeholder='Enter your task here'
                value={data}
                onChange={handleChange}
                onKeyPress={checkEnter}
            />
        </div>
    )
}

export default Input