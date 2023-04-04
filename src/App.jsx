import './App.css';
import Card from './components/Card';
import { videos } from './video-data';

function App() {
  return (
    <>
      {videos.map((video) => (
        <Card key={video.id} title={video.title} description={video.description} />
      ))}
    </>
  );
}

export default App;
