import React, {useState} from 'react';
import './index.css';
import FuncComponent,{ClassComponent} from './component';

const Main = () =>{
    const [funcState, setfuncState] = useState(true)
    const Box1 = () => {setfuncState((state) => !state)};

    const [classState, setclassState] = useState(true)
    const Box2 = () => {setclassState((state) => !state)};

    return(
        <>
        <div className='A1'>
            <button className='btn' onClick={()=>{Box1()}}>To see styling in functional component</button>
            <button className='btn' onClick={()=>{Box2()}}>To see styling in class component</button>
        </div>
        <div className='container'>
            {!funcState ? <FuncComponent/> : null}
            {!classState ? <ClassComponent/> : null}
        </div>
    </>
    )
}

export default Main;