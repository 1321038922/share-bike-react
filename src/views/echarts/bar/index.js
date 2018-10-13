import React, { Component } from 'react'

import 'echarts/lib/chart/bar';//饼图组件
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint';
import EchartsReact from 'echarts-for-react';
import { Card } from 'antd'

export class Bar extends Component {

  bar1 = () => {
    return {
      title: {
        text: 'OFO周订单'
    },
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'ofo订单量',
            type:'bar',
            data:[500, 1000, 1600, 3000, 2800, 2600, 2870]
        }
    ]
}
}

  render() {
    return (
      <div>
        <Card
          title="饼状图一"
        >
          <EchartsReact option={this.bar1()}>

          </EchartsReact>
        </Card>
        <Card
          title="饼状图二"
        >
          <EchartsReact option={this.bar1()}>

          </EchartsReact>
        </Card>
      </div>
    )
  }
}

export default Bar
