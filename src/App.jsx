import Counter from './components/Counter';
import styles from './App.module.css'

function App() {
  const darkMode = true;
  const darkModeClass = darkMode
    ? styles['dark-mode']
    : styles['light-mode'];

  return (
    <div className={`${styles.wrapper} ${darkModeClass}`}>
      <Counter />
    </div>
  );
}

export default App;
