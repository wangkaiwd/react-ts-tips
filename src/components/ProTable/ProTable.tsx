import { InputNumberProps, SelectProps, Space, Table, TableProps } from 'antd';
import type { ColumnType } from 'antd/es/table/interface';
import type { InputProps, FormItemProps } from 'antd';

// feature:
// 1. search
// 2. pagination

interface ValueTypeMapToProps {
  text: InputProps;
  number: InputNumberProps;
  select: SelectProps;
}

type ValueTypeKeys = keyof ValueTypeMapToProps

export interface ProColumn<RecordType, ValueType extends ValueTypeKeys = 'text'> extends ColumnType<RecordType> {
  hiddenInTable?: boolean;
  valueType?: ValueTypeKeys;
  formItemProps?: FormItemProps,
  // todo: how to get dynamic filedProps type
  fieldProps?: ValueTypeMapToProps[ValueType]
}

interface InternalTableProps<RecordType, ValueType extends ValueTypeKeys = 'text'> extends Omit<TableProps<RecordType>, 'columns'> {
  columns: ProColumn<RecordType, ValueType>[];
}

export interface ProTableProps<RecordType, ValueType extends ValueTypeKeys = 'text'> {
  tableProps: InternalTableProps<RecordType, ValueType>;
}

// how to set proTable default search value
// 1. initial value ? (not perfect)
// 2. set value by search form then request list
// 3. manualRequest
const ProTable = <RecordType extends object, ValueType extends ValueTypeKeys = 'text'> (props: ProTableProps<RecordType, ValueType>) => {
  const { tableProps } = props;
  const { columns } = tableProps;
  console.log('columns', columns);
  return (
    <Space direction={'vertical'}>
      <Table {...tableProps}/>
    </Space>
  );
};

export default ProTable;
