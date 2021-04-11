import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Row, Col, Input, Button, AutoComplete } from 'antd';
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
                style={{ paddingLeft: '2%', paddingRight: '2%', alignSelf: 'center', size: 'small', }} >
                <Form.Item
                    label="Nombre"
                    name='name' style={{ justifyContent: 'center' }}>

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
                    style={{ justifyContent: 'space-evenly' }}
                >
                    <Input laceholder="Correo electronico" id="mail" />
                </Form.Item>

            </Form>
            <Row>
                <Col
                    span={24}
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button style={{ background: 'linear-gradient(274deg, rgba(80,161,4,1) 31%, rgba(76,204,6,1) 86%)', borderWidth: 0, borderRadius: 5,}} type="primary" htmlType="submit"> Filtrar </Button>
                    <Button style={{ margin: '0 8px', backgroundColor: '#fff', borderColor: '#50a104', borderRadius: 5, borderWidth: 0.5, color: 'black' }}
                        onClick={() => {
                            form.resetFields();
                        }} >
                        Limpiar
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

