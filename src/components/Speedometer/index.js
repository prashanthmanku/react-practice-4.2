// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      let {speed} = prevState
      if (speed < 200) {
        speed += 10
      }
      return {speed} // using  property shorthand =>{speed:speed}
    })
  }

  onBreak = () => {
    this.setState(prevState => {
      let {speed} = prevState
      if (speed > 0) {
        speed -= 10
      }
      return {speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-heading">Speed is {speed}mph</h1>
        <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-bg">
          <button className="button1" onClick={this.onAccelerate} type="button">
            Accelerate
          </button>
          <button className="button2" onClick={this.onBreak} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
