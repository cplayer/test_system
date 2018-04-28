import React from 'react';
import { connect } from 'dva';
import { Form } from 'antd';

@Form.create()
class Step3 extends React.PureComponent {
  render() {
    return (
      <div>Step3</div>
    )
  }
}

export default connect(({ form }) => ({
  data: form.step,
}))(Step3);