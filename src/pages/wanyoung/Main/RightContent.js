import './RightContent.scss';

const RightContent = () => {
  return (
    <aside className="rightContent positionRelative marginLeft">
      <div className="rightContentWrapper positionFixed flex flexDirectionColumn">
        <div className="flex flexStart marginLeft20px">
          <img
            className="imgCircle56px marginLeft"
            src="images/wanyoung/image/person_pic5.jpg"
            alt="유저사진"
          />
          <div className="flex flexDirectionColumn marginLeft">
            <p className="marginLeft rightContentUserName">wan_0_kim</p>
            <p className="marginLeft fontSize12px">완영</p>
          </div>
        </div>
        <div className="rightContentUserRecommend flex spaceBetween marginTop marginLeft20px">
          <p className="fontSize14px marginLeft">회원님을 위함 추천</p>
          <p className="marginLeft20px">모두보기</p>
        </div>
        <ul className="recommendUserList">
          <li className="recommendUserListLi flex spaceBetween">
            <div className="flex">
              <img
                className="imgCircle32px"
                src="images/wanyoung/image/person_pic2.jpg"
                alt="유저사진"
              />
              <div className="flex flexDirectionColumn marginLeft">
                <p className="rightContentUserName">tree_angel</p>
                <p className="rightContentUserNameDesc">
                  leejinse0k님 외 12명이 팔로우합니다
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="recommendUserListFollow">팔로우</p>
            </div>
          </li>
          <li className="recommendUserListLi flex spaceBetween">
            <div className="flex">
              <img
                className="imgCircle32px"
                src="images/wanyoung/image/person_pic3.jpg"
                alt="유저사진"
              />
              <div className="flex flexDirectionColumn marginLeft">
                <p className="rightContentUserName">wecode_2</p>
                <p className="rightContentUserNameDesc">
                  neter_ee님 외 8명이 팔로우합니다
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="recommendUserListFollow">팔로우</p>
            </div>
          </li>
          <li className="recommendUserListLi flex spaceBetween">
            <div className="flex">
              <img
                className="imgCircle32px"
                src="images/wanyoung/image/person_pic4.jpg"
                alt="유저사진"
              />
              <div className="flex flexDirectionColumn marginLeft">
                <p className="rightContentUserName">suban__0_0</p>
                <p className="rightContentUserNameDesc">
                  peter_k님이 팔로우합니다
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="recommendUserListFollow">팔로우</p>
            </div>
          </li>
          <li className="recommendUserListLi flex spaceBetween">
            <div className="flex">
              <img
                className="imgCircle32px"
                src="images/wanyoung/image/person_pic5.jpg"
                alt="유저사진"
              />
              <div className="flex flexDirectionColumn marginLeft">
                <p className="rightContentUserName">koko_a</p>
                <p className="right_contentUserNameDesc">
                  lee_a_jung님 외 7명이 팔로우합니다
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="recommendUserListFollow">팔로우</p>
            </div>
          </li>
          <li className="recommendUserListLi flex spaceBetween">
            <div className="flex">
              <img
                className="imgCircle32px"
                src="images/wanyoung/image/person_pic6.jpg"
                alt="유저사진"
              />
              <div className="flex flexDirectionColumn marginLeft">
                <p className="rightContentUserName">mina_park</p>
                <p className="rightContentUserNameDesc">
                  jong_ho님이 팔로우합니다
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="recommendUserListFollow">팔로우</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightContent;
