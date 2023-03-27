import { Input } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { isFalsy } from '../utils';
import type { Rule } from '../types';

export interface FormItemProps {
  type?: string;
  name: string; // collect values
  label?: string;
  fieldProps?: Record<string, any>;
  rules?: Rule[];
}

// required
const FormItem = forwardRef((props: FormItemProps, ref) => {
  const { fieldProps = {}, label, rules = [] } = props;
  const { onChange } = fieldProps;
  const [error, setError] = useState('');
  const checkRequiredValue = (value: any, rule: any) => {
    if (isFalsy(value)) {
      setError(rule.message || `请输入${label}`);
      return false;
    }
    setError('');
    return true;
  };
  const checkMaxLengthValue = (value: any, rule: any) => {
    if (value?.length > rule.maxLength) {
      setError(rule.message || `最大长度${rule.maxLength}`);
      return false;
    }
    setError('');
    return true;
  };
  const validateItem = (value: any) => {
    for (let i = 0; i < rules.length; i++) {
      const rule: any = rules[i];
      if (rule.required) {
        if (!checkRequiredValue(value, rule)) {
          return false;
        }
      }
      if (rule.maxLength) {
        if (!checkMaxLengthValue(value, rule)) {
          return false;
        }
      }
    }
    return true;
  };
  useImperativeHandle(ref, () => {
    return {
      validateItem
    };
  });
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
        error &&
        <div className={'form-item-error'} style={{ color: 'red' }}>
          {error}
        </div>
      }
    </div>
  );
});

export default FormItem;
