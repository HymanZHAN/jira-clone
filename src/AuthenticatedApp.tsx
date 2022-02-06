import { useAuth } from "context/AuthContext";
import { ProjectListScreen } from "screens/project-list/Index";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />;
    </div>
  );
};
