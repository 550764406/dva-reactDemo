import React from 'react';
import { connect } from 'dva';
import Header from './../../commpent/Header/Header.js'

class FuToChild extends React.Component{
   constructor(props){
        super(props);

        this.state={
            parentData: '我是父组件的data',
            ziToFuDataParent: ''
        }
   }

   //子元素到父元素data
   ziToFuData1=(event)=>{
        this.setState({
            ziToFuDataParent: event
        })
   }

   //子元素调用父元素methods
   ziToFuMethods= ()=>{
       console.log('fu====methods')
   }

   //父元素到子元素methods
   onRef= (ref)=>{
        this.child = ref;
   }

   click= ()=>{
       console.log('this.child===========>',this.child)
        this.child.myname()
   }



   render(){
        return (
            <>
                <h1>fuTochild=====>DATA</h1>
                <div className='fu-wrapper'>【我是父元素：】
                </div>
                =========================================================
                <h1>childTofu=====>DATA</h1>
                <div className='fu-wrapper'>
                     【我是父组件：数据是从子组件传递过来的data======》{this.state.ziToFuDataParent}】
                </div>

                =========================================================
                <h1>childTofu=====>Methods</h1>
                <div className='fu-wrapper'>【我是父组件：】
                    <Header 
                        fuTozidata={this.state.parentData}  //这里是父组件传递数据给子组件变量
                        ziToFuData={this.ziToFuData1} //这里是子组件传递父组件定义变量
                        ziToFuMethods={this.ziToFuMethods}   //子组件调用父组件定义的方法
                        onRef={this.onRef}  // 这里用于父组件调用子组件通过ref传递
                     />
                </div>


                =========================================================
                <h1>fuTochild=====>Methods</h1>
                <div className='fu-wrapper'>【我是父组件：】
                    <button onClick={this.click}>点击父组件调用子方法</button>  {/*这里用于父组件调用子组件通过ref传递*/}
                </div>

            </>
        )
    }
}

export default connect(({FuToChild})=>({FuToChild}))(FuToChild);
