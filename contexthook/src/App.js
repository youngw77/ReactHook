import {useState} from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const[isDark, setIsDark] = useState(false);
  const[toggleDark, setToggleDark] = useState('white' );

  return (
    <UserContext.Provider value={'사용자'}>
    <ThemeContext.Provider value={{isDark, setIsDark, toggleDark, setToggleDark}}>
      <Page></Page>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
