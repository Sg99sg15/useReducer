import React, {useReducer} from 'react';
import './useReducer.css';



const initialState = 0;   
const reducer = (state, action) =>{
    // console.log(state, action);
    if(action.type === "Inc"){
        return state + 1;
    }
    if(action.type === "Dec"){
        return state - 1;
    }

    return(state);
    }


const UseReducer=()=> {

    const [state,dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div className='box'>
                <h1>{state}</h1>
                <div className='button'>
                    <button onClick={()=> dispatch({type:"Inc"})}>Increase</button>
                    <button onClick={()=> dispatch({type:"Dec"})}>Decrease</button>
                </div>
            </div>
        </>
    )
}

export default UseReducer;
