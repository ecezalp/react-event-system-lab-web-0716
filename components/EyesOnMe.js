import React from 'react'

class EyesOnMe extends React.Component {

  constructor(){
    super()
    this.focusListener = this.focusListener.bind(this)
    this.blurListener = this.blurListener.bind(this)
  }

  focusListener(){
    console.log("Good!")
  }

  blurListener(){
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      < button onFocus={this.focusListener} onBlur={this.blurListener}></button>
    )
  }
}

module.exports = EyesOnMe