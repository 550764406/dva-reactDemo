import React from 'react';
import { connect } from 'dva';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state={
            childData: '我是子组件的data'
        }
    }

    componentDidMount(){
        this.props.onRef(this)
    }

    myname= ()=>{
        console.log('父组件调用子组件方法=====>')
    }

    

    render(){
        return(
            <div style={{ background:'#e8e8e8',padding:'20px'}}>
            <div>
                子组件获取父组件传递过来的数据： {this.props.fuTozidata}
            </div>
            <div>
                <button onClick={()=>{this.props.ziToFuData(this.state.childData)}}>【子组件传递数据给父组件====data】</button>
            </div>
            <div>
                <button onClick={this.props.fuToZiMethods}>【子组件调用父组件方法】</button>
            </div>
            </div>
        )
    }
}

export default connect(({Header})=>({Header}))(Header)