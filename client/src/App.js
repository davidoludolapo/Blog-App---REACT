import Home from "./pages/Home/Home";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context)
  return (
    <>

    <TopBar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={user ? <Home/> :<Register />} />
    <Route path="/login" element={user ? <Home/> : <Login />} />
    <Route path="/write" element={user ? <Write /> : <Register/> } />
    <Route path="/settings" element={ user ? <Settings /> : <Register/>} />
    <Route path="/post/:postId" element={<Single />} />
  </Routes>
    </>
  );
}

export default App;
