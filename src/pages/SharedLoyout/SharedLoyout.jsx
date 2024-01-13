import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { Container, Header, Logo, NavigationLink } from "./SharedLoyout.styled";
import UserMenu from "../../components/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";

const SharedLoyout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggetIn);
  const state = useSelector((state) => state);
  console.log("state", state);
  return (
    <Container>
      <Header>
        <Logo>
          <span>React</span> App
        </Logo>
        <nav>
          <NavigationLink to="/" end>
            Phone book
          </NavigationLink>
          <NavigationLink to="/todo-list" end>
            Todo List
          </NavigationLink>
        </nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <nav>
            <NavigationLink to="/login" end>
              Login
            </NavigationLink>
            <NavigationLink to="/sing-up" end>
              SingUp
            </NavigationLink>
          </nav>
        )}
      </Header>
      <Suspense
        fallback={<TailSpin color="orangered" height={53} width={53} />}
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLoyout;
