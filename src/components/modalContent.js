import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';

import { Form, Input, Select, Button, Row, Col } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */
const { Option } = Select;
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const Demo = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Form style={{ marginRight: 90 }} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Row style={{ justifyContent: 'space-around' }}>
                <Col xs={6}>
                    <Form.Item
                        label="Nombre"
                        name='name' >

                        <Input style={{ width: 210 }} placeholder="Nombre" id="name" />
                    </Form.Item>
                </Col>
                <Col xs={6}>
                    <Form.Item
                        label="Apellido"
                        name='lastname'>
                        <Input style={{ width: 210 }} placeholder="Apellido" id="lastname" />
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'space-around' }}>
                <Col xs={6}>
                    <Form.Item
                        label="Identificacion"
                        name='id'
                    >
                        <Input style={{ width: 210 }} placeholder="Identificacion" id="id" />
                    </Form.Item>
                </Col>
                <Col xs={6}>
                    <Form.Item
                        label="Rol asociado"
                        name='rol'
                    >
                        <Input style={{ width: 210 }} placeholder="Rol asociado" id="rol" />
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'space-around' }}>
                <Col xs={6}>
                    <Form.Item
                        label="Estado"
                        name='state'
                    >
                        <Input style={{ width: 210 }} placeholder="Estado" id="state" />
                    </Form.Item>
                </Col>
                <Col xs={6}>
                    <Form.Item
                        label="Contraseña"
                        name='pasw'
                    >
                        <Input style={{ width: 210 }} type='password' placeholder="Contraseña" id="pasw" />
                    </Form.Item>
                </Col>
            </Row>

            <Row style={{ justifyContent: 'space-around' }}>
                <Col xs={6}>
                    <Form.Item
                        label="Telefono"
                        name='phone'
                    >
                        <Input style={{ width: 210 }} placeholder="Telefono" id="phone" />
                    </Form.Item>
                </Col>
                <Col xs={6}>
                    <Form.Item
                        label="Correo"
                        name='mail'
                    >
                        <Input style={{ width: 210 }} placeholder="Correoelectronico" id="mail" />
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'space-around' }}>
                <Col xs={6}>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button style={{background: 'linear-gradient(274deg, rgba(80,161,4,1) 31%, rgba(76,204,6,1) 86%)', borderWidth:0, borderRadius:5}} type="primary" htmlType="submit">
                            Aceptar
        </Button>
                    </Form.Item>
                </Col>
                <Col xs={6}>

                    <Button style={{backgroundColor:'#fff', borderColor:'#50a104',  borderRadius:5, borderWidth:0.5, color:'black'}} type="primary" htmlType="submit">
                        Cancelar
        </Button>

                </Col>
            </Row>


        </Form>
    );
};

export default function DataTable() {
    return (
        <div>
            <Demo />

        </div>
    );
}