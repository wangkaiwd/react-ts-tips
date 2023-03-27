// 1. rich form item: input,select,image
// 2. support validate
// 3. auto collect form value
import { Children, cloneElement, forwardRef, useImperativeHandle, useRef } from 'react';
import type { FormItemProps } from './components/FormItem';

interface FormProps {
  children: JSX.Element | JSX.Element[];
  formValues: Record<string, any>;
  onChange: (values: Record<string, any>) => void;
}

const Form = forwardRef((props: FormProps, ref) => {
  const { formValues, children, onChange } = props;
  const itemRef = useRef<any>();
  const _onChange = (valueItem: Record<string, any>) => {
    // todo: deep merge
    onChange({
      ...formValues,
      ...valueItem
    });
  };
  const validate = (): boolean => {
    console.log('validate');
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
