import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../header/index.less"
import { formatDate } from '../../utils'
import axios from 'axios'


export class Header extends Component {

  state = {
    time: '',
    weather: '1111111111111111111111'
  }
  getTime = () => {
    setInterval(() => {
      let unixDate = new Date().getTime()
      let timeStr = formatDate(unixDate)
      this.setState({
        time: timeStr
      })
    }, 1000)
  }
  getweather = () => {
    axios.get(`http://t.weather.sojson.com/api/weather/city/101010100`).then(res => {
      let weather = res.data.data.forecast[0]
      let weatherStr = `${weather.low} ~ ${weather.high}    ${weather.fx}  ${weather.fl}`

      this.setState({
        weather: weatherStr
      })
    })
  }

  componentWillMount() {
    this.getTime()
    this.getweather()
  }

  render() {
    return (
      <div className="header-wrap">
        <div className="user-info">
          <h2 className="fll quit">
            共享单车后台系统
          </h2>
          <div className="flr">
            <Link className="quit" to="/login"> 退出</Link>
          </div>
          <div className="user-detail flr quit">
            欢迎，{' '}<span className="username">Cason</span>
          </div>
        </div>
        <div className="weather-wrap clearfix">
          <div className="breadcrumb fll">
            首页
          </div>
          <div className="weather flr clearfix">
            <div className="date fll">{this.state.time}</div>
            <div className="weather-detail fll">{this.state.weather}</div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Header
