import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


const LoginIn = ({
    form: {
      getFieldDecorator,
      validateFields
    }
  }) => {
    function handleSubmit (e) {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
        console.log('values=====>',values)
      });
    }
    
    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <div className="login-form-forgot" href="">Forgot password</div>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
}
export default connect(({ LoginIn1 }) => ({ LoginIn1 }))(Form.create()(LoginIn))
