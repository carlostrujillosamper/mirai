import axios from 'axios'

class BookingService{
  constructor(){
    this.service = axios.create({
      baseURL:"https://api-pre.mirai.com/MiraiWebService/availableRate",
      auth:{
        username: "user1",
        password:"user1Pass"
      }
    })
  }

  getRates = (id,date,nights) =>{
    return this.service.get(`get?hotelId=${id}&checkin=${date}&nights=${nights}`)
    .then(response=>response.data)
  }

}

export default BookingService