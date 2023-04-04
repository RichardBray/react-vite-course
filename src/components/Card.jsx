function Card({ video }) {
  function handleClick() {
    alert('Test');
  }

  return (
    video.genre === "Drama" ?
    <div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <button onClick={handleClick}>View</button>
    </div>
    : null
  );
}

export default Card;
