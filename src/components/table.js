import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import  * as Data from '../controller/tableController'

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%', paddingLeft:'1%', paddingRight:'1%', marginBottom:'10%' }}>
            <Table style={{ paddingTop: 20 }} tableLayout={'fixed'} size={'small'} columns={Data.Columns} dataSource={Data.data} scroll={{ x: 1500, y: 300 }} />
        </div>
    );
}

