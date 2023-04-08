import Card from './components/Card';
import { videos } from './video-data.js';
import './App.css';

function App() {
  const darkMode = false;
  const styles = darkMode
    ? 'dark-mode'
    : 'light-mode';

  return (
    <div className={`wrapper ${styles}`}>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </div>
  );
}

export default App;
