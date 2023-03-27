import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import Form from '../../components/Form/Form';
import FormItem from '../../components/Form/components/FormItem';

// add ts support and various form item
const FloatButtonDemo = () => {
  const [formValues, setFormValues] = useState({});
  const formRef = useRef<any>(null);
  const onClick = () => {
    console.log('values', formValues);
    console.log('ref', formRef.current.validate());
  };
  return (
    <div>
      <Form rules={{ test: [{ maxLength: 4 }, { required: true }], desc: [{ maxLength: 6, message: '超过最大长度' }] }}
            ref={formRef} formValues={formValues}
            onChange={setFormValues}>
        <FormItem label={'Username'} name={'test'}/>
        <FormItem label={'Description'} name={'desc'}/>
      </Form>
      <FloatButton icon={<QuestionCircleOutlined/>} type="primary" style={{ right: 24 }} onClick={onClick}/>
      <FloatButton icon={<QuestionCircleOutlined/>} type="default" style={{ right: 94 }}/>
    </div>
  );
};

export default FloatButtonDemo;
