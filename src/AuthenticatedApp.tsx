import styled from "@emotion/styled";
import { Button } from "antd";
import { useAuth } from "contexts/AuthContext";
import { ProjectListScreen } from "screens/project-list/Index";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Container>
        <Header>
          <HeaderLeft>
            <h3>Logo</h3>
            <h3>项目</h3>
            <h3>用户</h3>
          </HeaderLeft>
          <HeaderRight>
            <Button onClick={logout}>登出</Button>
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

const Header = styled.header`
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div``;
const Main = styled.main``;
