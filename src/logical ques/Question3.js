import React from 'react'


let arr = [0,1,2,3,7,4,5,6,7,8,9,]
let num=0
  
export default function Question3() {
   
    for(let i=10; i<101; i++){
        arr[i]=i
    }


    for(let i=0; i<arr.length; i++ ){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                num=arr[j]
            }
        }
    }

        return (    
        <div className='pa2 ba mv2 mh5 bg-light-gray grow'>
            <h1>Question3</h1>
            <h2>given array={arr  + ''}</h2>
            <h2>{num}</h2>
        </div>
    )
}





