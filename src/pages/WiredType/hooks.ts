import {useState} from 'react';

const useDemo = () => {
	const [state, setState] = useState(0);
	return [state, setState] as const;
};

export default useDemo;
