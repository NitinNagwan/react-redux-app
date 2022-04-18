import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addCake, buyCake } from '../redux/cake/cakeAction'

function CakeContainer(props) {
  return (
    <div>
        <h1>Number of Cakes = {props.numberofCake.numberofCakes}</h1>
        <button onClick={props.buyCake}>buy Cake</button>
        <button onClick={() => props.addCake(2)}>ADD Cake</button>
    </div>
  )
}

const mapStateTOProps = (state) =>{
  return {
    numberofCake: state.cake
  }
}

const  mapDispatchToProps = dispatch =>{
  return{
    buyCake : () =>{
      dispatch(buyCake())
    },  
    addCake : (num) =>{
      dispatch(addCake(num))
    }
  }
}
export default connect(
  mapStateTOProps,
  mapDispatchToProps
)(CakeContainer)

