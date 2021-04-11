/* const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
]; */

export const Columns = [
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
export const data = [];
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

