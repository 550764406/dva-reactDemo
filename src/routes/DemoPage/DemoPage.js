import React from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';

class DemoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: 'name',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: 'action',
                render: (text) => {
                    return (
                        <Button>delete</Button>
                    )
                },
                key: 'action',
            }],
            bb: [1,2],
            cc: [33,44],
        }
    }

    componentDidMount() {
        
        console.log('this.props=====================>',this.props)
        new Promise((resolve) => {
            let bb = this.state.bb;
            this.props.dispatch({
              type: 'demoPage/demopagetest',
              payload: {
                resolve,
                payload: {
                    bb
                }
               }
            });
          }).then((res) => {
            console.log('handleCheck============>', res);
          });
        new Promise((resolve) => {
            let cc = this.state.cc;
            this.props.dispatch({
              type: 'demoPage/demopagetest1',
              payload: {
                resolve,
                payload: {
                    cc
                }
               }
            });
          }).then((res) => {
            console.log('handleCheck============>', res);
          });
    }



    render() {
        return (
            
            <div>
                <Table
                    dataSource={this.props.demoPage.aa}
                    columns={this.state.columns}
                />
                <Table
                    dataSource={this.props.demoPage.dd}
                    columns={this.state.columns}
                />
            </div>
        )
    }

}

export default connect(({demoPage})=>({demoPage}))(DemoPage);