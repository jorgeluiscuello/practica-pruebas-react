
import  PropTypes from "prop-types"
import { useState } from "react"

const CounterApp = ({value}) => {
  const [counter,setCounter]= useState(value)
  const handleAdd =()=>{
    //setCounter(counter + 1)
    setCounter((c)=> c + 1)
  }
  const decrementar =()=>{
    //setCounter(counter +-1)
    setCounter((c)=> c - 1)
  }
  const reset =()=>{
    //setCounter(value)
    setCounter( value )
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ decrementar }>-1</button>
      <button onClick={ reset }>reset</button>
    </>
  )
}

export default CounterApp

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

