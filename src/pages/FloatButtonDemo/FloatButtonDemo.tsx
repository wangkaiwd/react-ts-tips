import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import Form from '../../components/Form/Form';
import FormItem from '../../components/Form/components/FormItem';

const FloatButtonDemo = () => {
  const [formValues, setFormValues] = useState({});
  const formRef = useRef<any>(null);
  const onClick = () => {
    console.log('values', formValues);
    console.log('ref', formRef.current);
  };
  return (
    <div>
      <Form ref={formRef} formValues={formValues} onChange={setFormValues}>
        <FormItem label={'Username'} name={'test'}/>
      </Form>
      <FloatButton icon={<QuestionCircleOutlined/>} type="primary" style={{ right: 24 }} onClick={onClick}/>
      <FloatButton icon={<QuestionCircleOutlined/>} type="default" style={{ right: 94 }}/>
    </div>
  );
};

export default FloatButtonDemo;
