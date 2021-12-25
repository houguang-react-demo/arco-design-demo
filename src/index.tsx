import { Table } from '@arco-design/web-react';
import ReactDOM from 'react-dom';
import React from 'react';

function Index() {
  const columns = [
    { title: 'A', width: 300, key: 'a', dataIndex: 'a', fixed: 'left' as const },
    { title: 'B', width: 300, key: 'b', dataIndex: 'b' },
    { title: 'C', width: 300, key: 'c', dataIndex: 'c' },
    { title: 'D', width: 300, key: 'd', dataIndex: 'd' },
    { title: 'E', width: 300, key: 'e', dataIndex: 'e' },
    { title: 'F', width: 300, key: 'f', dataIndex: 'f', fixed: 'right' as const },
  ];
  const data = [
    { a: 1, b: 1, c: 1, d: 1, e: 1, f: 1 },
    { a: 2, b: 2, c: 2, d: 2, e: 2, f: 2 },
    { a: 3, b: 3, c: 3, d: 3, e: 3, f: 3 },
  ];
  return (
    <div>
      <Table rowKey="a" columns={columns} data={data} scroll={{ x: true }} />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
