import { lazy, Suspense } from 'react';
import './App.css';
import Card from './components/Card';
import ErrorBoundary from './components/ErrorBoundary'
import { videos } from './video-data';

const Details = lazy(() => {
  return Promise.reject("fail");
});

function App() {
  const showDetails = true;

  return (
    <>
      <ErrorBoundary fallback={<div>Something's gone wrong :(</div>}>
        <Details />
      </ErrorBoundary>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </>
  );
}

export default App;
