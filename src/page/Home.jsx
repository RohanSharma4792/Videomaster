import React, {useState, useCallback} from "react";
import {useNavigate} from 'react-router-dom'


const Home = ()=>{
    const [value, setValue] =useState();

    const navigate = useNavigate()

    const handleClick = useCallback(()=>{
        navigate(`/room/${value}`)
    }, [navigate, value])

    return(
        <div>
        <input type="text" value={value} 
        placeholder="enter your id"
        onChange={e=>setValue(e.target.value)} />
        <button onClick={handleClick}>Join</button>
        </div>
        )
}
export default Home;