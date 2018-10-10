import React, { Component } from 'react'
import Header from '../../components/header'
import NavLeft from '../../components/navLeft'
import Footer from '../../components/footer'
import {Row, Col} from 'antd'
import './index.less'
export class Admin extends Component {
  render() {
    return (
      <div className="admin">
          <Row >
              <Col span={4}>
                <NavLeft/>    
              </Col>
              <Col span={20}>
                <Header/>
                <div className="content-wrap">
                <div className="content">
                </div>
                    {this.props.children}
                </div>
                <Footer/>
              </Col>
          </Row>
      </div>
    )
  }
}

export default Admin
