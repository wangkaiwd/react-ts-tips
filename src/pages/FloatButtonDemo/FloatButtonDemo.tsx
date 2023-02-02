import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface IProps {

}

const FloatButtonDemo = (props: IProps) => {
  return (
    <div>
      <FloatButton icon={<QuestionCircleOutlined/>} type="primary" style={{ right: 24 }}/>
      <FloatButton icon={<QuestionCircleOutlined/>} type="default" style={{ right: 94 }}/>
    </div>
  );
};

export default FloatButtonDemo;
