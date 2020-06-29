import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DepositDetail extends Component {

  constructor(props){
    super(props);

    this.state = { value: 'select'};
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div className="card">
        <label htmlFor="select1" >Select1</label>
        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
          <option value="select">Select an Option</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
        </select>
      </div>
    )
  }
}

// a select with dynamically created options
const options = ["Select an Option", "First Option", "Second Option", "Third Option"]

class SelectBox2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'Select an Option'};
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor="select2" >Select2</label>
        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
        {options.map(option => {
          return <option value={option} key={option} >{option}</option>
        })}
      </select>
      </div>

    )
  }
}






}




export default DepositDetail;
