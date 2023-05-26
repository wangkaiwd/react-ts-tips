import { useRef } from 'react';
import FormStore from './formStore';

const useForm = () => {
  const formRef = useRef<FormStore>();
  if (!formRef.current) {
    formRef.current = new FormStore();
  }
  return [formRef.current];
};

export default useForm;
