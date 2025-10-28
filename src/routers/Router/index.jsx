import { useAuth } from "../../hooks/useAuth";

import AppRouter from "../AppRouter";
import AuthRouter from "../AuthRouter";

function Router() {
  const { usuario } = useAuth();

  return <>{usuario === null ? <AuthRouter /> : <AppRouter />}</>;
}

export default Router;
