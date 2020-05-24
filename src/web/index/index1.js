import React, { Component } from 'react'
import { Input,Button,Table,Spin,Modal,message } from 'antd';
import "../../css/index1.css"
export default class index1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinning:true,
            visible:false,
            ModalText: '确定删除？',
            confirmLoading: false,
            columns: [
                {
                  title: '用户id',
                  dataIndex: 'id',
                  key: 'id',
                },
                {
                  title: '用户编号',
                  dataIndex: 'number',
                  key: 'number',
                },
                {
                  title: '姓名',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Tags',
                  key: 'tags',
                  dataIndex: 'tags'
                },
                {
                  title: '操作',
                  key: 'action',
                  render: (text, record) => (
                    <span>
                      <a onClick={this.showModal}>删除</a>
                    </span>
                  ),
                },
              ],
            data:[
                {
                  key: '1',
                  id: '1',
                  name: 'John Brown',
                  number: 32,
                  tags: ['nice', 'developer'],
                },
                {
                  key: '2',
                  id: '2',
                  name: 'Jim Green',
                  number: 42,
                  tags: ['loser'],
                },
                {
                  key: '3',
                  id: '3',
                  name: 'Joe Black',
                  number: 32,
                  tags: ['cool', 'teacher'],
                },
              ]
        };
        
      }

      componentDidMount=()=>{
        const _this = this;
        setTimeout(function(){
            _this.setState({
                spinning:false
            })
        },1000)
      }

      showModal = () => {
        this.setState({
          visible: true,
        });
      };
      handleOk = () => {
        message.info('模拟请求，两秒后关闭');
        this.setState({
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
          message.success('删除成功')
        }, 2000);
        
      };
    
      handleCancel = () => {
        this.setState({
          visible: false,
        });
      };
    render() {
        return (
            <div style={{ padding: 24, background: '#fff', minHeight: 720 }}>
                <div hidden={!this.state.spinning} className="SpinBox"><Spin spinning={this.state.spinning} /></div>
                <Modal
                    title="提示"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                    okText="确定删除"
                    cancelText="取消"
                ><p>{this.state.ModalText}</p></Modal>
                <div id="searchHeader">
                  <label>用户编号：</label>
                  <Input placeholder="请输入用户编号" maxLength={25} className="searchInput" />
                  <label>姓名：</label>
                  <Input placeholder="请输入用户姓名" maxLength={25} className="searchInput" />
                  <Button type="primary" style={{marginRight:'16px'}}>提交</Button>
                  <Button>重置</Button>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}
