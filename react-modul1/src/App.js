import React, { Component } from "react";
import Alert from "./Components/Alert";


class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "danger",
      header: "Fatal error",
      content: "Ini content dari Alert"
    }
  }
  
  changeTypeAlert = (event) => {
    this.setState({
      type: event.target.value
    });
  }
  
  changeHeaderAlert = (event) => {
    this.setState({
      header: event.target.value
    });
  }
  
  changeContentAlert = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return (
      

      <div className="App container col-sm-6">
      <Alert type={this.state.type} header={this.state.header}>
          {this.state.content}
        </Alert>
        <hr />
        <h4>Alert Control</h4>
        <b className="text-left">Tipe Alert</b>
        <select className="form-control" name="type" value={this.state.type}
          onChange={this.changeTypeAlert}>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="info">Info</option>
        </select>
        <b className="text-left">Header Alert</b>
        <input
          type="text" name="header" className="form-control" value={this.state.header}
          onChange={this.changeHeaderAlert} />
        <b className="text-left">Content Alert</b>
        <input
          type="text" name="content" className="form-control" value={this.state.content}
          onChange = { this.changeContentAlert} />
      </div >
    );
  }
}

export default App;