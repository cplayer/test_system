import React from 'react';
import { connect } from 'dva';
import { Form } from 'antd';

@Form.create()
class Step2 extends React.PureComponent {
  render() {
    return <div>Step2</div>;
  }
}

export default connect(({ form }) => ({
  data: form.step,
}))(Step2);
