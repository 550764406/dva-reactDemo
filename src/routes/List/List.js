import React from 'react';
import { connect } from 'dva';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                my is list-page
            </div>
        )
    }
}

export default connect((List)=>({List}))(List)
