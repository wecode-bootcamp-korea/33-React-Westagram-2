import './LeftContent.scss';
import MainNewStroy from './MainNewStory';
import MainFeedBox from './MainFeedBox';

const LeftContent = () => {
  const feedUsers = [
    {
      id: 1,
      name: 'new_0_person',
      text: '점심 뭐먹지',
      imgUrl: 'images/wanyoung/image/person_pic6.jpg',
    },
    {
      id: 2,
      name: 'harry_Po',
      text: '리액트 재밌다!',
      imgUrl: 'images/wanyoung/image/person_pic7.jpg',
    },
    {
      id: 3,
      name: 'malfoy_92',
      text: '피곤하다...',
      imgUrl: 'images/wanyoung/image/person_pic8.jpg',
    },
  ];

  return (
    <div className="leftContent flex flexDirectionColumn">
      <MainNewStroy />
      {feedUsers.map(user => (
        <MainFeedBox feedUsers={user} key={user.id} />
      ))}
    </div>
  );
};
export default LeftContent;
