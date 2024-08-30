import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
      <div>
          <h1> Button</h1>
          <button onClick={toggleTheme} style={{backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'}} >
            Toggle to {theme === 'light'?'dark':'light'}
          </button>
    </div>
  )
}