import Card from './components/Card';
import { videos } from './video-data.js';

function App() {
  const darkMode = true;
  const styles = darkMode
    ? { color: 'white', backgroundColor: 'black' }
    : { color: 'black', backgroundColor: 'white' };

  return (
    <div style={{ ...styles, fontFamily: 'sans-serif', textAlign: 'center' }}>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </div>
  );
}

export default App;
