// 1. rich form item: input,select,image
// 2. support validate
// 3. auto collect form value
import { Children, cloneElement, forwardRef, useImperativeHandle, useRef } from 'react';
import type { FormItemProps } from './components/FormItem';
import type { Rule } from './types';

interface Rules {
  [k: string]: Rule[];
}

interface FormProps {
  children: JSX.Element | JSX.Element[];
  formValues: Record<string, any>;
  onChange: (values: Record<string, any>) => void;
  rules?: Rules;
}

const Form = forwardRef((props: FormProps, ref) => {
  const { formValues, children, onChange, rules } = props;
  const itemRef = useRef<any>({});
  const _onChange = (valueItem: Record<string, any>) => {
    // todo: deep merge
    onChange({
      ...formValues,
      ...valueItem
    });
  };
  const validate = (): boolean => {
    const keys = Object.keys(itemRef.current);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = itemRef.current[key];
      const value = formValues[key];
      const passed = item.validateItem(value);
      if (!passed) {
        return false;
      }
    }
    return true;
  };
  useImperativeHandle(ref, () => {
    return {
      validate
    };
  });
  return (
    <div className={'form'}>
      {Children.map(children, (item) => {
        const { fieldProps, name } = item.props as FormItemProps;
        return cloneElement(item, {
          ref: (child: any) => itemRef.current[name] = child,
          rules: rules?.[name],
          fieldProps: {
            onChange: (value: any) => _onChange({ [name]: value }),
            value: formValues[name],
            ...fieldProps
          }
        });
      })}
    </div>
  );
});

export default Form;

// formValues
// onChange
// rules: { username:[{required:true,message:'please input username'}] }
