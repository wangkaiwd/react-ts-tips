import { Input } from 'antd';
import { useState } from 'react';
import { isFalsy } from '../utils';

export interface FormItemProps {
  type?: string;
  name: string; // collect values
  label?: string;
  fieldProps?: Record<string, any>;
}

// required
const FormItem = (props: FormItemProps) => {
  const { fieldProps = {}, name, label } = props;
  const { onChange } = fieldProps;
  const [hasError, setHasError] = useState(false);
  const validateItem = (value: any) => {
    if (isFalsy(value)) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };
  return (
    <div className={'form-item'}>
      <div className={'form-item-control'}>
        <div className={'form-item-control-label'}>{label}:</div>
        <Input
          {...fieldProps}
          onChange={(e) => {
            onChange(e.target.value);
            validateItem(e.target.value);
          }}
        />
      </div>
      {
        hasError &&
        <div className={'form-item-error'} style={{ color: 'red' }}>
          错误提示
        </div>
      }
    </div>
  );
};

export default FormItem;
