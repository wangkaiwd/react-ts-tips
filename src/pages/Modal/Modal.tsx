import { useEffect, useMemo, useState } from 'react';
import { useMemoizedFn } from 'ahooks';

interface Props {

}

type InternalModalProps =
  | { type: 'alert' }
  | { type: 'confirm', confirmButtonMessage?: string }

const InternalModal = (props: InternalModalProps) => {
  return <div>internalModal</div>;
};

const Modal = (props: Props) => {
  const [count, setCount] = useState(0);
  const double = useMemo(() => count * 2, [count]);
  console.log('double', double);
  const fn = useMemoizedFn((prevState) => {
    console.log('prevState', prevState);
    setTimeout(() => {
      console.log('double-----', double);
    }, 1000);
    return prevState;
  });
  useEffect(() => {
    Promise.resolve(1).then(() => {
      setCount(1);
      setCount(fn);
    });
  }, []);
  return (
    <>
      <InternalModal type={'alert'}/>
      <InternalModal type={'confirm'} confirmButtonMessage={'a ha'}/>
    </>
  );
};

export default Modal;
