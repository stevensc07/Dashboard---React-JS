import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

const columns = [
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
        render: () => <a>action</a>,
    },
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Stevens ${i}`,
        lastName: `Correa ${i}`,
        id: 1045747348 + i,
        rol: `Administrador ${i}`,
        state: `Activo ${i}`,
        tel: 3215362088 + i,
        mail: `stevensc@uninorte.edu.co ${i}`,
    });
}

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%', paddingLeft:'1%', paddingRight:'1%', marginBottom:'10%' }}>
            <Table style={{ paddingTop: 20 }} tableLayout={'fixed'} size={'small'} columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
        </div>
    );
}