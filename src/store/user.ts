import { proxy } from 'valtio';

const user = proxy({
  name: 'sppk',
  age: 18
});

export const updateUserName = (name: string) => {
  user.name = name;
};

export default user;
