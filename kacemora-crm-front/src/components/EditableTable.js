/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import {
  Table,
  Input,
  InputNumber,
  Button,
  Popconfirm,
  Form,
  Divider,
} from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import { Pagination } from 'antd';

const originData = [];

// for (var i = 0; i < 5; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(null);
  const [editingKey, setEditingKey] = useState('');
  const [count, setCount] = useState(0);

  const isEditing = record => record.key === editingKey;
  useEffect(() => {
    fetch('http://localhost/crovex/Crovex/HTML/dashboard/data.php')
      .then(res => res.json())
      .then(newData => {
        newData.map((entry, key) => {
          originData.push({
            key: entry.id,
            id: entry.id,
            customer: entry.customer,
            yarn_type: entry.yarn_type,
            yarn_count: entry.yarn_count,
            yarn_color: entry.yarn_color,
            delivery_date: entry.delivery_date,
            yarn_lot: entry.yarn_lot,
            yarn_weight: entry.yarn_weight,
            yarn_unit_price: entry.yarn_unit_price,
          });
        });
        setData([...originData]);
        setCount(parseInt(originData[originData.length - 1].id) + 1);
      });
  }, []);

  const handleDelete = key => {
    setData({
      data: data.filter(item => item.key !== key),
    });
  };

  const handleAdd = record => {
    console.log(record);
    const newData = {
      key: count,
      id: count,
      customer: `New Customer`,
      yarn_type: ``,
      yarn_count: ``,
      yarn_color: ``,
      delivery_date: ``,
      yarn_lot: ``,
      yarn_weight: ``,
      yarn_unit_price: ``,
    };
    setCount(count + 1);
    setData([...data, newData]);
    edit(newData);
  };

  const edit = record => {
    console.log(record);
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key, e) => {
    e.preventDefault();
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        console.log(newData);
        fetch(
          'http://localhost/crovex/Crovex/HTML/dashboard/edit_stock_yarn.php',
          { method: 'POST', body: JSON.stringify(newData) }
        ).then(res => console.log(res));
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: '10%',
      editable: false,
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      width: '10%',
      editable: true,
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.customer.length - b.customer.length,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Yarn Type',
      dataIndex: 'yarn_type',
      width: '10%',
      editable: true,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.yarn_type.length - b.yarn_type.length,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Yarn Count',
      dataIndex: 'yarn_count',
      width: '10%',
      editable: true,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.yarn_count.length - b.yarn_count.length,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Yarn Color',
      dataIndex: 'yarn_color',
      width: '10%',
      editable: true,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.yarn_color.length - b.yarn_color.length,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Delivery Date',
      dataIndex: 'delivery_date',
      width: '10%',
      editable: true,
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        return moment(a.delivery_date).unix() - moment(b.delivery_date).unix();
      },
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Yarn Lot',
      dataIndex: 'yarn_lot',
      width: '10%',
      editable: true,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.yarn_lot.length - b.yarn_lot.length,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Yarn Weight',
      dataIndex: 'yarn_weight',
      width: '10%',
      editable: true,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.yarn_weight - b.yarn_weight,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Yarn Unit Price',
      dataIndex: 'yarn_unit_price',
      width: '10%',
      editable: true,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.yarn_unit_price - b.yarn_unit_price,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <span>
              <a
                href=''
                onClick={e => save(record.key, e)}
                style={{
                  marginRight: 8,
                }}
              >
                Save
              </a>
              <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          </>
        ) : (
          <>
            <a disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </a>
            <Divider type='vertical' />
            <Popconfirm
              title='Sure to delete?'
              onConfirm={() => handleDelete(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      {/* <Pagination showSizeChanger /> */}
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName='editable-row'
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '15'],
          locale: { items_per_page: '' },
          showTotal: (total, range) =>
            `Showing rows ${range[0]} to ${range[1]} of ${total}`,
        }}
      />
      <div className='d-flex align-items-end justify-content-end'>
        <Button
          onClick={handleAdd}
          type='primary'
          style={{ margin: '16px 16px 16px 16px', width: '200px' }}
        >
          Add a row
        </Button>
      </div>
    </Form>
  );
};

export default EditableTable;
