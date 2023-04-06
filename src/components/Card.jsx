function Card({ video }) {
  return (
    <div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <button>View</button>
    </div>
  );
}

export default Card;
