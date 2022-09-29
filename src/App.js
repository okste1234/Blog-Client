import TopNav from "./components/topNav/topNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/log/login";
import Signup from "./pages/signup/signup";
import CreatePost  from "./pages/createPost/createPost";
import Settings from "./pages/settings/settings";
import Home from "./pages/home/home";
import Single from "./pages/single/single";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const currentUser = true;

  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />} />      
        <Route  path="/posts" element={<Home />} />      
        <Route  path="/post/:id" element={<Single />} />      
        <Route path="/createpost" element={currentUser ? <CreatePost /> : <Signup />} />      
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />      
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />      
        <Route path="/signup" element={currentUser ? <Home /> : <Signup />} />
        <Route path="/about" element={currentUser ? <Sidebar /> : <Signup />} />
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
