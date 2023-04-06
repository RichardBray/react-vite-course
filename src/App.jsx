import { lazy, Suspense } from 'react';
import './App.css';
import Card from './components/Card';
import { posts } from './tech-data';

const firstThree = posts.slice(0, 3);
const lastTwo = posts.slice(3, 5);

const LastTwo = lazy(() => import('./components/LastTwo'));

function App() {
  return (
    <>
      {firstThree.map((post) => (
        <Card key={post.id} video={post} />
      ))}
      <Suspense fallback={<div>Loading...</div>}>
        <LastTwo data={lastTwo} />
      </Suspense>
    </>
  );
}

export default App;
