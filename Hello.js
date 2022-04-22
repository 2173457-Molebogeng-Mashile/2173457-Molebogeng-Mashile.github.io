//rcc and eveything will show up or you could type it out your self, the rcc shortcut names the class and the function
// the same name as the file
//so name the file properly//
import React, { Component } from 'react'

export default class Hello extends Component {
//render is a react method. A method is a function inside a class. A function is stand-alone and does one thing
//a class contains lots of functions to do one thing, functions that are, in some way related ot one another
  render() {
    return (
      <React.Fragment>
          <h1>Hello world!</h1>
          <p>This is the paragraph</p>
      </React.Fragment>
          //the return can only return one element, so you must have a single enclosing tag with everythin in it. Like as seen above
          //If you don't want to use so many divs you can use React fragments. As seen above
    )
  }
}

