import React, { Component } from 'react'
import { Spin } from 'antd';
import "../../css/index1.css"
export default class index3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinning:true,
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
    render() {
        return (
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <div hidden={!this.state.spinning} className="SpinBox"><Spin spinning={this.state.spinning} /></div>
                Bill is a cat.
            </div>
        )
    }
}
