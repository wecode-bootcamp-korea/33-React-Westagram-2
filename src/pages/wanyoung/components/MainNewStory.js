import './MainNewStory.scss';
import NewStoryImg from './NewStoryImg';

const MainNewStroy = () => {
  const users = [
    {
      id: 1,
      name: 'peter_2',
      imgUrl: 'images/wanyoung/image/person_pic.jpg',
    },
    {
      id: 2,
      name: 'harray_poter',
      imgUrl: 'images/wanyoung/image/pserson_pic1.jpg',
    },
    {
      id: 3,
      name: 'sherlock',
      imgUrl: 'images/wanyoung/image/person_pic2.jpg',
    },
    {
      id: 4,
      name: 'wattson',
      imgUrl: 'images/wanyoung/image/person_pic3.jpg',
    },
    {
      id: 5,
      name: 'malfoy_2',
      imgUrl: 'images/wanyoung/image/person_pic4.jpg',
    },
    {
      id: 6,
      name: 'React_world',
      imgUrl: 'images/wanyoung/image/person_pic5.jpg',
    },
    {
      id: 7,
      name: 'weStaG_01',
      imgUrl: 'images/wanyoung/image/person_pic6.jpg',
    },
    {
      id: 8,
      name: 'window_os',
      imgUrl: 'images/wanyoung/image/person_pic7.jpg',
    },
    {
      id: 9,
      name: 'Mac_os',
      imgUrl: 'images/wanyoung/image/person_pic8.jpg',
    },
  ];
  return (
    <article className="leftContentNewStory flex spaceBetween">
      {users.map(user => (
        <NewStoryImg users={user} key={user.id} />
      ))}
    </article>
  );
};

export default MainNewStroy;
