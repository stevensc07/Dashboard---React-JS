import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Row, Col, Input, Button, } from 'antd';
import { Select } from 'antd';
const AdvancedSearchForm = () => {

    const [form] = Form.useForm();
    const { Option } = Select;
        const onFinish = (values) => {
        console.log('Received values of form: ', values);
        return values;
    };

    return (
        <>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
                size='middle'
                style={{ paddingRight: '2%', size: 'small', paddingLeft:60, justifyContent:'center', alignItems:'center' }} >
                <Row>
                    <Col xs={6} lg={12} >
                        <Form.Item
                            label="Nombre"
                            name='name' style={{ marginBottom: -0.05 }}>
                            <Input style={{ width: 210, borderRadius: 5 }} placeholder="Nombre" id="name" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} lg={12}>
                        <Form.Item
                            label="Apellido"
                            name='lastname' style={{ marginBottom: -0.05 }}>
                            <Input style={{ width: 210 }} placeholder="Apellido" id="lastname" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} lg={12}>
                        <Form.Item
                            label="Identificacion (C.C)"
                            name='id'
                            style={{ marginBottom: -0.05 }} >
                            <Input style={{ width: 210 }} placeholder="Identificacion" id="id" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} lg={12}>
                        <Form.Item label="Rol" style={{ marginBottom: -0.05 }}>
                            <Select style={{ width: 210 }} allowClear>
                                <Option value="1">Option 1</Option>
                                <Option value="2">Option 2</Option>
                                <Option value="3">Option 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} lg={12}>
                        <Form.Item label="Estado" style={{ marginBottom: -0.05 }} >
                            <Select style={{ width: 210 }} allowClear>
                                <Option value="1">Estado 1</Option>
                                <Option value="2">Estado 2</Option>
                                <Option value="3">Estado 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row> <Row>
                    <Col xs={6} lg={12}>
                        <Form.Item
                            label="Contraseña"
                            name='pasw' style={{ marginBottom: -0.05 }} >
                            <Input style={{ width: 210 }} type='password' placeholder="Contraseña" id="pasw" />
                        </Form.Item>
                    </Col>
                </Row> <Row>
                    <Col xs={6} lg={12}>
                        <Form.Item
                            label="Telefono"
                            name='phone' style={{ marginBottom: -0.05 }} >
                            <Input style={{ width: 210 }} placeholder="Telefono" id="tel" />
                        </Form.Item>
                    </Col>
                </Row> <Row>
                    <Col xs={6} lg={12}>
                        <Form.Item
                            label="Correo electronico"
                            name='mail'>
                            <Input style={{ width: 210 }} laceholder="Correo electronico" id="mail" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col span={24} style={{ textAlign: 'center', }}>
                    <Button style={{ background: 'linear-gradient(274deg, rgba(80,161,4,1) 31%, rgba(76,204,6,1) 86%)', borderWidth: 0, borderRadius: 5, width:100 }}
                        type="primary" htmlType="submit"> Filtrar
                     </Button>
                    <Button style={{ margin: '0 8px', backgroundColor: '#fff', borderColor: '#50a104', borderRadius: 5, borderWidth: 0.5, color: 'black' , width:100}}
                        onClick={() => { form.resetFields(); }} >
                        Limpiar
                    </Button>

                </Col>
            </Row>
        </>


    );
};
export default function DataTable() {
    return (
        <div style={{ width: '100%', }}>
            <AdvancedSearchForm />

        </div>
    );
}

