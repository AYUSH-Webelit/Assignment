import React from 'react'


const arr = [5,754,35,2,45,24,249,78,2,6,254]
let number=[]

export default function Question1() {                                             
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            number[i]=arr[i] + ','
        }
        
    }    
            return (
                <div className='pa2 ba mv2 mh5 bg-light-gray grow'>
                    <h1>Question1</h1>
                    <h2>GIVEN ARRAY = {arr + ' '}</h2>
                    <h2>EVEN NUMERS ARE = {number}</h2>
                </div>
            )

}        


