import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import defaultAvatar from "../../img/avatar_640.png";
import authOperations from "../../redux/auth/authOperations";

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <img src={defaultAvatar} width="22" />
      <span>Welcome, - {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
