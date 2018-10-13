import React, { Component } from 'react'
import Header from '../../components/header'
import { Card } from 'antd'
import './detail.less'
import axios from '../../axios'


export class Detail extends Component {

  componentDidMount(){
    this.getData()
  }
  getData = () => {
    const {detailid} = this.props.match.params
    axios.get('/order/detail', {id: detailid}).then(res => {
      if(res.code == '0'){
        console.log(res)
        this.initMap(res.result)
      }
    })
  }
  initMap = (result) => {
    
    const BMap = window.BMap
    this.map = new BMap.Map("container");          // 创建地图实例  
    this.addControl()
    this.drawPolyline(result.position_list)
    this.drawServiceArea(result.area)
  }

  //添加控件

  addControl = () =>{
    const BMap = window.BMap
    const map = this.map
    map.addControl(new BMap.NavigationControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    }));    
    map.addControl(new BMap.ScaleControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    }));    
  }
  //绘制路径
  drawPolyline = (position_list) => {
    const BMap = window.BMap
    const map = this.map
    let startPoint = position_list[0]
    let endPoint = position_list[position_list.length-1]
    let startBmapPoint = new BMap.Point(startPoint.lon, startPoint.lat); //定义两个点
    let endBmapPoint = new BMap.Point(endPoint.lon, endPoint.lat); 

    let startMarker = new BMap.Marker(startBmapPoint);
    let endMarker = new BMap.Marker(endBmapPoint);
    map.addOverlay(startMarker);  
    map.addOverlay(endMarker);  
    map.centerAndZoom(startBmapPoint, 11);                 // 初始化地图，设置中心点坐标和地图级别  
  
    let polyline = new BMap.Polyline(position_list.map(point =>{
      return new BMap.Point(point.lon, point.lat)
     }),
      {strokeColor:"#ff0000", strokeWeight:6, strokeOpacity:0.5}
      )
  map.addOverlay(polyline);
  }
  //绘制服务区
  drawServiceArea = (area) => {
    const BMap = window.BMap
    const map = this.map
    let Polygon = new BMap.Polygon(
      area.map(point => new BMap.Point(point.lon, point.lat)),
      {
        strokeColor:'#ff0000',
        strokeWeight:6,
        fillColor:'#ffbb00',
        fillOpacity:0.5
      }
    )
    map.addOverlay(Polygon)
  }

  render() {
    return (
      <div className="detail">
        <Header></Header>
        <Card>
          <div className="bmap-wrap" id="container"></div>
        </Card>
      </div>
    )
  }
}

export default Detail
