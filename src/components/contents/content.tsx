import * as S from './style';

const Content = ({ text }: { text: string }) => {
	return (
		<S.ContextLayout>
			<S.ContentTitle>{text}</S.ContentTitle>
		</S.ContextLayout>
	);
};

export default Content;
