import { lazy, Suspense } from 'react';
import './App.css';
import Card from './components/Card';
import { videos } from './video-data.js';

function App() {
  return (
    <>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </>
  );
}

export default App;
