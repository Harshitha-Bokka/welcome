// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  changeStatus = () => {
    this.setState(prevState => ({
      status: prevState.status === 'Subscribe' ? 'Subscribed' : 'Subscribe',
    }))
  }
  render() {
    const {status} = this.state

    return (
      <div className="container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="but" onClick={this.changeStatus}>
          {status}
        </button>
      </div>
    )
  }
}

export default Welcome
