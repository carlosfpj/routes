import {HashRouter, Routes, Route} from "react-router-dom";
import { HomePage } from "./HomePage";
import {ProfilePage} from "./ProfilePage";
import {BlogPage} from "./BlogPage";
import { Menu } from "./Menu";

function App() {
  return (
    <>
      <HashRouter>
        <Menu/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
