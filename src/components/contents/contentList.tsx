import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import Content from './content';
import * as S from './style';

const ContentList = () => {
	const { contentList, refObserver } = useInfiniteScroll();

	return (
		<>
			<S.ContentListLayout>
				<S.ContentsTitle>콘텐츠 큐레이션 제목</S.ContentsTitle>
				{contentList.map(({ text }, idx) => {
					return <Content key={idx} text={text} />;
				})}
				<S.ObserverDiv ref={refObserver} />
			</S.ContentListLayout>
		</>
	);
};

export default ContentList;
