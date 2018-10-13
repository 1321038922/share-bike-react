import React, { Component } from 'react'


import 'echarts/lib/chart/pie';//饼图组件
import 'echarts/lib/component/legend'
import EchartsReact from 'echarts-for-react';
import { Card } from 'antd'


export class PieDemo extends Component {

  pie1 = () => {
    return {
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [
        {
          name: '骑行订单',
          type: 'pie',
          radius: ['60%', '80%'],
          center: ['50%', '60%'],
          data: [
            { value: 3000, name: '周一' },
            { value: 2000, name: '周二' },
            { value: 5000, name: '周三' },
            { value: 1500, name: '周四' },
            { value: 6000, name: '周五' },
            { value: 3500, name: '周六' },
            { value: 8800, name: '周六' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
  pie2 = () => {
    return {
      title: {
        text: '某站点用户访问来源',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [
        {
          name: '骑行订单',
          type: 'pie',
          radius: '80%',
          center: ['50%', '60%'],
          data: [
            { value: 3000, name: '周一' },
            { value: 2000, name: '周二' },
            { value: 5000, name: '周三' },
            { value: 1500, name: '周四' },
            { value: 6000, name: '周五' },
            { value: 3500, name: '周六' },
            { value: 8800, name: '周六' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Card
          title="饼状图一"
        >
          <EchartsReact option={this.pie1()}></EchartsReact>
        </Card>
        <Card
          title="饼状图二"
        >
          <EchartsReact option={this.pie2()}></EchartsReact>
        </Card>
      </div>
    )
  }
}

export default PieDemo
