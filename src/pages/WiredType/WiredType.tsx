import {useEffect, useRef} from 'react';
import useDemo from './hooks';

interface Props {

}

const fn = <T, >(initialValue: T) => {
	return initialValue;
};

const WiredType = (props: Props) => {
	const [state, setState] = useDemo();
	setState(2);
	const elRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		console.log(elRef.current?.firstChild);
	}, []);
	return (
		<div ref={elRef}>
			WiredType
		</div>
	);
};

export default WiredType;
