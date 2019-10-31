import React from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';

const DemoPage = ({demoSource0,dispatch, props})=>{
    const columns =[{
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    },{
        title: 'action',
        render:(text)=>{
            return (
                <Button>delete</Button>
            )
        },
        key: 'action',
    }];

    const datasource1 = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }];

    dispatch({
        type: 'demoPage/demopagetest',
        payload: {
            datasource1
        }
    })

    console.log('demoSource======>',demoSource0)
      
    return (
        <div>
        <Table 
            dataSource ={demoSource0} 
            columns={columns}
        />
        </div>
    )
}

export default connect()(DemoPage);