import styled from "@emotion/styled";
import { Button } from "antd";
import { Row } from "components/lib";
import { useAuth } from "contexts/AuthContext";
import { ProjectListScreen } from "screens/project-list/Index";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Container>
        <Header between={true}>
          <HeaderLeft gap={true}>
            <h2>Logo</h2>
            <h2>项目</h2>
            <h2>用户</h2>
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

const Header = styled(Row)`
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`;
// const HeaderItem = styled.h3`
//   margin-right: 3rem;
// `;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
