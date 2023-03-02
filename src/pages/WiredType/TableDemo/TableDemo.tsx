import ProTable, { ProColumn } from '../../../components/ProTable/ProTable';

interface DataItem {
  a: string;
  b: string;
}

const TableDemo = () => {
  const columns: ProColumn<DataItem>[] = [
    {
      title: '标题',
      dataIndex: 'a',
      valueType: 'select',
      fieldProps: {

      }
    }
  ];
  return (
    <ProTable<DataItem> tableProps={{ columns }}/>
  );
};

export default TableDemo;
