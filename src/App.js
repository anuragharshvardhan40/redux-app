import React, { Component } from "react";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Age:<span style={{ color: "red" }}>{this.props.age}</span></p>
        <br></br><br></br>
        <button onClick={this.props.onAgeUp}>Age_up</button>
        <button onClick={this.props.onAgeDown}>Age_Down</button>
      </div>
    )
  }
};


//subsribe

const receive = (state)=>{
  return{
    age:state.age
  }

}

//dispatch

const send = (dispatch) => {
  return {
    onAgeUp: () => { dispatch({ type: "AGE_UP", value: 1 }) },
    onAgeDown: ()=> {dispatch({type : "AGE_DOWN", value:1})}
  }
}


export default connect(receive,send) (App)