import {useState} from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const[isDark, setIsDark] = useState(false);
  const[toggleDark, setToggleDark] = useState('false' );

  return (
    <ThemeContext.Provider value={{isDark, setIsDark, toggleDark, setToggleDark}}>
      <Page></Page>
    </ThemeContext.Provider>
  );
}

export default App;
