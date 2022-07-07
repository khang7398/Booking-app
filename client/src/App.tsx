
import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { AuthContext, AuthContextProvider } from "./context/authContext";
import Home from "./page/home/Home";
import Hotel from "./page/hotel/Hotel";
import List from "./page/list/List";
import Login from "./page/login/Login";



function App() {
  const ProtectedRoute = ({ children }: any) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
