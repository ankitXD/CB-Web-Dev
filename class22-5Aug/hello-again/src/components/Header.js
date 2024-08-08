import React, { useLayoutEffect } from 'react'

export default function Header() {
  const name = "john"
  const element = <h1>Hello world {name}</h1>
  const obj = {
    fName : "Michael",
    lName : "Scott"
  }
  const {fName, lName} = obj
  const fruits = ["apple","mango","banana"]
  const fruitItems =  <ul>
                        {fruits.map((item)=>
                        <li>{item}</li>
                        )}
                      </ul>

  const style1 = {
     padding : "10px",
     margin : "10px",
     fontWeight : "normal"
  }
  const elem2 = <h1 style={style1}>Element 2</h1>
  const elem3 = <div>
                    <p>Hello</p>
                    <p>World</p>
                </div>
  return (
    <div className='pd10'>
      {element}
      {fruitItems}
      {elem2}
      {elem3}
    </div>
  )
}
