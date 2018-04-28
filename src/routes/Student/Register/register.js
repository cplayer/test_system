import React, { PureComponent, Fragment } from 'react';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import { Card, Steps } from 'antd';
import { Route, Switch, Redirect } from 'dva/router';
import { getRoutes } from '../../../utils/utils';
import NotFound from '../../Exception/404';

// 预防Steps.Step这种写法
const { Step } = Steps;

export default class Register extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'step1':
        return 0;
      case 'step2':
        return 1;
      case 'step3':
        return 2;
      default:
        return 0;
    }
  }
  render() {
    const { match, routerData } = this.props;
    console.log(this);
    const s = getRoutes(match.path, routerData);
    console.log(s);
    return (
      <PageHeaderLayout
        title="报名活动"
        content="这里可以对各项允许的事务进行申请。"
      >
        <Card bordered={false}>
          <Fragment>
            <Steps current={this.getCurrentStep()}>
              <Step title="选择申请事项" />
              <Step title="上传文件" />
              <Step title="等待审核" />
            </Steps>
            <Switch>
              {getRoutes(match.path, routerData).map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ))}
              <Redirect exact from="/student/register" to="/student/register/step1" />
              <Route render={NotFound} />
            </Switch>
          </Fragment>
        </Card>
      </PageHeaderLayout>
    )
  }
}
