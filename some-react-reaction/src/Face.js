import React, {useState} from 'react';
import './App.css'
function Face(){
    const [count, setCount] = useState(0);

    function inc(){
        setCount(count + 1);

    }
    function dec(){
        setCount(count - 1);
    }
    return(
        <div className = "face">
            <button onClick = {inc}>Increment</button>
                <h1>{count}</h1>
            <button onClick ={dec}>Decrement</button>
        </div>
    );
    
}

export default Face;