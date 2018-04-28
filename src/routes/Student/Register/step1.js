import React from 'react';
import { connect } from 'dva';
import { Form } from 'antd';

@Form.create()
class Step1 extends React.PureComponent {
  render() {
    return (
      <div>Step1</div>
    )
  }
}


export default connect(({ form }) => ({
  data: form.step,
}))(Step1);