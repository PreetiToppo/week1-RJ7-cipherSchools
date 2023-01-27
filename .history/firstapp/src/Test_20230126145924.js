import React, {Component} from 'react';

class Test extends Component {
  isLoggedIn = false;

  render() {
    return (
        <div>
            {
                this.isLoggedIn ? ("Welcome User") : ("Please Login")
            }
        </div>    
    )
  }
}

export default Test;