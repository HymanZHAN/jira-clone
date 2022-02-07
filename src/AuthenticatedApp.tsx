import { Button } from "antd";
import { useAuth } from "contexts/AuthContext";
import { ProjectListScreen } from "screens/project-list/Index";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Button onClick={logout}>登出</Button>
      <ProjectListScreen />
    </div>
  );
};
