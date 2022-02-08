import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { Row } from "components/lib";
import { useAuth } from "contexts/AuthContext";
import { ProjectListScreen } from "screens/project-list/Index";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";

export const AuthenticatedApp = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Container>
        <Header between={true}>
          <HeaderLeft gap={true}>
            <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
            <h2>项目</h2>
            <h2>用户</h2>
          </HeaderLeft>
          <HeaderRight>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key={"logout"}>
                    <a onClick={logout}>登出</a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a onClick={(e) => e.preventDefault()}>Hi, {user?.name}</a>
            </Dropdown>
          </HeaderRight>
        </Header>
        <Main>
          <ProjectListScreen />
        </Main>
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const Header = styled(Row)`
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  padding: 3.2rem;
`;
// const HeaderItem = styled.h3`
//   margin-right: 3rem;
// `;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
