import {Button, Space} from 'antd';
import {Link} from 'react-router-dom';
import {useSnapshot} from 'valtio';
import user, {updateUserName} from './store/user';

const BasicLayout = () => {
	const snap = useSnapshot(user);

	const onClick = () => {
		updateUserName(snap.name + 1);
	};
	return (
		<div className="App">
			<Space direction={'vertical'}>
				<Button type={'text'}>{snap.name}</Button>
				<Button type={'primary'} onClick={onClick}>change</Button>
			</Space>
			<ul>
				<li><Link to={'/tour'}>tour</Link></li>
				<li><Link to={'/float-button'}>float button</Link></li>
				<li><Link to={'/modal'}>modal</Link></li>
			</ul>
		</div>
	);
};

export default BasicLayout;
