interface Props {

}

type InternalModalProps =
	| { type: 'alert' }
	| { type: 'confirm', confirmButtonMessage?: string }

const InternalModal = (props: InternalModalProps) => {
	return <div>internalModal</div>;
};

type A = JSX.Element

const Modal = (props: Props) => {
	return (
		<>
			<InternalModal type={'alert'}/>
			<InternalModal type={'confirm'} confirmButtonMessage={'a ha'}/>
		</>
	);
};

export default Modal;
