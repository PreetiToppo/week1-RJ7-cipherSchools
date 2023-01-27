import React, {Component} from 'react';

class Test extends Component {
  state = {isLoggedIn : false};

  render() {
    return (
        <div>
            {
                this.isLoggedIn ? ("Welcome User") : ("Please Login")
            }
            <button onClick={(e) => this.setState({isLoggedIn:true})}> Login </button>
        </div>    
    )
  }
}

export default Test;