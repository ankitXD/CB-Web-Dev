import { UserProfile } from "./components/UserProfile";
import { ThemeProvider } from "./context/ThemeContext";
import {LoginForm} from "./components/LoginForm"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const{user} =useContext(AuthContext)
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1> React usecontext Eg</h1>
          {user ?<UserProfile/>: <LoginForm/>}
        </header>
      </div>
    </ThemeProvider>
  );
  
}
export default App;
