import React, { Component } from 'react'
import { Form, Card, Button, Select, DatePicker, Table, Modal,message } from 'antd';
import './index.less'
import axios from '../../axios'
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;


class OrderDemo extends Component {

  componentWillMount() {
    this.getTable()
  }
  state = {
    dataSource: [],
    pageSize: '',
    totle: '',
    isloading: false,
    endItem: {},
    selectedIndex:[]
  }
  params = {
    pn: 1
  }
  handleReset = () => {
    this.props.form.resetFields()
  }
  handleSearch = () => {
    console.log(this.props.form.getFieldsValue())
  }
  
  handleDown = () => {
    let selectedItem = this.state.selectedItem
    if(selectedItem){
      axios.get('/order/ebike_info',{id: selectedItem[0].id}).then(res => {
        console.log(res)
        this.setState({
          endItem : res.result,
          isShowModal:true
        })
      })
    }else{
      message.info('你没有选择任何订单')
    }
  }
  //用户确认结束
  handleEnd = ()=> {
    let id = this.state.selectedItem[0].id
    this.setState({
      isShowModal:false
    })
    axios.get('/order/finish_order',{id}).then(res =>{
      if(res.code == 0){
        message.success('订单结束成功')
        this.getTable()
      }
    })
  }
  getDetail = () => {
    let item = this.state.selectedItem
    if(item){
      window.open( `/common/order_demo/detail/${item[0].id}`, '_blank')
    }else{
      message.info('你没有选择任何订单')
    }
  }
  //获取数据
  getTable = () => {
    this.setState({
      isloading: true
    }, () => {
      axios.get('/order/list', this.params).then(res => {
        console.log(res)
        if (res.code == 0) {
          this.setState({
            dataSource: res.result.item_list.map((item, index) => {
              item.key = index
              return item
            }),
            pageSize: 10,
            total: res.result.total_count,
            isloading: false
          })
        }
      })
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const ctiyOptions = [
      {
        label: '北京',
        value: '0'
      },
      {
        label: '上海',
        value: '1'
      },
      {
        label: '广东',
        value: '2'
      },

    ]
    const orderStatus = [
      {
        label: '进行中',
        value: '0'
      },
      {
        label: '结束',
        value: '1'
      },
      {
        label: '已完成',
        value: '2'
      },

    ]
    const columus = [
      {
        title: '订单编号',
        dataIndex: 'order_sn',
        key: 'order_sn'
      },
      {
        title: '车辆编号',
        dataIndex: 'bike_sn',
        key: 'bike_sn'
      },
      {
        title: '用户名',
        dataIndex: 'user_name',
        key: 'user_name'
      },
      {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile'
      },
      {
        title: '里程',
        dataIndex: 'distance',
        render(distance) {
          return distance / 1000 + "Km"
        },
        key: 'distance'
      },
      {
        title: '行驶时长',
        dataIndex: 'total_time',
        key: 'total_time'
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
      },
      {
        title: '开始时间',
        dataIndex: 'start_time',
        key: 'start_time'
      },
      {
        title: '结束时间',
        dataIndex: 'end_time',
        key: 'end_time'
      },
      {
        title: '订单金额',
        dataIndex: 'total_fee',
        key: 'total_fee'
      },
      {
        title: '实付金额',
        dataIndex: 'user_pay',
        key: 'user_pay'
      },
    ]
    const pagination = {
      total: this.state.total,
      pageSize: 10,
      onChange: (index) => {
        this.params.pn = index
        this.getTable()
      }
    }
    const rowSelection = {
      type:'radio',
      selectedRowKeys: this.state.selectedIndex,
      onChange:(selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys, selectedRows)
        this.setState({
          selectedItem: selectedRows,
          selectedIndex: selectedRowKeys,
        })
      }

    }
    return (
      <div className="order-demo">
        <Card>
          <Form
            layout="inline"
          >
            <FormItem
              label="城市">
              {
                getFieldDecorator('city')(
                  <Select style={{ width: 150 }}>
                    {ctiyOptions.map(item =>
                      <Option value={item.value} key={item.value}>{item.label}</Option>
                    )}
                  </Select>
                )
              }
            </FormItem>
            <FormItem
              label="订单时间"
            >
              {
                getFieldDecorator('date')(
                  <RangePicker>

                  </RangePicker>
                )
              }

            </FormItem>
            <FormItem
              label="订单状态">
              {
                getFieldDecorator('order_status')(
                  <Select style={{ width: 150 }}>
                    {orderStatus.map(item =>
                      <Option value={item.value} key={item.value}>{item.label}</Option>
                    )}
                  </Select>
                )
              }
            </FormItem>
          </Form>
          <div className="btn-wrap">
            <Button style={{ marginRight: "20px" }} type="primary" onClick={this.handleSearch}>查询</Button>
            <Button onClick={this.handleReset}>重置</Button>
          </div>
        </Card>
        <Card style={{ marginTop: '-1px' }}>
          <Button style={{ marginRight: "20px" }} onClick={this.getDetail} type="primary">订单详情</Button>
          <Button onClick={this.handleDown}>结束订单</Button>
        </Card>
        <Card>
          <Table
            loading={this.state.isloading}
            rowSelection={rowSelection}
            columns={columus}
            pagination={pagination}
            dataSource={this.state.dataSource}></Table>
        </Card>
        <Modal
          title='结束订单'
          visible= {this.state.isShowModal}
          onOk={this.handleEnd}
          onCancel={()=> this.setState({isShowModal: false})}
        >
          <ul className='ul-data'>
            <li>
              <span className="car-num li-title">车辆编号:</span>
              {this.state.endItem.bike_sn}
            </li>
            <li>
              <span className="car-num li-title">剩余电量:</span>
              {this.state.endItem.battery}
            </li>
            <li>
              <span className="car-num li-title">行程开始时间:</span>
              {this.state.endItem.start_time}
            </li>
            <li>
              <span className="car-num li-title">当前位置:</span>
              {this.state.endItem.location}
            </li>
          </ul>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(OrderDemo)
