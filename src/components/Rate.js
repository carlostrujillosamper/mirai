import React, { Component } from 'react'


export default class Rate extends Component {
  render() {
    return (
      <React.Fragment>
    
    {/* <p>{this.props.roomName} ------ {this.props.boardName} ----- {this.props.netPrice} ---- {this.props.occupationDescription}</p> */}
    <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
      <span className="card-title">{this.props.roomName}---{this.props.offerName? this.props.offerName:null}</span>
          <p>{this.props.boardName}-- {this.props.netPrice}-- {this.props.occupationDescription}.
          </p>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
      
    )
  }
}
