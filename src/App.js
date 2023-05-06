import {HashRouter, Routes, Route} from "react-router-dom";
import { HomePage } from "./HomePage";
import {ProfilePage} from "./ProfilePage";
import {BlogPage} from "./BlogPage";
import {LoginPage} from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { BlogPost } from "./Blogpost";
import { Menu } from "./Menu";
import {AuthProvider} from "./auth"

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage/>} />
            <Route path="/logout" element={<LogoutPage/>} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="*" element={<p>not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
