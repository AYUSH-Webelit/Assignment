import React from 'react'


let obj=[
    {
        'id':1,
        'name':'abc'
    },
    {
        'id':4,
        'name':'abc2'
    },
    {
        'id':5,
        'name':'abc3'

    },
    {
        'id':2,
        'name':'abc5'
    },
    {
        'id':3,
        'name':'abc4'
    }
]

let num= 0

    for(let i=0; i<obj.length; i++){
        for(let j=0; j<obj.length; j++){
            if(obj[i].id>obj[j].id){
                num=obj[i].id
                obj[i].id=obj[j].id
                obj[j].id=num
            }
        }
    }

function Question5() {
    return (
        <div className='pa2 ba mv2 mh5 bg-light-gray grow'>
            <h1>
                Question 4 and 5 is in  the source file
            </h1>
        </div>
    )
}

export default Question5
