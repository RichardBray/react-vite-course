import Counter from './components/Counter';
import styles from './App.module.css';
import { CounterProvider } from './CounterContext';
import Details from './components/Details';

function App() {
  const darkMode = true;
  const darkModeClass = darkMode ? styles['dark-mode'] : styles['light-mode'];

  return (
    <CounterProvider>
      <div className={`${styles.wrapper} ${darkModeClass}`}>
        <Counter />
        <Details />
      </div>
    </CounterProvider>
  );
}

export default App;
