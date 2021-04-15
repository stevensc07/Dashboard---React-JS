import React, { useContext, useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import Button from '@material-ui/core/Button';
import { Table, Input, Popconfirm, Form, Space } from 'antd';
import * as Data from '../controller/tableController'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Content from '../components/modalContent'
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
const EditableContext = React.createContext(null);
function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

export default class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Nombre',
                width: 80,
                dataIndex: 'name',
                key: 'name',
                fixed: 'left',
            },
            {
                title: 'Apellido',
                width: 80,
                dataIndex: 'lastName',
                key: 'lastname',
                fixed: 'left',
            },
            {
                title: 'Identificacion',
                dataIndex: 'id',
                key: '1',
                width: 100,
            },
            {
                title: 'Rol',
                dataIndex: 'rol',
                key: '2',
                width: 80,
            },
            {
                title: 'Estado',
                dataIndex: 'state',
                key: '3',
                width: 80,
            },
            {
                title: 'Telefono',
                dataIndex: 'tel',
                key: '4',
                width: 80,
            },
            {
                title: 'Correo electronico',
                dataIndex: 'mail',
                key: '5',
                width: 150,
            },

            {
                title: 'Action',
                key: 'operation',
                fixed: 'right',
                width: 80,
                render: (_, record) =>
                    this.state.dataSource.length >= 1 ? (

                        <Space size="middle">
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                                <a>Delete</a>
                            </Popconfirm>
                            <Popconfirm title="Sure to edit?" onConfirm={() => this.handleClickEdit(record)}>
                                <a>Edit</a>
                            </Popconfirm>


                        </Space>


                    ) : null,

            },
        ];
        this.state = {
            dataSource: [] = Data.data,
            count: 2,
            openD: false,
            edit: ''
        };
    }
    handleClickOpen = () => {
        this.setState({
            openD: true,
            edit: ''
        })
        console.log("opend: ", this.state.openD)
    };
    handleClickEdit = (index) => {
        const { edit } = this.state;
        const newData = {
            key: index.key,
            name: index.name,
            lastname: index.lastName,
            id: index.id,
            rol: index.rol,
            state: index.state,
            tel: index.tel,
            mail: index.mail,

        };
        const name = index.name;
        this.setState({
            edit: newData,
        });
        console.log(newData, ' a')
        console.log(name, ' el name ')
        console.log(edit, ' el edit')

        this.setState({
            openD: true
        })
        console.log("opend: ", this.state.openD)
    };
    handleClose = () => {
        this.setState({
            openD: false
        })
        console.log("opend: ", this.state.openD)
    };
    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
    };
    handleAdd = (values) => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: values.name,
            lastName: values.lastname,
            id: values.id,
            rol: values.rol,
            state: values.state,
            tel: values.phone,
            mail: values.mail,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
        this.handleClose();
    };
    handleAdd2 = (values) => {
        const { count, dataSource } = this.state;
        const newData = {
            key: values.key,
            name: values.name,
            lastName: values.lastname,
            id: values.id,
            rol: values.rol,
            state: values.state,
            tel: values.phone,
            mail: values.mail,
        };
        {console.log('aquiiii')}
        this.handleDelete(values.key);
        this.setState({
            dataSource: [...dataSource, newData],
            
        });
        this.handleClose();
    };
    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData,
        });
    };




    render() {
        const { dataSource } = this.state;
        const { openD } = this.state;
        const { edit } = this.state;
        { console.log(edit, 'edit en la clase') }
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>


                <div style={{ marginBottom: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ marginLeft: 30, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                        <PeopleAltIcon style={{ color: "#5422b9" }}></PeopleAltIcon> <samp style={{ marginLeft: 20, color: "#5422b9", marginTop: 3 }}> Usuarios existentes</samp>
                    </div>
                    <div style={{ marginRight: 30, marginTop: 20 }} >
                        <Button variant='contained' color="primary" onClick={this.handleClickOpen}>
                            Crear
                        </Button>
                    </div>

                </div>


                <div style={{ height: 400, width: '100%', paddingLeft: '1%', paddingRight: '1%', marginBottom: '10%' }}>
                    <Table style={{ paddingTop: 20 }} tableLayout={'fixed'} size={'small'} dataSource={dataSource}
                        columns={columns} scroll={{ x: 1500, y: 300 }} />
                </div>
                <Dialog
                    open={openD}
                    onClose={this.handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title">
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Agregar nuevo usuario
                    </DialogTitle>
                    <DialogContent style={{ borderRadius: 100 }}>
                        <Content editar={edit}  close={() => this.handleClose()} push={(values) => {
                            console.log("esto es lo del form");
                            console.log(values);
                             this.handleAdd2(values);
                        }}>
                        </Content>
                    </DialogContent>

                </Dialog>

            </div>
        );
    }
}