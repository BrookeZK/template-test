// 'use strict';

// this is set to JavaScript global object, which
// is the window object when run in the browser
console.log("this at the top level of our script", this);

class Box {

  constructor() {
    // this is Box object
    console.log("this in the constructor", this);
    this.stuff = [];
  }

  addJunk(array) {
    // this is Box object
    console.log("this in addJunk method", this);

    array.forEach(function(thing) {
      // this is undefined, because 
      // the callback function does not belong to 
      // any object type
      console.log("this in addJunk's forEach loop callback", this);
      this.stuff.push(thing);
    });
  }
}
const newBox = new Box();
newBox.addJunk(["broken pencils", "busted rubber bands", "checkers pieces"]);