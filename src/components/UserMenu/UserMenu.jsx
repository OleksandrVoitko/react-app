import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import {
  AvatarImg,
  NameSpan,
  WelcomSpan,
  LogOutButton,
  Wraper,
  WraperAvatarDiv,
} from './UserMenu.styled';
import Button from '../Button';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <Wraper>
      <WraperAvatarDiv>
        <AvatarImg
          src={`https://eu.ui-avatars.com/api/?background=ff4500&color=fff&&length=1&name=${name}`}
          alt="avatar"
          title="Your avatar"
        />
      </WraperAvatarDiv>

      <WelcomSpan>
        Welcome, - <NameSpan>{name}</NameSpan>
      </WelcomSpan>
      <Button
        type="button"
        title="Log out"
        aria-label="Log out"
        padding="4"
        handleClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </Button>
      {/* <LogOutButton
        type="button"
        title="Log out"
        aria-label="Log out"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </LogOutButton> */}
    </Wraper>
  );
};

export default UserMenu;
