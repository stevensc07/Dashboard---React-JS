import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Row, Col } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};


export default function DataTable(props) {
    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue({
            key: props.editar.key,
            name: props.editar.name,
            lastname: props.editar.lastname,
            id: props.editar.id,
            rol: props.editar.rol,
            state: props.editar.state,
            phone: props.editar.tel,
            mail: props.editar.mail,
        });
    }, []);
    const onFinish = (values) => {
        console.log("los props");
        console.log(props)
        props.push(values);
    };
    { console.log(props.editar, ' editar dentro del form') }

    return (
        <div>
            <Form form={form} style={{ marginRight: 90 }} name="nest-messages" onFinish={onFinish} >
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col xs={6}>
                        <Form.Item
                            label="Nombre"
                            name='name'
                            rules={[{ required: true, message: 'Por favor ingrese un nombre' }]}

                        >

                            <Input val style={{ width: 210 }} placeholder="Nombre" id="name" />
                            { }

                        </Form.Item>
                    </Col>
                    <Col xs={6}>
                        <Form.Item
                            label="Apellido"
                            name='lastname'
                            rules={[{ required: true, message: 'Por favor ingrese un apellido' }]}
                        >
                            <Input style={{ width: 210 }} placeholder="Apellido" id="lastname" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col xs={6}>
                        <Form.Item
                            label="Identificacion"
                            name='id'
                            rules={[{ required: true, message: 'Por favor ingrese un ID (C.C)' }]}
                        >
                            <Input style={{ width: 210 }} placeholder="Identificacion" id="id" />
                        </Form.Item>
                    </Col>
                    <Col xs={6}>
                        <Form.Item
                            label="Rol asociado"
                            name='rol'
                            rules={[{ required: true, message: 'Por favor ingrese un rol' }]}
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
                            rules={[{ required: true, message: 'Por favor ingrese un estado' }]}
                        >
                            <Input style={{ width: 210 }} placeholder="Estado" id="state" />
                        </Form.Item>
                    </Col>
                    <Col xs={6}>
                        <Form.Item
                            label="Contraseña"
                            name='pasw'
                            rules={[{ required: true, message: 'Por favor ingrese una contraseña' }]}
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
                            rules={[{ required: true, message: 'Por favor ingrese un correo' }]}
                        >
                            <Input style={{ width: 210 }} placeholder="Correoelectronico" id="mail" />
                        </Form.Item>
                    </Col>

                </Row>
                <div style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <samp> los campos con astriscos (</samp>
                    <samp style={{ color: '#f68875' }}>*</samp>
                    <samp>) son requeridos</samp>
                </div>
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col xs={6}>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button style={{ background: 'linear-gradient(274deg, rgba(80,161,4,1) 31%, rgba(76,204,6,1) 86%)', borderWidth: 0, borderRadius: 5 }} type="primary" htmlType="submit">
                                Aceptar
                             </Button>
                        </Form.Item>
                    </Col>
                    <Col xs={6}>

                        <Button onClick={props.close} style={{ backgroundColor: '#fff', borderColor: '#50a104', borderRadius: 5, borderWidth: 0.5, color: 'black' }}>
                            Cancelar
                         </Button>

                    </Col>
                </Row>


            </Form>

        </div>
    );
}