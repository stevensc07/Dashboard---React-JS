import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Row, Col, Input, Button } from 'antd';
import { Select } from 'antd';
const AdvancedSearchForm = () => {

    const [form] = Form.useForm();
    const { Option } = Select;
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 5,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 12,
            },
        },
    };


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
                {...formItemLayout} >
                <Form.Item
                    label="Nombre"
                    name='name' >

                    <Input placeholder="Nombre" id="name" />


                </Form.Item>
                <Form.Item
                    label="Apellido"
                    name='lastname'>
                    <Input placeholder="Apellido" id="lastname" />
                </Form.Item>
                <Form.Item
                    label="Identificacion"
                    name='id'
                >
                    <Input placeholder="Identificacion" id="id" />
                </Form.Item>
                <Form.Item label="Rol" >
                    <Select allowClear>
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Estado" >
                    <Select allowClear>
                        <Option value="1">Estado 1</Option>
                        <Option value="2">Estado 2</Option>
                        <Option value="3">Estado 3</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name='pasw'
                >
                    <Input type='password' placeholder="Contraseña" id="pasw" />
                </Form.Item>
                <Form.Item
                    label="Telefono"
                    name='phone'
                >
                    <Input placeholder="Telefono" id="tel" />
                </Form.Item>
                <Form.Item
                    label="Correo electronico"
                    name='mail'
                >
                    <Input placeholder="Correo electronico" id="mail" />
                </Form.Item>

            </Form>
            <Row>
                <Col
                    span={24}
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button type="primary" htmlType="submit"> Search </Button>
                    <Button style={{ margin: '0 8px', }}
                        onClick={() => {
                            form.resetFields();
                        }} >
                        Clear
              </Button>

                </Col>
            </Row>
        </>


    );
};
export default function DataTable() {
    return (
        <div>
            <AdvancedSearchForm />

        </div>
    );
}

