import { Button, Form, Input, Select, Divider, Col, Row } from 'antd';
// import React from 'react';
import React, { useRef, useState } from 'react';
import './Tools.css'
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const dividerLayout = {
  wrapperCol: {
    offset: 4,
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 24,
  },
};
const App = () => {
  const [form] = Form.useForm();
  // let result = null;
  // const result = useRef(null);
  const [result, setResult] = useState(null);
  // const onGenderChange = (value) => {
  //   switch (value) {
  //     case 'male':
  //       form.setFieldsValue({
  //         note: 'Hi, man!',
  //       });
  //       return;
  //     case 'female':
  //       form.setFieldsValue({
  //         note: 'Hi, lady!',
  //       });
  //       return;
  //     case 'other':
  //       form.setFieldsValue({
  //         note: 'Hi there!',
  //       });
  //   }
  // };
  const onFinish = (values) => {
    console.log(values);
    const result = countBoxes(values.a, values.b, values.c, values.x, values.y, values.z)
    // result.setFieldsValue(result)
    console.log('result:', result)
    setResult(result)
  };
  const onReset = () => {
    form.resetFields();
  };
  const countBoxes = (a, b, c, x, y, z) => {
    // 计算沿大箱子长方向能摆放小箱子的数量，向下取整
    let alongLength = Math.floor(a / x);
    // 计算沿大箱子宽方向能摆放小箱子的数量，向下取整
    let alongWidth = Math.floor(b / y);
    // 计算沿大箱子高方向能摆放小箱子的数量，向下取整
    let alongHeight = Math.floor(c / z);

    return alongLength * alongWidth * alongHeight;
  }
  // const onFill = () => {
  //   form.setFieldsValue({
  //     note: 'Hello world!',
  //     gender: 'male',
  //   });
  // };
  return (
    <div className="page-tools">
      <div className="tools-container">
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Row>
            <Col span={12}><Form.Item {...dividerLayout}><Divider plain>大箱子尺寸</Divider></Form.Item>
              <Form.Item
                name="a"
                label="长"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="b"
                label="宽"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="c"
                label="高"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item></Col>
            <Col span={12}>

              <Form.Item {...dividerLayout}><Divider plain>小箱子尺寸</Divider></Form.Item>

              <Form.Item
                name="x"
                label="长"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="y"
                label="宽"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="z"
                label="高"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item></Col>
          </Row>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              计算能装小箱子数量
            </Button>
            &nbsp;
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
            <div className="result">
              <Divider plain>计算结果</Divider>
              <h1>{result}</h1>
            </div>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};
export default App;