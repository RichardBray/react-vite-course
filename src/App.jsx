import Card from './components/Card';
import { videos } from './video-data.js';
import styles from './App.module.css'

function App() {
  const darkMode = true;
  const darkModeClass = darkMode
    ? styles['dark-mode']
    : styles['light-mode'];

  return (
    <div className={`${styles.wrapper} ${darkModeClass}`}>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </div>
  );
}

export default App;
