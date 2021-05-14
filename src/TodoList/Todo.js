import React, {useState} from 'react'


const Todo = () => {
    const[item,setItem] = useState([])
    const[list,setList] = useState('')

    const onadd = ()=>{
        setItem(list)  
    }
    

    return (
        <div className='ba mh7 mt4 mb7 bg-gray'>
            <h1>TODO LIST</h1>
                <input placeholder='Write Here' onChange={e =>setList(e.target.value)}/>
                <button onClick={onadd}>ADD</button>
                <div>
                    <p>{item}</p>
                </div>
        </div>
    )
}

export default Todo
