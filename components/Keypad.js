import React from 'react'

class Keypad extends React.Component {

  constructor(){
    super()
    this.typeListener = this.typeListener.bind(this)
  }

  typeListener(){
    console.log("Entering password...")
  }

  render(){
    return(
      < input type="password" onKeyUp={this.typeListener}/>
    )
  }
}



module.exports = Keypad



// I am wondering why the following method does not work. I am aware that I am not binding this and I am not using wrappers, but I thought that the event should have triggered anyway because I don't see the point of "binding this" when the function I am calling is not a "this" function or rather a class function, it is merely a console.log()

// class Keypad extends React.Component {

//   render(){
//     return(
//       < input type="password" onKeyUp={console.log("Entering password...")}/>
//     )
//   }
// }
