import './NewStoryImg.scss';

const NewStoryImg = ({ users }) => {
  const { name, imgUrl } = users;
  return (
    <div className="newStoryInnerBox positionRelative flex center flexDirectionColumn marginLeft">
      <img
        className="imgCircle56px"
        src="images/wanyoung/image/circle.png"
        alt="아이콘"
      />
      <img
        className="newStoryUserImg positionAbsolute imgCircle46px"
        src={imgUrl}
        alt="유저사진"
      />
      <span>{name}</span>
    </div>
  );
};
export default NewStoryImg;
