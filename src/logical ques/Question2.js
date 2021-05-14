import React from 'react'


const arr = [0,1,1,0,0,1,1,1,0,1,0,1,1,1,1]
let n=0
let m=0

const max=()=>{
    if(n>m){
        m=n
    }   
}

for(let i=0; i<arr.length; i++){
    if(arr[i]===0){
        n=0
    }
    else{
        n++
        max()

    }
}


export default function Question2() {    
    
            return (
                <div className='pa2 ba mv2 mh5 bg-light-gray grow'>
                    <h1>Question2</h1>
                    <h2>GIVEN ARRAY = {arr}</h2>
                    <h2>{m}</h2>
                </div>
            )

}        


