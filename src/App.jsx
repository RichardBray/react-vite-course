import './App.css';
import Card from './components/Card';
import { videos } from './video-data';

function App() {
  const hasMoney = true;
  hasMoney ? console.log("I'm rich") : console.log("I'm poor");

  return (
    <>
      {videos.map((video) => (
        <Card key={video.id} title={video.title} description={video.description} />
      ))}
    </>
  );
}

export default App;

const multiplier = 113;
function isYen(dollars) {
  return dollars * multiplier;
}


isYen(5)