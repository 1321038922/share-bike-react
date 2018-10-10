import React, { Component } from 'react'
import notfound from './404.jpg'
import {Link} from 'react-router-dom'
import './index.less'
export class NotMatch extends Component {
  render() {
    return (
      <div className="notmatch clearfix">
        <div className="notmatch-l fll">
        <div className="title">
          Congratulation !
        </div>
        <div className="desc">
           404 你发现了一只大橘
        </div>
        <strong>
          你可以...
        </strong>
        <ul>
          <li>链接</li>
          <li>
            <Link to="/admin/home">回首页</Link>
          </li>
        </ul>
        </div>
        <div className="img-wrap fll">
          <img src={notfound} alt=""/>
        </div>
      </div>
    )
  }
}

export default NotMatch
