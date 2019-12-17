import React, { Component } from 'react'
import BookingService from '../services/booking.service'
import moment from 'moment'
import Rate from './Rate'

export default class Booker extends Component {
  constructor(){
    super()
    this.bookingService = new BookingService()
    this.state={
      date:'',
      today:new Date(),
      nights:0,
      error: "",
      id1:"44069509",
      id2:"10030559",
      id3:"100376478",
      chosenId :"",
      allRates :{
        finalRates :[],
        loaded :false
      }
    }
  }

  handleOnchangeDate = (e) => {
    let pickedDate = new Date(e.target.value)
    pickedDate<this.state.today?this.setState({...this.state,error:"pick future date",date:''}):this.setState({...this.state,date:e.target.value,error:''})
  }
  handleOnchangeDays = (e) => {
    let pickedNights = e.target.value
    pickedNights>30?this.setState({...this.state,error:"less days please",nights:0}):this.setState({...this.state,nights:e.target.value,error:''})
  }

  handleOnchangeId = (e) => {
    this.setState({...this.state,chosenId:e.target.value})
  }

  getRates = () =>{
    if(this.state.chosenId===""){
      this.setState({...this.state, error:"choose a hotel please"})
    }else{
      let formatted_date = moment(this.state.date).format("DD/MM/YYYY")
      this.bookingService.getRates(this.state.chosenId,formatted_date,this.state.nights)
      .then(rates=>this.setState({...this.state, allRates : {finalRates : rates,loaded:true}}))
      .catch(err=>this.setState({...this.state,error:"Lo sentimos, no hay tarifas disponibles"}))
  
    }
}

  
  render() {
    
    return (
      
      
      <div>
        <button onClick={(e)=>this.handleOnchangeId(e)} value={this.state.id1} class="waves-effect waves-light btn">Hotel Baqueira Val de Neu</button>
        <button onClick={(e)=>this.handleOnchangeId(e)} value={this.state.id2} class="waves-effect waves-light btn">Hotel Moderno</button>
        <button onClick={(e)=>this.handleOnchangeId(e)} value={this.state.id3} class="waves-effect waves-light btn">Hotel Grand Luxor</button>
  
        <input type= 'date'  value = {this.state.date} onChange = {(e)=>this.handleOnchangeDate(e)}></input>
        <input type= 'number'  value={this.state.nights} onChange={(e)=>this.handleOnchangeDays(e)}></input>

    
        <button class="btn waves-effect waves-light" onClick={()=>this.getRates()}>GET RATES</button>
        <p>{this.state.error}</p>
        {this.state.allRates.loaded?this.state.allRates.finalRates.availableRates[`${this.state.chosenId}`].map((eachRate)=><Rate {...eachRate}></Rate>):null}
      </div>
     
    )
  }
}