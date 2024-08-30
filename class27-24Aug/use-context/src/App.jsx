import { ThemeButton } from "./components/ThemeButton"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <>
     <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>React useContext Eg</h1>
          <ThemeButton/>
        </header>
      </div>
     </ThemeProvider>
    </>
  )
}

export default App
