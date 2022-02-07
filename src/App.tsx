import { AuthenticatedApp } from "AuthenticatedApp";
import { useAuth } from "contexts/AuthContext";
import { UnauthenticatedApp } from "unauthenticated-app/Index";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
