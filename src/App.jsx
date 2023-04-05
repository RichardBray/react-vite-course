import { lazy } from 'react';
import './App.css';
import Card from './components/Card';
// import Details from './components/Details';
import { videos } from './video-data';

const Details = lazy(() => import('./components/Details'));

function App() {
  const showDetails = false;

  return showDetails ? <Details /> : (
    <>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </>
  );
}

export default App;